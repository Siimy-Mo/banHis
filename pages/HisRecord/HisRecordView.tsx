// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import logo from '../../public/rella0.jpg';

interface LoginViewProps {
    handleSignIn: FormEventHandler;
}

export default function LoginView(props: LoginViewProps) {
    // export default function LoginView() {
    const { handleSignIn } = props;
    const [msg, setMessage] = useState('')


    return (
        <>

            <div className='flex justify-center items-center h-screen bg-lime-300'>
                History Recording interface
            </div>

        </>
    );
}
