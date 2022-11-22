// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface StaffLoginViewProps {
    handleSignIn: FormEventHandler;
}
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}


export default function StaffLoginView(props: StaffLoginViewProps) {
    // export default function LoginView() {
    const { handleSignIn, } = props;
    const [register, setRegister] = useState(false)
    const router = useRouter();

    return (
        <>

            <div className='flex justify-center w-screen pt-12'>

                {/* 根据登入状态展示两个组件：1登入界面（动态消失且往上移动）2、选择界面
                    或者只将text input 转为两个按钮，不用组件更迭*/}
                <div className='flex flex-col items-center ml-16 px-12 py-6 text-pink-900'>
                {/* , 'block relative w-96 ml-16 m-4 px-12 py-6 text-center rounded-xl overflow-hidden',
                        'transition-all ease-in-out duration-500 ')}> */}
                    <div className=''>
                        <a onClick={() => { router.push('../timePill') }}>

                            <h3 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-pink-900 md:text-4xl lg:text-5xl dark:text-white">
                                {register ? 'Staff Register' : 'Staff Login'}</h3>
                        </a>
                    </div>


                    <div className={classNames('flex flex-col items-center w-full px-12 py-6 rounded-xl transition-all ease-in-out duration-500',
                        register ?
                            'bg-red-200 timePillIntroShadowOff'
                            :
                            'bg-red-100 timePillIntroShadowOn'
                    )}>
                        {register ? //register form 

                            <form className='' onSubmit={handleSignIn}>
                                {/* 这里不应该写,父级div的子轴上的剧中无才用的 */}
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >郵箱*
                                        <input type="text" name="email" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="test@gmail.com" required />
                                    </label>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="name" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >姓名*
                                        <input type="text" name="name" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="John" required />
                                    </label>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="password" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >密码*
                                        <input type="password" name="password" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="Password" required />
                                    </label>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="code" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >代號*
                                        <input type="text" name="code" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="Code" required />
                                    </label>
                                </div>
                                {/* 加载logo：没有效果 */}
                                {/* {SubmitLoading ? (
                                <div className="">提交中...</div>
                            ) : <div></div>} */}

                                <div className='flex flex-row-reverse w-full justify-between'>
                                    <button type="submit" autoFocus
                                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">註冊</button>
                                    <button
                                        onClick={() => setRegister(false)}
                                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">返回</button>
                                </div>

                            </form>

                            :
                            <form className='' onSubmit={handleSignIn}>
                                {/* 这里不应该写,父级div的子轴上的剧中无才用的 */}
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >郵箱*
                                        <input type="text" name="email" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block p-2.5 dark:bg-pi w-fullnk-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="test@gmail.com" required />
                                    </label>
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor="password" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >密码*
                                        <input type="password" name="password" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="Password" required />
                                    </label>
                                </div>

                                {/* 加载logo：没有效果 */}
                                {/* {SubmitLoading ? (
                        <div className="">提交中...</div>
                    ) : <div></div>} */}

                                <div className='flex flex-row-reverse w-full justify-between'>
                                    <button type="submit" autoFocus
                                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">登入</button>
                                    <button
                                        onClick={() => setRegister(true)}
                                        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">註冊</button>

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
