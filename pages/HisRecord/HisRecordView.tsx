// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import hisData from '../../public/banRecord.json';  // data 多了之后要学缓处理。


// 加载json数据之后 需要做的事情：
// 0.设置加载前的占位组件
// 1.访问数据，获取时间，计算时间点到left的距离，分别添加到横向时间线的li中。
//     （tailwind是固定值，要看看怎么做成px。


// 2.横向时间线是加载之后overflow-hidden了前后的节点，是否全部加载是要考虑的。
//     不过好像原来只是单纯用来做年份标记，不需要这么详细！！！
// 3.data-date值用于横竖 时间线的交互联动。


// 4.加载json数据的时候要做上Rside 标签！才能map出来 。hisData ->useEffect来第一次处理文件！

// 5.VT的宽度还是按照内容支撑的，缺少默认宽度。缺少做手机界面
const banList = [
    { name: '标题1', date: '2013 - present', Rside: true },
    { name: '标题2', date: '2013 - present', Rside: false },
    { name: '标题3', date: '2013 - present', Rside: true }
];

interface LoginViewProps {
    handleSignIn: FormEventHandler;
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}


export default function LoginView(props: LoginViewProps) {
    // export default function LoginView() {
    const { handleSignIn } = props;
    const [msg, setMessage] = useState('')

    return (
        <>
            <div className='flex flex-col justify-center items-center h-full px-12 my-16 overflow-auto'>
                <div >
                    <form className='w-96'>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>


                {/* https://codepen.io/ritz078/pen/LGRWjE  class=timeline*/}
                {/* 一个横向的时间线来跳转year Unit
                data-date 用于和下方div<class="events-content">的li标签的的属性绑定 */}
                <div className='relative h-28 w-4/5 my-0 mx-auto'>

                    {/* events-wrapper 两侧渐变的伪类*/}
                    <div className='relative h-full my-0 mx-10 overflow-hidden'>
                        <span className='content-none absolute z-20 top-0 h-full w-5
                            left-0 bg-gradient-to-r from-bgColor to-transparent text-transparent'>白色渐变</span>

                        {/* events */}
                        <div className='absolute z-10 left-0 top-14 h-0.5 w-full bg-white transition-transform duration-500'>
                            <ol>
                                {/* 一个选项单位  额外class 有selected pass 选项,要计算left*/}
                                <li>
                                    <a href="#0" data-date="16/01/2014"
                                        className='absolute bottom-0 z-20 text-center text-lg pb-4 text-themeOther1 transformZ0
                                        left-10'>
                                        16 Jan
                                        <span className='content-none absolute left-1/2 right-auto -translate-x-1/2
                                        -bottom-1 h-3 w-3 rounded-full bg-white border-2 border-solid border-themeOther1 transition-colors
                                        hover:bg-themeOther1 text-transparent '>a的伪类after</span>
                                    </a>
                                </li>


                                <li>
                                    <a href="#0" data-date="17/01/2014"
                                        className='absolute bottom-0 z-20 text-center text-lg pb-4 text-themeOther1 transformZ0
                                        left-36'>
                                        17 Jan
                                        <span className='content-none absolute left-1/2 right-auto -translate-x-1/2
                                        -bottom-1 h-3 w-3 rounded-full bg-white border-2 border-solid border-themeOther1 transition-colors
                                        hover:bg-themeOther1 text-transparent '>a的伪类after</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" data-date="18/01/2014"
                                        className='absolute bottom-0 z-20 text-center text-lg pb-4 text-themeOther1 transformZ0
                                        left-96'>
                                        18 Jan
                                        <span className='content-none absolute left-1/2 right-auto -translate-x-1/2
                                        -bottom-1 h-3 w-3 rounded-full bg-white border-2 border-solid border-themeOther1 transition-colors
                                        hover:bg-themeOther1 text-transparent '>a的伪类after</span>
                                    </a>
                                </li>
                            </ol>

                            <span className='absolute z-10 left-0 top-0 h-full w-full bg-themeOther1
                                scale-x-10 origin-left-center transition-transform duration-300 text-transparent'>水平线</span>
                        </div>

                        <span className='content-none absolute z-20 top-0 h-full w-5
                            right-0 bg-gradient-to-l from-bgColor to-transparent text-transparent'>白色渐变</span>
                    </div>


                    <ul>
                        <li>
                            <a href="#0" className='absolute z-10 top-1/2 bottom-auto -translate-y-1/2 h-8 w-8 
                                overflow-hidden text-transparent indent1_1 whitespace-nowrap rounded-full border-2 border-solid border-themeOther1 transition-colors 
                                left-0'>Prev</a></li>
                        <li>
                            <a href="#0" className='absolute z-10 top-1/2 bottom-auto -translate-y-1/2 h-8 w-8 
                                overflow-hidden text-transparent indent1_1 whitespace-nowrap rounded-full border-2 border-solid border-themeOther1 transition-colors
                                right-0'>Next</a></li>
                    </ul>
                </div>


                {/* timeLime reference: https://codepen.io/NilsWe/pen/Axdozd */}
                <div className='relative w-4/5 my-0 mx-auto py-4 px-0 list-none'>
                    <span className='absolute left-1/2 top-0 content-none block w-2 h-full -ml-1
                            bg-themeOther1 text-transparent'>时间线</span>
                    <span className='content-none absolute z-0 top-0 h-1/6 w-full
                            bg-gradient-to-b from-bgColor to-transparent'></span>

                    <ul>
                        {banList.map((item) => (
                            <li className='py-2 px-0 z-10' key={item.name}>
                                <div className={classNames(
                                    item.Rside
                                        ? 'float-right'
                                        : 'float-left text-right',
                                    "relative w-96")}>

                                    <div className="relative inline-block text-center">
                                        <span className="relative inline bg-white py-1 px-2 rounded-md font-semibold text-2xl text-left shadow-md shadow-red-600/50">
                                            <span className={classNames(
                                                item.Rside
                                                    ? "-left-7"
                                                    : "-right-7",
                                                'absolute content-none top-1/2  w-4 h-4 block -mt-2 bg-white rounded-full border-4 border-solid border-red-600 z-20')}></span>
                                            {item.name}
                                            <span className={classNames(
                                                item.Rside
                                                ? "right-full border-r-white"
                                                : "left-full border-l-white",
                                                'content-none absolute top-1/2 h-4 w-4 -mt-2 border-solid border-transparent border-8 pointer-events-none')}></span>
                                        </span>

                                        <span className={classNames(
                                            item.Rside
                                                ? "float-right"
                                                : "float-left",
                                            "inline leading-4 text-sm text-red-600 align-middle")}>
                                            <span className="inline-block py-1 px-1.5 bg-white">{item.date}</span></span>
                                    </div>
                                    <div className={classNames(
                                        item.Rside
                                        ? "mr-3 ml-0"
                                        : "mr-0 ml-3",
                                        "mt-4 mb-0 text-base italic leading-6")}>时长：25集全<br/>番剧的tag:悬疑/推理/迷番/偶像</div>
                                </div>
                                <span className='content-none block h-0 clear-both invisible'></span>
                            </li>
                        ))}

                    </ul>
                    <span className='content-none absolute z-0 bottom-0 h-1/6 w-full
                            bg-gradient-to-t from-bgColor to-transparent'></span>
                </div>

                <div>

                    <ol className="relative border-l border-gray-200 dark:border-gray-700 my-4">



                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">支撑宽度的内容！Flowbite Application UI v2.0.0 <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg> Download ZIP</a>
                        </li>


                    </ol>
                </div>


            </div>

        </>
    );
}
