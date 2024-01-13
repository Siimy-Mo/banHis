import { Fragment, useCallback, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';


const navigation = [
    { name: '主頁', href: '/', current: false },
    { name: '番剧歷史', href: '/HisRecord', current: false },
    { name: 'TimePill', href: '/timePill', current: false },
];




function HeadNav() {
    const router = useRouter();

    return (
        <>
            <header>
                <nav className="bg-opColor2 hover:bg-reverseColor text-bgColor transitionSet1 shadow-2xl">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse ">
                            <img className="w-10 h-10 rounded" src="icons8-hot-85.png" alt="Default avatar" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BanHis</span>
                        </a>

                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-orange-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>


                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:font-medium md:border-0">
                                
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="block py-2 px-3 md:text-orange-500 md:p-0 md:hover:text-blue-900"
                                            aria-current={item.current ? 'page' : undefined}
                                        >{item.name}
                                        </a>
                                    </li>
                                ))}

                                <li>
                                    <button className="md:hover:text-blue-900" onClick={() => router.push('/login')}>登出</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </header>


        </>
    );
}

export default HeadNav;
