import React, { InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";

type variant = "default" | "outline";

type materialInputProps = { label: string; variant?: variant } & InputHTMLAttributes<HTMLInputElement>;

const MaterialInput: React.FC<materialInputProps> = ({
    label,
    className = "",
    onKeyUp = () => {},
    variant = "default",
    ...props
}) => {
    let input = React.createRef<HTMLInputElement>();

    let [empty, setEmpty] = React.useState(true);

    const keyUpHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void = event => {
        setEmpty(!event.currentTarget.value.length);
        onKeyUp(event);
    };

    return (
        <div className={styles["material-input"]}>
            <input
                ref={input}
                {...props}
                className={`${empty ? styles["empty"] : ""} ${className} ${styles[variant]}`}
                onKeyUp={keyUpHandler}
            />
            <span className={styles["label"]} onClick={() => input.current && input.current.focus()}>
                {label}
            </span>
        </div>
    );
};
export default MaterialInput;
