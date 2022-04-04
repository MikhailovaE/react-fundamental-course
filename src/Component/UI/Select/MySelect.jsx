import React from 'react';
import styles from './MySelect.module.scss'

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={styles.Select}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;