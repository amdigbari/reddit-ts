import React, { ChangeEvent } from "react";

type TextInputProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & React.HTMLProps<HTMLInputElement>;

const TextInput: React.FC<TextInputProps> = ({ value, onChange, type = "text", ...restProps }) => {
    return <input value={value} onChange={onChange} {...restProps} />;
};
export default TextInput;
