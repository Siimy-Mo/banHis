// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


interface TableFillViewProps {
    // signInData: any;
    // signInLoading: any;
    // signInError: any;
    handleSignIn: any;
}

export default function TableFillView(props: TableFillViewProps) {
    // export default function tableFillView() {
    // const { handleSignIn } = props;
    const router = useRouter();
    const [msg, setMessage] = useState('')


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <>

            <div className='flex flex-row justify-center mb:w-2/3 h-screen'>
                <div className='flex flex-col w-full bg-white md:w-2/3'>

                    <div className='relative w-full h-48 bg-gradient-to-r from-lime-500 via-lime-400 to-lime-200 '>

                        <div className='absolute bottom-4 left-4 mb-6 '>
                            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                [activity Name]</h1>
                        </div>

                        <div className='absolute bottom-4 right-4 block '>
                            <h5 className="text-xl font-semibold dark:text-white">copyright by []</h5>
                        </div>
                    </div>

                    <div className='p-4 pt-8'>
                        <div className='mb-6 '>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="John" required />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="John" required />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Open Time</label>
                            <input type="text" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="日期模式未设置" required />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pill Content</label>
                            <textarea id="content" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="tip" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tip before date</label>
                            <input type="text" id="tip" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="abaaba" required />
                        </div>
                        
                        <div className='flex justify-center'>
                        <button type="button" 
                                onClick={()=> router.push('./submitTip')}
                                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sumbit</button>

                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}
