// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import React from 'react';
import { useRouter } from 'next/router';

interface StaffLoginViewProps {
    success: any;
    register: any,
    setRegister: any,
    handleSignIn: FormEventHandler;
}
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

export default function StaffLoginView(props: StaffLoginViewProps) {
    const { success, register, setRegister, handleSignIn } = props;
    const router = useRouter();

    return (
        <>
            <div className='flex justify-center w-screen py-12 md:py-20'>
                <div className='flex flex-col items-center w-5/6 md:w-fit md:ml-16 md:px-12 py-6 text-pink-900'>
                    <div className=''>
                        <a onClick={() => { router.push('../timePill') }}>
                            <h3 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-pink-900 md:text-4xl lg:text-5xl dark:text-white">
                                {register ? 'Staff Register' : 'Staff Login'}</h3>
                        </a>
                    </div>


                    <div className={classNames('flex flex-col items-center w-full p-12 rounded-xl transition-all ease-in-out duration-500',
                        register ?
                            'bg-red-200 timePillIntroShadowOff'
                            :
                            'bg-red-100 timePillIntroShadowOn'
                    )}>
                        {register ? //註冊界面
                            <form className='' onSubmit={handleSignIn}>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >郵箱 Email*
                                        <input type="text" name="email" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="test@gmail.com" required />
                                    </label>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="name" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >姓名 Name*
                                        <input type="text" name="name" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="John" required />
                                    </label>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="password" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >密碼 Password*
                                        <input type="password" name="password" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="Password" required />
                                    </label>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="code" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >代號 Code*
                                        <input type="text" name="code" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="Code" required />
                                    </label>
                                </div>


                                {success === '' ? (
                                    <div className="flex flex-row gap-1 invisible">
                                        <div>登入成功！</div>
                                    </div>
                                ) : (success === true ? (
                                    <div className="flex flex-row gap-1 justify-center text-green-700">
                                        註冊成功，請返回登入
                                    </div>
                                ) : (success == 'email taken' ? (
                                    <div className="flex flex-row gap-1 justify-center text-red-700 ">
                                        郵箱已註冊
                                    </div>
                                ) : (
                                    <div className="flex flex-row gap-1 justify-center text-red-700 ">
                                        密碼少於6位數
                                    </div>
                                )

                                ))}

                                <div className='flex flex-row-reverse w-full justify-between'>
                                    <button type="submit" autoFocus
                                        className="staffInterfaceBtn mb-0 after:bg-red-100">註冊</button>
                                    <button
                                        onClick={() => setRegister(false)}
                                        className="staffInterfaceBtn mb-0 after:bg-red-100">返回</button>
                                </div>

                            </form>

                            :


                            // 登入界面
                            <form className='' onSubmit={handleSignIn}>
                                <div className='mb-4'>
                                    <label htmlFor="email" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >郵箱 Email*
                                        <input type="text" name="email" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="test@gmail.com" required />
                                    </label>
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor="password" className="block text-sm font-medium text-pink-900 dark:text-pink-300"
                                    >密碼 Password*
                                        <input type="password" name="password" className="mt-1 bg-pink-50 border border-pink-300 text-pink-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-pink-700 dark:border-pink-600 dark:placeholder-pink-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
                                            placeholder="Password" required />
                                    </label>
                                </div>


                                {success === '' ? (
                                    <div className="flex flex-row gap-1 invisible">
                                        <div>登入成功！</div>
                                    </div>
                                ) : (success === true ? (
                                    <div className="flex flex-row gap-1 justify-center text-green-700">
                                        登入成功
                                    </div>
                                ) : (
                                    <div className="flex flex-row gap-1 justify-center text-red-700 ">
                                        帳戶或密碼錯誤
                                    </div>
                                ))}

                                <div className='flex flex-row-reverse w-full justify-between'>
                                    <button type="submit" autoFocus
                                        className="staffInterfaceBtn mb-0 after:bg-red-200">登入</button>
                                    <button
                                        onClick={() => setRegister(true)}
                                        className="staffInterfaceBtn mb-0 after:bg-red-200">註冊</button>
                                </div>
                            </form>
                        }

                    </div>
                </div>
            </div>

        </>
    );
}
