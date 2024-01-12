// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import hisData from '../../public/banRecord.json';  // data以后要存储在远程服务器上,用axios来获得它


// 加载json数据之后 需要做的事情：
// 0.设置加载前的占位组件
// 1.访问数据，获取时间，计算时间点到left的距离，分别添加到横向时间线的li中。
//     （tailwind是固定值，要看看怎么做成px。


// 2.横向时间线是加载之后overflow-hidden了前后的节点，是否全部加载是要考虑的。
//     不过好像原来只是单纯用来做年份标记，不需要这么详细！！！
// 3.data-date值用于横竖 时间线的交互联动。


// 5.VT的宽度还是按照内容支撑的，缺少默认宽度。缺少做手机界面


interface LoginViewProps {
    handleSignIn: FormEventHandler;
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

function side(idx: number) {
    return idx % 2 == 0;
}

function getYearArray() {
    return Array.from(new Set(hisData.map(obj => { return obj.year; }).sort()))
}

export default function LoginView(props: LoginViewProps) {
    // export default function LoginView() {
    const { handleSignIn } = props;
    const [year, setYear] = useState(2023)
    const [search, setSearch] = useState('')
    const yearArray = getYearArray()
    const [banlist, setBanlist] = useState([{
        year: 0,
        title: "Title",
        type: "28集全",
        date_broadcast: "2023-9-29",
        date_start: "2023-9-29",
        date_finish: "2024-4-1",
        tag: "\\",
        imgURL: "\\"
    }])


    useEffect(() => {
        const newBan = hisData.filter(hisData => hisData.year === year);
        setBanlist(newBan.slice()) //数组需要深拷贝
    }, [year])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value); //是否要设置断流?
    }
    const searchBan = () => {
        if (search.trim() === '') return
        
        const newBan = hisData.filter(hisData => hisData.title.includes(search));
        console.log(newBan);
        setBanlist(newBan.slice()); //数组需要深拷贝
        event?.preventDefault()
    }

    function changeYear(change: number) {
        if (yearArray.indexOf(year + change) !== -1) {
            setYear(year + change)
        }
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center h-full px-12 my-6 overflow-auto'>
                {/* 搜索框 */}
                <div >
                    <form className='w-96'>
                        <label htmlFor="ban-search" className="mb-2 text-2xl font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="ban-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-bgColor rounded-md shadow-md shadow-gray-400 focus:ring-themeOther1 focus:border-themeOther1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-themeOther1 dark:focus:border-themeOther1"
                                placeholder="搜索关键字" required onChange={onChange}/>
                                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-themeOther1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md shadow-md shadow-themeOther1 text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-themeOther1 dark:focus:ring-blue-800"
                                    onClick={searchBan}>Search</button>
                        </div>
                    </form>
                </div>


                <div className="flex my-4">
                    <a onClick={() => changeYear(-1)} className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-red-600 bg-white rounded-md shadow-md shadow-red-600/50 hover:text-themeOther1 hover:shadow-gray-700">
                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                        </svg>
                    </a>
                    <span className="mx-7 text-xl text-red-600 font-semibold">{year}</span>
                    <a onClick={() => changeYear(1)} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-red-600 bg-white rounded-md shadow-md shadow-red-600/50 hover:text-themeOther1 hover:shadow-gray-700">
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>


                {/* timeLime reference: https://codepen.io/NilsWe/pen/Axdozd */}
                <div className='my-0 mx-auto py-4 px-0 list-none'>
                    <span className='absolute left-1/2 top-0 content-none block w-2 h-full -ml-1
                            bg-themeOther1 text-transparent'></span>
                    <span className=' absolute left-1/2 content-none h-1/6 w-2 top-0 -ml-1
                            bg-gradient-to-b from-bgColor to-transparent'></span>
                    <span className='absolute left-1/2 content-none h-1/6 w-2 bottom-0 -ml-1
                            bg-gradient-to-t from-bgColor to-transparent'></span>

                    <ul>
                        {banlist.map((item, index) => (
                            <li className='my-4 py-2 px-0 z-10' key={item.title}>
                                <div className={classNames("absolute px-7 ",
                                    side(index) ? 'float-right left-1/2' : 'float-left text-right right-1/2')}>

                                    <div className="relative inline-block text-center">
                                        <span className="relative inline bg-white py-1 px-2 rounded-md font-semibold text-2xl shadow-md shadow-red-600/50">

                                            <span className={classNames(
                                                side(index) ? "-left-9" : "-right-9",
                                                'absolute content-none top-1/2  w-4 h-4 block -mt-2 bg-white rounded-full border-4 border-solid border-red-600 z-20')}></span>
                                            {item.title}
                                            <span className={classNames(
                                                side(index) ? "right-full border-r-white" : "left-full border-l-white",
                                                'content-none absolute top-1/2 h-4 w-4 -mt-2 border-solid border-transparent border-8 pointer-events-none')}></span>
                                        </span>
                                        <span className={classNames(
                                            side(index)
                                                ? "float-right"
                                                : "float-left",
                                            "inline leading-4 text-sm text-red-600 align-middle")}>
                                            <span className="inline-block py-1 px-1.5 bg-white">{item.date_finish}</span></span>
                                    </div>

                                    <div className={classNames(
                                        side(index)
                                            ? "mr-3"
                                            : "ml-3",
                                        "my-3 text-base italic leading-6")}>
                                        图片预览<br />
                                        类型：{item.type}<br />
                                        播出于 {item.date_broadcast}<br />
                                        开始观看于 {item.date_start}<br />
                                    </div>
                                </div>
                                <span className='content-none block h-10 clear-both invisible'></span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </>
    );
}
