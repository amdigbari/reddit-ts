import React, { ChangeEvent } from "react";
import TextInput from "molecules/TextInput";
import CustomForm from "../../organisms/CustomForm";

type signUpType = {};
const SignUp: React.FC<signUpType> = React.memo(() => {
    // let [username, setUsername] = React.useState("");

    // const changeUsername: (props: ChangeEvent<HTMLInputElement>) => void = ({ target: { value } }) => {
    //     setUsername(value);
    // };

    return (
        <div className='w-screen h-screen flex justify-center'>
            {/* <form className='container h-screen flex justify-center items-center'> */}
                <CustomForm />
            {/* </form> */}
        </div>
    );
});
export default SignUp;
