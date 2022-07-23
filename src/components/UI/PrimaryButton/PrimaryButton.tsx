import React from 'react';
import styles from "./PrimaryButton.module.css"

interface PrimaryButtonProps {
    children: React.ReactNode;
    click: () => void;
}

const PrimaryButton = ({children, click}:PrimaryButtonProps) => {
    return (
        <button onClick={click} className={styles.button}>
            {children}
        </button>
    );
};

export default PrimaryButton;