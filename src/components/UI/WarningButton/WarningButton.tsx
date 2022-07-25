import React from 'react';
import { ButtonProps } from '../../../types';
import styles from "./WarningButton.module.css"

const SecondaryButton = ({children, click}:ButtonProps) => {
    return (
        <button onClick={click} className={styles.button}>
            {children}
        </button>
    );
};

export default SecondaryButton;