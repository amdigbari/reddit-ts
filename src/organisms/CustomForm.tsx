import React from "react";
import { useFormik, Form, FormikErrors, Field, ErrorMessage, Formik, FormikProps } from "formik";
import TextInput from "molecules/TextInput";
import { promises } from "fs";

type formProps = {
    username: string;
    password: string;
};

type customFormProps = {};

const initialProps: formProps = {
    username: "",
    password: "",
};

const CustomForm: React.FC<customFormProps> = () => {
    // const formik = useFormik({
    //     initialValues: initialProps,
    //     onSubmit: console.log,
    //     validate: values => {
    //         const errors: FormikErrors<typeof values> = {};
    //         if (!values.username) {
    //             errors.username = "This filled is required";
    //         } else if (!values.password) {
    //             errors.password = "Password is required";
    //         }
    //         return errors;
    //     },
    //     initialTouched: {
    //         username: false,
    //         password: false,
    //     },
    // });

    //error={formik.touched.username ? formik.errors.username : ""}

    const CustomField: React.FC<{ name: string; type: string; autoFocus?: boolean }> = ({
        name,
        type,
        autoFocus = false,
    }) => (
        <div className='w-4/5 md:w-2/5'>
            <Field
                type={type}
                name={name}
                className='mt-8 w-full h-10 pl-5 rounded-full bg-gray-200 border-2 border-gray-300 outline-none text-blue-700 placeholder-blue-300'
                placeholder={name}
                autoFocus={autoFocus}
            />
            <ErrorMessage name='username' component='span' className='pl-4 text-sm text-red-500 w-full text-left' />
        </div>
    );

    const renderForm: (props: FormikProps<formProps>) => React.ReactNode = ({ isSubmitting }) => (
        <Form className='container h-screen flex justify-center items-center flex-col'>
            <CustomField name='username' type='text' autoFocus />
            <CustomField name='password' type='password' />

            <button
                type='submit'
                disabled={isSubmitting}
                className='mt-8 text-center w-3/5 md:w-1/5 focus:outline-none bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white focus:bg-blue-500 text-blue-700 focus:text-white py-2 px-4 border border-blue-500 hover:border-transparent focus:border-transparent rounded-full transition duration-200 ease-in-out'>
                Submit
            </button>
        </Form>
    );

    return (
        <Formik
            initialValues={initialProps}
            onSubmit={console.log}
            validate={values => {
                const errors: FormikErrors<typeof values> = {};
                if (!values.username) {
                    errors.username = "This filled is required";
                } else if (!values.password) {
                    errors.password = "Password is required";
                }
                return errors;
            }}
            render={renderForm}></Formik>
        // <form onSubmit={formik.handleSubmit} className='container h-screen flex justify-center items-center flex-col'>
        //     <TextInput
        //         containerClassName='mt-8'
        //         className='h-10 pl-5 rounded-full bg-gray-200 border-2 border-gray-300 outline-none text-blue-700 placeholder-blue-300'
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.username}
        //         name='username'
        //         type='text'
        //         required
        //         autoFocus
        //     />
        //     <TextInput
        //         containerClassName='mt-8'
        //         className='h-10 pl-5 rounded-full bg-gray-200 border-2 border-gray-300 outline-none text-blue-700 placeholder-blue-300'
        //         onChange={formik.handleChange}
        //         onBlur={formik.handleBlur}
        //         value={formik.values.password}
        //         name='password'
        //         type='password'
        //         required
        //     />
        //     <button
        //         className='mt-8 text-center w-3/5 md:w-1/5 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full transition duration-200 ease-in-out'
        //         type='submit'>
        //         Submit
        //     </button>
        // </form>
    );
};
export default CustomForm;
