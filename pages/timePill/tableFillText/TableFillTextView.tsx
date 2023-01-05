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
    SubmitLoading: any;
    handleSubmit: FormEventHandler;
    PillPreview:any;
    cancelPreview:any;
}

export default function TableFillTextView(props: TableFillTextViewProps) {
    // export default function tableFillView() {
    const { SubmitLoading, handleSubmit, PillPreview, cancelPreview } = props;
    const router = useRouter();
    return (
        <>
            <div className='absolute top-0 flex justify-center w-full mb:w-2/3'>
                <div className='flex flex-col bg-white w-full md:w-2/3'>

                    <div className='relative h-24 w-full md:h-36 bg-gradient-to-r from-lime-500 via-lime-400 to-lime-200 '>

                        <div className='absolute bottom-4 left-4 mb-6 '>

                            <h1 className="flex items-center text-lime-900 text-3xl md:text-5xl font-extrabold dark:text-white">时光胶囊
                            <span className="bg-white text-lime-800 text-xs md:text-xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-lime-200 dark:text-lime-800 ml-2">
                                Time Capsule</span></h1>

                        </div>

                        <div className='absolute bottom-4 right-4 block '>
                            <h5 className="font-semibold text-base text-lime-900 md:text-xl dark:text-white ">by []</h5>
                        </div>
                    </div>

                    <form className='p-4 pt-8' onSubmit={handleSubmit}>
                        <div className='mb-6 '>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-lime-900 dark:text-gray-300"
                            >Your name*
                                <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                                    placeholder="John" required />
                            </label>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-lime-900 dark:text-gray-300"
                            >Email*
                                <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                                    placeholder="test@gmail.com" required />
                            </label>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-lime-900 dark:text-gray-300"
                            >Open Time*
                                <input type="date" name="date" className="bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                                    required />
                            </label>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="content" className="block mb-2 text-sm font-medium text-lime-900 dark:text-gray-300"
                            >Pill Content*
                                <textarea name="content" id="content" rows={4} className="block p-2.5 w-full text-sm text-lime-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500" 
                                placeholder="Your message..."
                                ></textarea>
                            </label>
                        </div>


                        <div className='mb-6'>
                            <label htmlFor="tip" className="block mb-2 text-sm font-medium text-lime-900 dark:text-gray-300"
                            >Tip before date
                                <input type="text" name="tip" className="bg-gray-50 border border-gray-300 text-lime-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
                                    placeholder="Message to u" />
                            </label>
                        </div>

                        {/* 加载logo：没有效果 */}
                        {SubmitLoading ? (
                            <div className="">提交中...</div>
                        ) : <div></div>}


                        {/* 展示贺卡合成效果 */}

                        {PillPreview ? (
                            <div className="absolute left-1/2 top-1/2 p-6 -translate-x-1/2 -translate-y-1/2 shadow-xl bg-cyan-100
                                            flex flex-col items-center">
                                <div className='mb-6'>您的时光胶囊预览</div>

                                {/* <canvas ref={canvasRef} className='bg-pillCard bg-cover h-full md:h-96 '> */}
                                {/* <canvas ref={canvasRef} className='h-full md:h-96 '>
                                    Your browser does not support the canvas element.
                                </canvas> */}
                                <div id='is' className=''></div>

                                {/* 格式转换成行内元素 */}
                                {/* <div className='inline'>
                                    <img className="w-full rounded-t-lg 
                                                md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg"
                                        src="../rella0.jpg" alt="pillPreview_illustrate" />
                                </div> */}

                                <div className='flex mt-6 w-2/3 justify-between'>
                                    <button type="button"
                                        onClick={cancelPreview}
                                        className="text-lime-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">返回</button>

                                    <button type="submit"
                                        className="text-lime-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">确认提交</button>

                                </div>
                            </div>
                        ) : <div></div>}

                        <div className='flex justify-around mb-6 md:mb-48'>
                            <button type="button"
                                onClick={() => router.push('../timePill')}
                                className="text-lime-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">返回</button>

                            <button type="submit"
                                className="text-lime-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">胶囊预览</button>

                        </div>
                    </form>

                </div>

            </div>

        </>
    );
}
