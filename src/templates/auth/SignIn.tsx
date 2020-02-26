import React from "react";
import { FormikConfig, FormikErrors } from "formik";

import CustomForm from "organisms/CustomForm";
import { customFormProps } from "organisms/CustomForm";
import { connect, MapStateToProps } from "react-redux";
import { RootStateType } from "../../app/rootReducer";
import { login } from "./authSlice";
import Axios from "api/Axios";
import { socialsApi } from "api/baseApi";
import { Link } from "react-router-dom";

export type signInFormProps = {
    username: string;
    password: string;
};

const initialProps: signInFormProps = {
    username: "",
    password: "",
};

type signInType = {};
const signIn: React.FC<signInType | any> = React.memo(({ loginUser, signIn }) => {
    const onSubmit: customFormProps<signInFormProps>["onSubmit"] = (values, { setSubmitting }) => {
        setSubmitting(true);

        signIn(values).finally(() => setSubmitting(false));
    };

    React.useEffect(() => {
        console.log(loginUser);
    }, [loginUser]);

    const validate: FormikConfig<signInFormProps>["validate"] = values => {
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
            <CustomForm<signInFormProps>
                onSubmit={onSubmit}
                types={formFieldTypes}
                validate={validate}
                initialProps={initialProps}
            />

            <Link to='/'>home path</Link>
        </div>
    );
});

const mapStateToProps: MapStateToProps<any, signInType, RootStateType> = state => {
    return { loginUser: state.loginUser };
};
const mapDispatchToProps = {
    signIn: login,
};
export default connect(mapStateToProps, mapDispatchToProps)(signIn);
