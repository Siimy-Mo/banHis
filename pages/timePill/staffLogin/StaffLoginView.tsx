// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface StaffLoginViewProps {
    handleSignIn: FormEventHandler;
}

export default function StaffLoginView(props: StaffLoginViewProps) {
    // export default function LoginView() {
    const { handleSignIn, } = props;
    const [register, setRegister] = useState(false)
    const router = useRouter();

    return (
        <>

            <div className='flex justify-center items-center h-screen'>

                {/* 根据登入状态展示两个组件：1登入界面（动态消失且往上移动）2、选择界面
                    或者只将text input 转为两个按钮，不用组件更迭*/}
                <div className='flex flex-col items-center '>

                    <div className=''>
                        <h3 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                            {register ? 'Staff Register' : 'Staff Login'}</h3>
                    </div>

                    <div className='flex flex-col items-center w-full px-12 py-6 pt-12 rounded-xl bg-red-300 timePillIntroShadowOn'>

                        {register ? //register form 

                            <form className='p-4' onSubmit={handleSignIn}>
                                {/* 这里不应该写,父级div的子轴上的剧中无才用的 */}
                                <div className='mb-6'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >郵箱*
                                        <input type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="test@gmail.com" required />
                                    </label>
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >姓名*
                                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="John" required />
                                    </label>
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >密码*
                                        <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Password" required />
                                    </label>
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >代號*
                                        <input type="text" name="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Code" required />
                                    </label>
                                </div>
                                {/* 加载logo：没有效果 */}
                                {/* {SubmitLoading ? (
                                <div className="">提交中...</div>
                            ) : <div></div>} */}

                                <div className='flex w-full justify-between'>
                                    <button
                                        onClick={() => setRegister(false)}
                                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">返回</button>
                                    <button type="submit" autoFocus
                                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">註冊</button>
                                </div>

                            </form>

                            :
                            <form className='p-4' onSubmit={handleSignIn}>
                                {/* 这里不应该写,父级div的子轴上的剧中无才用的 */}
                                <div className='mb-6'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >郵箱*
                                        <input type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="test@gmail.com" required />
                                    </label>
                                </div>

                                <div className='mb-6'>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >密码*
                                        <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Password" required />
                                    </label>
                                </div>

                                {/* 加载logo：没有效果 */}
                                {/* {SubmitLoading ? (
                        <div className="">提交中...</div>
                    ) : <div></div>} */}

                                <div className='flex w-full justify-between'>
                                    <button
                                        onClick={() => setRegister(true)}
                                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">註冊</button>
                                    <button type="submit" autoFocus
                                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">登入</button>

                                </div>
                            </form>
                        }

                    </div>
                </div>
                {/* 确认登入之后显示query和update的选项！ */}

            </div>

        </>
    );
}
