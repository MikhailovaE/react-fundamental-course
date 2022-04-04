import React, { useMemo, useState } from "react";
import PostFilter from "./Component/PostFilter";
import PostForm from "./Component/PostForm";
import PostList from "./Component/PostList";
import Button from "./Component/UI/Button/Button";
import MyModal from "./Component/UI/Modal/MyModal";
import { usePosts } from "./hooks/usePost";

import "./styles/App.scss";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };


  return (
    <div className="App">
      <Button onClick={() => setModal(true)}> create new post</Button>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="list1"
      />
    </div>
  );
}

export default App;
