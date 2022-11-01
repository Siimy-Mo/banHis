// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


interface SubmitTipViewProps {
    // signInData: any;
    // signInLoading: any;
    // signInError: any;
    handleSignIn: FormEventHandler;
}

export default function SubmitTipView(props: SubmitTipViewProps) {
    // export default function LoginView() {
    const { handleSignIn } = props;
    const [msg, setMessage] = useState('')
    const router = useRouter();


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <>

            <div className='flex justify-center items-center h-screen'>
                <div className='h-1/3 w-2/3 max-w-6xl'>

                    <div className='flex justify-center'>
                        <h3 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                            提交成功</h3>
                    </div>
                    <div className='p-4 pt-8 flex flex-col justify-center center bg-lime-500'>

                        {/* 这里不应该写flex justify-center,父级div的子轴上的剧中无才用的 */}
                        <div className='flex justify-center'>[提示内容]</div>

                        <div className='flex justify-center'>

                            <button type="button"
                                onClick={() => router.push('../timePill')}
                                className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Confirm</button>

                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
