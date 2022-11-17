// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// 在这一页需要检测登入状态（有存续时间，但是只有一天？）+手写扫描状态
//  未登入-> route login界面
// 登入-> 检查电子手写模式：
// -> 电子填表
// -> route 摄像机，扫描后跳转至电子填表

interface TableFillTextViewProps {
    tableMode: any;
    SubmitLoading:any;
    handleSubmit: any;
}

export default function TableFillTextView(props: TableFillTextViewProps) {
    // export default function tableFillView() {
    const { tableMode, SubmitLoading, handleSubmit } = props;
    const router = useRouter();

    return (
        <>

            <div className='flex flex-row justify-center mb:w-2/3 h-screen'>
                <div className='flex flex-col w-full bg-white md:w-2/3'>

                    <div className='relative h-1/2 w-full bg-gradient-to-r from-lime-500 via-lime-400 to-lime-200 '>

                        <div className='absolute bottom-4 left-4 mb-6 '>
                            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                [activity Name]</h1>
                        </div>

                        <div className='absolute bottom-4 right-4 block '>
                            <h5 className="text-xl font-semibold dark:text-white">copyright by []</h5>
                        </div>
                    </div>

                    <form className='p-4 pt-8' onSubmit={handleSubmit}>
                        <div className='mb-6 '>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Your name*
                                <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="John" required />
                            </label>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Email*
                                <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="test@gmail.com" required />
                            </label>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Open Time*
                                <input type="date" name="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required />
                            </label>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Pill Content*
                                {tableMode == true ? (
                                    <div>
                                        <input type="file" name="content" accept="image/*" />
                                    </div>)
                                    : (
                                        <div>
                                            <textarea name="content" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                                        </div>)
                                }
                            </label>
                        </div>


                        <div className='mb-6'>
                            <label htmlFor="tip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Tip before date
                                <input type="text" name="tip" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Message to u" />
                            </label>
                        </div>

                        {/* 加载logo：没有效果 */}
                        {SubmitLoading ? (
                            <div className="">提交中...</div>
                        ) : <div></div>}

                        <div className='flex justify-around mb-6 md:mb-48'>
                            <button type="button"
                                onClick={() => router.push('../timePill')}
                                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">返回</button>

                            <button type="button"
                                onClick={() => router.push('./submitTip')}
                                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">跳至成功页面</button>


                            <button type="submit"
                                // onClick={() => router.push('./submitTip')}
                                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">提交</button>

                        </div>
                    </form>

                </div>

            </div>

        </>
    );
}
