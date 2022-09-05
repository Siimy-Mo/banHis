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
                                md:flex-row md:max-w-4xl md:w-4/5
                                dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg 
                            md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
                        src="rella0.jpg" alt="login_illustrate" />



                    <div className="flex flex-col justify-between p-4 leading-normal px-12">

                        {/* 
                        <div className="mx-6 shadow-xl
                                bg-gradient-to-r from-themeSecondary to-themeOther2
                                hover:bg-gradient-to-bl font-medium rounded-lg text-md px-4 py-6"> */}
                        <div className="mx-6 shadow-xl min-w-min
                                bg-themeOther1 font-medium rounded-lg text-md px-12 pb-4 pt-12">
                            {/* <h1 className='pt-2 pl-5 mb-5 font-["Cambria"] font-black text-3xl '>Login</h1> */}

                            <div className="flex gap-4 " >
                                <form onSubmit={handleSignIn}>

                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-themeforeground bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-themeforeground dark:border-gray-600 dark:focus:border-themeforeground focus:outline-none focus:ring-0 focus:border-themeforeground peer" placeholder=" " required />
                                        <label htmlFor="floating_email"
                                            className="peer-focus:font-medium absolute text-sm text-themeforeground
                                                dark:text-themeforeground duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                                peer-focus:left-0 peer-focus:text-themeforeground peer-focus:dark:text-themeforeground peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Email address</label>
                                    </div>

                                    <div className="relative z-0 mb-6 w-full group">
                                        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-themeforeground bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-themeforeground dark:border-gray-600 dark:focus:border-themeforeground focus:outline-none focus:ring-0 focus:border-themeforeground peer" placeholder=" " required />
                                        <label htmlFor="floating_password" 
                                                className="peer-focus:font-medium absolute text-sm text-themeforeground
                                                dark:text-themeforeground duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                                peer-focus:left-0 peer-focus:text-themeforeground peer-focus:dark:text-themeforeground peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >Password</label>
                                    </div>

                                    <div className="relative mt-8 border-white w-full h-10">
                                        <button type="submit" className="focus:outline-none text-themeforeground w-full 
                                                transition ease-in-out bg-themeSecondary duration-300
                                                hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-themeOther2 hover:via-themeOther2 hover:to-themeSecondary
                                                font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 
                                                dark:bg-themeSecondary dark:hover:bg-cyan-600">
                                            SIGN IN</button>
                                        {/* <button type="submit" className="btn">SIGN IN</button> */}

                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className='flex flex-col items-center mt-8 text-themeAnother'>

                            {/* <a className='todoItem_focus inline mr-4'>Forget</a> */}
                            <div>Don't have an account yet ?</div>
                            <a className='text-themeOther1'>Create an account</a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}
