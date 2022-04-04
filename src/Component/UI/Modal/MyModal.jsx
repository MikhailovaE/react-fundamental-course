import React from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames";
import Button from "../Button/Button";

const MyModal = ({ children, visible, setVisible }) => {
  return (
    <div className={classNames(styles.modal, visible && styles.active)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <Button className={styles.close} onClick={() => setVisible(false)}>
          close
        </Button>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
