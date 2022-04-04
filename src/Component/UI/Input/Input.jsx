import React from 'react';
import styles from './Input.module.scss'

const Input = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={styles.Input}/>
    );
});

export default Input;
