import React, { InputHTMLAttributes } from "react";
import { useField, FieldHookConfig } from "formik";

// type TextInputProps = {} & FieldHookConfig<string>;
type TextInputProps = {
    containerClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<TextInputProps> = ({ containerClassName = "", ...props }) => {
    // console.log(props);
    // const [field, meta, helpers] = useField(props);

    return (
        <>
            <label className={`w-4/5 md:w-2/5 flex items-center justify-between ${containerClassName}`}>
                {props.name}
                <div className='w-4/5'>
                    <input {...props} className={`${props.className} w-full`} />
                </div>
            </label>
        </>
    );
};
export default TextInput;
