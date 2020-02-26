import React from "react";
import { FormikConfig, FormikErrors } from "formik";

import CustomForm from "organisms/CustomForm";
import { customFormProps } from "organisms/CustomForm";
import { updateProfile } from "./profileActions";
import { useHistory } from "react-router-dom";

export const emailValidator = /^(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
export const phoneValidator = /^(\+989|09)\d{9}$/;

export type updateProfileFormProps = {
    firstName: string;
    lastName: string;
    email: string;

    bio?: string;
    phone?: string;
    city?: string;
    image?: Blob;
};

const initialProps: updateProfileFormProps = {
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    phone: "",
    city: "",
    image: undefined,
};

type updateProfileType = {
    user: { username: string; password: string };
};
const UpdateProfile: React.FC<updateProfileType> = React.memo(({ user }) => {
    let history = useHistory();

    const onSubmit: customFormProps<updateProfileFormProps>["onSubmit"] = (values, { setSubmitting }) => {
        setSubmitting(true);

        const formData = new FormData();

        formData.append("first_name", values.firstName);
        formData.append("last_name", values.lastName);
        formData.append("email", values.email);
        values.bio && formData.append("bio", values.bio);
        values.phone && formData.append("phone", values.phone);
        values.city && formData.append("city", values.city);
        values.image && formData.append("picture", values.image);

        updateProfile(formData)
            .then(res => {
                console.log(res.data);

                history.push("/");
            })
            .finally(() => setSubmitting(false));
    };

    const validate: FormikConfig<updateProfileFormProps>["validate"] = values => {
        const errors: FormikErrors<typeof values> = {};
        if (!values.firstName) {
            errors.firstName = "First name is required";
        } else if (!values.lastName) {
            errors.lastName = "Last name is required";
        } else if (!values.email) {
            errors.email = "Email is required";
        } else if (!values.email.match(emailValidator)) {
            errors.email = "Invalid email";
        } else if (values.phone && !values.phone?.match(phoneValidator)) {
            errors.phone = "Invalid phone number";
        }
        return errors;
    };

    const formFieldTypes = { phone: "tel", email: "email", image: "file" };

    return (
        <div className='w-screen h-screen flex justify-center'>
            <CustomForm<updateProfileFormProps>
                onSubmit={onSubmit}
                types={formFieldTypes}
                validate={validate}
                initialProps={initialProps}
            />
        </div>
    );
});
export default UpdateProfile;
