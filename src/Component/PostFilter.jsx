import React from "react";
import Input from "./UI/Input/Input";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        placeholder="search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="сортировка по"
        options={[
          { value: "title", name: "Название" },
          { value: "body", name: "Описание" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
