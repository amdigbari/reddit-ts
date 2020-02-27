import React, { ChangeEvent } from "react";
import { FormikConfig, FormikErrors } from "formik";

import TextInput from "molecules/TextInput";
import CustomForm from "organisms/CustomForm";
import { customFormProps } from "organisms/CustomForm";
import Axios from "api/Axios";
import { registerApi } from "../../api/authApi";
import { connect, MapStateToProps } from "react-redux";
import { RootStateType } from "../../app/rootReducer";
import { signUp } from "./authSlice";
import UpdateProfile from "templates/updateProfile/UpdateProfile";

export type signUpFormProps = {
    username: string;
    password: string;
};

const initialProps: signUpFormProps = {
    username: "",
    password: "",
};

type signUpType = {};
const SignUp: React.FC<signUpType | any> = React.memo(({ signUp }) => {
    let [showEditProfile, setShowEditProfile] = React.useState(false);

    let [user, setUser] = React.useState(initialProps);

    const onSubmit: customFormProps<signUpFormProps>["onSubmit"] = (values, { setSubmitting }) => {
        setSubmitting(true);

        signUp(values)
            .then(() => {
                setUser(values);

                setShowEditProfile(true);
            })
            .finally(() => setSubmitting(false));
    };

    const validate: FormikConfig<signUpFormProps>["validate"] = values => {
        const errors: FormikErrors<typeof values> = {};
        if (!values.username) {
            errors.username = "This filled is required";
        } else if (!values.password) {
            errors.password = "Password is required";
        }

        return errors;
    };

    const formFieldTypes = { password: "password" };

    return showEditProfile ? (
        <UpdateProfile />
    ) : (
        <div className='w-screen h-screen flex justify-center'>
            <CustomForm<signUpFormProps>
                onSubmit={onSubmit}
                types={formFieldTypes}
                validate={validate}
                initialProps={initialProps}
            />
        </div>
    );
});

// const mapStateToProps: MapStateToProps<any, signUpType, RootStateType> = state => {
//     return { loginUser: state.loginUser };
// };
const mapDispatchToProps = {
    signUp,
};
export default connect(undefined, mapDispatchToProps)(SignUp);

// {
// let [username, setUsername] = React.useState("");

// const changeUsername: (props: ChangeEvent<HTMLInputElement>) => void = ({ target: { value } }) => {
//     setUsername(value);
// };

// {/* <form className='container h-screen flex justify-center items-center'> */}
// {/* </form> */}
// }
