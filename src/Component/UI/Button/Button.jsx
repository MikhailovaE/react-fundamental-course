import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, onClick, props }) => {
  return (
    <button {...props} onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
