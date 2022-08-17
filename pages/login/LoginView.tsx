// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState, useContext } from 'react';

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
        <div>
            {/* 右侧底纹 */}
            <div className="flex h-screen w-screen bg-rose-50 text-indigo-900">
                {/* 界面 */}
                <div className="w-1/10"></div>
                <div className="
                min-h-50vh overflow-hidden shadow-2xl 
                m-auto px-20 py-10 rounded-lg bg-red-400">

                    <h1 className='pt-5 pl-5 mb-5 font-["Cambria"] font-black text-3xl '>Login</h1>

                    <div className="flex gap-4 " >
                        <form onSubmit={handleSignIn}>
                            <label>
                                <input
                                    placeholder="Username"
                                    name="username"
                                    className="inputText w-40"
                                    autoFocus
                                    type='text' />
                                <input
                                    placeholder="Password"
                                    name="password"
                                    className="inputText w-40"
                                    autoFocus
                                    type='text' />
                            </label>
            

                    <div className="relative mt-4 border-white w-full h-10">
                        <div className='absolute right-0 border-white '>

                        <a className='todoItem_focus inline mr-4'>Forget</a>
                        <button type="submit" className="btn">Sumbit</button>
                        </div>
                    </div>
                        </form>
                    </div>

                </div>
                <div className="w-1/6"></div>

            </div>


        </div>
    );
}
