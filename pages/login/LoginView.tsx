// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import logo from '../../public/rella0.jpg';

interface LoginViewProps {
    // signInData: any;
    // signInLoading: any;
    // signInError: any;
    handleSignIn: FormEventHandler;
}

export default function LoginView(props: LoginViewProps) {
    // export default function LoginView() {
    const { handleSignIn } = props;
    const [msg, setMessage] = useState('')


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <>

            <div className='flex justify-center items-center h-screen'>

                <div className="flex flex-col items-center justify-between overflow-hidden bg-white rounded-lg border shadow-md 
                                md:flex-row md:max-w-3xl
                                dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full h-96 rounded-t-lg 
                            md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
                        src="rella0.jpg" alt="login_illustrate" />



                    <div className="flex flex-col justify-between p-4 leading-normal px-12">


                        <div className="mx-6 shadow-
                                bg-gradient-to-r from-cyan-200 to-blue-200
                                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800
                                font-medium rounded-lg text-md px-4 py-6 text-center">

                            {/* <h1 className='pt-2 pl-5 mb-5 font-["Cambria"] font-black text-3xl '>Login</h1> */}

                            <div className="flex gap-4 " >
                                <form onSubmit={handleSignIn}>
                                    <label>
                                        <input
                                            placeholder="Username"
                                            name="username"
                                            className="inputText mx-auto"
                                            autoFocus
                                            type='text' />
                                        <input
                                            placeholder="Password"
                                            name="password"
                                            className="inputText mx-auto"
                                            autoFocus
                                            type='password' />
                                    </label>


                                    <div className="relative mt-4 border-white w-full h-10">
                                        <button type="submit" className="focus:outline-none text-white bg-cyan-500 w-full
                                                hover:bg-blue-600
                                                font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
                                                dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-blue-600">
                                            SIGN IN</button>
                                        {/* <button type="submit" className="btn">SIGN IN</button> */}

                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className='flex flex-col items-center mt-8 text-cyan-600'>

                            {/* <a className='todoItem_focus inline mr-4'>Forget</a> */}
                            <div>Don't have an account yet ?</div>
                            <a className='text-blue-900'>Create an account</a>
                        </div>

                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center h-screen w-screen bg-rose-50 text-indigo-900">
                <div className=''>


                </div>
            </div>
        </>
    );
}
