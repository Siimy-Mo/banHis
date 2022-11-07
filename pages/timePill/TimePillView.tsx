// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const modeStatus = [
    { intro: '手写扫描模式', cssInfo: 'timePillIntroShadowOn' },
    { intro: '电子填表模式', cssInfo: 'timePillIntroShadowOff bg-red-100' },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

interface TimePillViewProps {
    handleSignIn: any;
}

export default function TimePillView(props: TimePillViewProps) {
    // export default function TimePillView() {
    const { handleSignIn } = props;
    const router = useRouter();
    const [msg, setMessage] = useState('')
    const [mode, setMode] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const handMode = () => {
        // 判定当前是否是手写扫描模式
        if (mode === true) return
        setMode(true)
        console.log('Switch Mode to Hand mode')
    };
    const scanMode = () => {
        // 判定当前是否是电子填表模式
        if (mode === false) return
        setMode(false)
        console.log('Switch Mode to Scan mode')
    };

    return (
        <>

            <div className='flex justify-center mb:w-2/3 h-screen'>

                <div className='flex flex-col items-center w-full md:w-2/3'>

                    <div className={classNames(mode ?
                        modeStatus[0].cssInfo : modeStatus[1].cssInfo
                        , 'block relative w-96 h-96 mx-0 my-auto p-6 text-center rounded-xl overflow-hidden transition-all ')}>
                        <h1 className='mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white'>
                            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                            [{mode ? modeStatus[0].intro : modeStatus[1].intro}]</span>
                        </h1>

                        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                            具体步骤文案</p>
                    </div>

                    <div className='flex justify-around w-full px-16 mb-6'>
                        <button type="button"
                            onClick={handMode}
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">手写扫描</button>
                        <button type="button"
                            onClick={scanMode}
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">电子填表</button>

                    </div>

                    <div className='flex flex-col text-center mb-16'>
                        确认按钮,跳转至TableFill
                        <div>
                            <button type="button"
                                onClick={() => router.push('./timePill/tableFill')}
                                className="inline text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sumbit</button>
                        </div>

                    </div>


                </div>

            </div>
        </>
    );
}