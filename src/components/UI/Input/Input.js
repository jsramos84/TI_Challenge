import React from 'react';

import styles from './Input.module.css';

const input = props => {
    switch (props.type) {
        case 'input':
            return (
                <input className={styles.Input} {...props.config} value={props.value}/>
            );
        
        default:
            return (
                <input className={styles.Input} {...props.config} value={props.value} onChange={props.action} />
            );
    };
};

export default input;