import React, { ChangeEvent } from "react";
import { FormikConfig, FormikErrors } from "formik";

import TextInput from "molecules/TextInput";
import CustomForm from "organisms/CustomForm";
import { customFormProps } from "organisms/CustomForm";
import Axios from "api/Axios";
import { registerApi } from "../../api/authApi";
import { getJWTToken } from "./authActions";

type formProps = {
    username: string;
    password: string;
};

const initialProps: formProps = {
    username: "",
    password: "",
};

type signUpType = {};
const SignUp: React.FC<signUpType> = React.memo(() => {
    const onSubmit: customFormProps<formProps>["onSubmit"] = (values, { setSubmitting }) => {
        setSubmitting(true);

        Axios.post(registerApi, values)
            .then(() => {
                getJWTToken(values).then(res => {
                    console.log("access", res.data.access);
                    console.log("refresh", res.data.refresh);
                });
            })
            .finally(() => setSubmitting(false));
    };

    const validate: FormikConfig<formProps>["validate"] = values => {
        const errors: FormikErrors<typeof values> = {};
        if (!values.username) {
            errors.username = "This filled is required";
        } else if (!values.password) {
            errors.password = "Password is required";
        }

        return errors;
    };

    const formFieldTypes = { password: "password" };

    return (
        <div className='w-screen h-screen flex justify-center'>
            <CustomForm<formProps>
                onSubmit={onSubmit}
                types={formFieldTypes}
                validate={validate}
                initialProps={initialProps}
            />
        </div>
    );
});
export default SignUp;

// {
// let [username, setUsername] = React.useState("");

// const changeUsername: (props: ChangeEvent<HTMLInputElement>) => void = ({ target: { value } }) => {
//     setUsername(value);
// };

// {/* <form className='container h-screen flex justify-center items-center'> */}
// {/* </form> */}
// }
