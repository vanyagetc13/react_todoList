import React from "react";
import styles from "./MyInput.module.css";
import { observer } from "mobx-react-lite";

interface InputProps {
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (e: any) => void;
}

const MyInput = ({
    type = "text",
    placeholder = "",
    onChange,
    value,
}: InputProps) => {
    return (
        <input
            onChange={onChange}
            className={styles.input}
            type={type}
            value={value}
            placeholder={placeholder}
        />
    );
};

export default MyInput;
