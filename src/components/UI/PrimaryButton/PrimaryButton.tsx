import React from 'react';
import { ButtonProps } from '../../../types';
import styles from "./PrimaryButton.module.css"


const PrimaryButton = ({children, click}:ButtonProps) => {
    return (
        <button onClick={click} className={styles.button}>
            {children}
        </button>
    );
};

export default PrimaryButton;