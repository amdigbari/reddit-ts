import React, { ChangeEvent } from "react";
import TextInput from "atoms/TextInput";

type signUpType = {};
const SignUp: React.FC<signUpType> = React.memo(() => {
    let [username, setUsername] = React.useState("");

    const changeUsername: (props: ChangeEvent<HTMLInputElement>) => void = ({ target: { value } }) => {
        setUsername(value);
    };

    return (
        <div className='w-screen h-screen flex justify-center'>
            <form className='container h-screen flex justify-center items-center'>
                <TextInput
                    className='w-4/5 md:w-2/5 h-10 pl-5 rounded-full bg-gray-200 border-2 border-gray-300 outline-none text-blue-700 placeholder-blue-300'
                    value={username}
                    onChange={changeUsername}
                    autoFocus
                    placeholder='username'
                    type='text'
                />
            </form>
        </div>
    );
});
export default SignUp;
