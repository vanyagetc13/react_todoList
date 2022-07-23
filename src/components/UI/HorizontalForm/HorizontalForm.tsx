import React from "react";
import styles from "./HorizontalForm.module.css";

interface HorizontalFormProps {
    children: React.ReactNode;
    action?: string;
}

const HorizontalForm = ({ children, action }: HorizontalFormProps) => {
    return (
        <form
            action={action}
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
            }}
            className={styles.form}
        >
            {children}
        </form>
    );
};

export default HorizontalForm;
