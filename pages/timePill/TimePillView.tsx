// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const modeStatus = [
    { intro: '手写扫描模式', cssInfo: 'timePillIntroShadowOn', content: ['手寫創造時光膠囊', '掃描並填寫時光膠囊資料',] },
    {
        intro: '电子填表模式', cssInfo: 'timePillIntroShadowOff bg-red-100', content: ['打開秘密連結創造時光膠囊', '填寫時光膠囊詳細資料']
    },
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

interface TimePillViewProps {
    mode: any;
    handMode: any;
    scanMode: any;
    goTableFill: any;
}

export default function TimePillView(props: TimePillViewProps) {
    // export default function TimePillView() {
    const { mode, handMode, scanMode, goTableFill } = props;
    const router = useRouter();


    return (
        <>

            <div className='flex justify-center h-screen w-screen'>

                <div className='flex flex-col items-center mx-0 my-auto'>

                    <div className={classNames(mode ?
                        modeStatus[0].cssInfo : modeStatus[1].cssInfo
                        , 'block relative w-96 h-96 ml-12 m-6 mt-12 px-12 py-6 text-center rounded-xl overflow-hidden',
                        'transition-all ease-in-out duration-500 ')}>
                        <h1 className='mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white'>
                            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                                {mode ? modeStatus[0].intro : modeStatus[1].intro}</span>
                        </h1>

                        <div className='flex flex-col py-4'>
                            <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                {mode ? modeStatus[0].content[0] : modeStatus[1].content[0]}</p>
                            <p className="mb-4 text-lg font-normal text-red-600 lg:text-xl dark:text-gray-400">
                                {mode ? modeStatus[0].content[1] : modeStatus[1].content[1]}</p>
                            <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                發送時光膠囊到未來</p>
                            <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                                將來的你/他/她收到來自今天的時光膠囊</p>
                        </div>

                    </div>

                    <div className='flex justify-around w-full px-16 my-6'>
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
                                // onClick={() => {mode ? router.push('./timePill/tableFill') : router.push('./timePill/tableFill')}}
                                onClick={goTableFill}
                                className="inline text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sumbit</button>
                        </div>

                    </div>


                </div>

            </div>
        </>
    );
}