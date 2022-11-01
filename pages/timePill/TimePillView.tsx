// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const modeStatus = [
    { intro: '手写模式介绍文案', cssInfo: 'bg-cyan-200' },
    { intro: '扫描模式介绍文案', cssInfo: 'bg-red-200' },
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
        // 判定当前是否是手写模式
        if (mode === true) return
        setMode(true)
        console.log('Switch Mode to Hand mode')
    };
    const scanMode = () => {
        // 判定当前是否是扫描模式
        if (mode === false) return
        setMode(false)
        console.log('Switch Mode to Scan mode')
    };

    return (
        <>

            <div className='flex justify-center mb:w-2/3 h-screen'>
                <div className={classNames(mode ?
                    modeStatus[0].cssInfo : modeStatus[1].cssInfo
                    , 'flex flex-col justify-center w-full md:w-2/3')}>
                    {/* className={classNames(todo.completed === true ? 'line-through' : '')} */}

                    <div className='text-center mb-6'>
                        [{mode ? modeStatus[0].intro : modeStatus[1].intro}]
                        {/* 方法选择A/B介绍文案改变,默认是手写模式 */}
                    </div>

                    <div className='flex justify-around px-24  mb-6'>
                        <button type="button"
                            onClick={handMode}
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">手写</button>
                        <button type="button"
                            onClick={scanMode}
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">扫描</button>

                    </div>

                    <div className='flex flex-col text-center'>
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