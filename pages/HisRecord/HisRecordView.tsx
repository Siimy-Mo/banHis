// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import hisData from '../../public/banRecord.json';  // data 多了之后要学缓处理。

interface LoginViewProps {
    handleSignIn: FormEventHandler;
}


export default function LoginView(props: LoginViewProps) {
    // export default function LoginView() {
    const { handleSignIn } = props;
    const [msg, setMessage] = useState('')

    // useEffect(() => {
    //     console.log(hisData[0])
    // },[])



    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen bg-lime-300'>
                {hisData.map((item)=>(
                    <div key={item.Name}>{item.Name}</div>
                ))}
            </div>

        </>
    );
}
