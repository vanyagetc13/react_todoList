import React from "react";
import styles from "./ColoredHRLine.module.css";

interface ColoredHRLine {
    color?: string;
}

const ColoredHRLine = ({ color = "black" }: ColoredHRLine) => {
    return (
        <hr
            className={styles.hr}
            style={{ color: color, backgroundColor: color }}
        />
    );
};

export default ColoredHRLine;
