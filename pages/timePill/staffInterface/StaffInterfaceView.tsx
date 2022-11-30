// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import PillStatusTable from './pillStatusTable'

interface StaffInterfaceViewProps {
    current: any;
}
const statusName = [
    { order: 0, statusName: '未到期' },
    { order: 1, statusName: '已到期' },
    { order: 2, statusName: '已完成' },
]

export default function StaffInterfaceView(props: StaffInterfaceViewProps) {
    // export default function LoginView() {
    const { current, } = props;
    const [tableDisplay, setTableDisplay] = useState(0)

    return (
        <>

            <div className='flex justify-center pt-20 w-screen'>

                <div className='flex flex-col items-center w-full md:w-2/3 text-red-900'>

                    <div className=''>
                        <h3 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-red-900 md:text-4xl lg:text-5xl dark:text-white">
                            staff操作界面</h3>
                    </div>

                    <div className='flex flex-col items-center px-12 py-6 rounded-xl bg-red-200 timePillIntroShadowOn'>
                        <div className='最頂上的文字應該寫操作介紹和問候'>
                            點擊胶囊状态，查看對應表格
                        </div>

                        <hr className="my-2 mx-auto w-48 h-1 bg-red-900 rounded border-0 md:my-4" />

                        <div className="mb-4 overflow-x-auto relative w-96 ">
                            <table className="w-full text-sm text-center  ">
                                <thead className="text-base">
                                    <tr>
                                        {statusName.map((item, index) => {
                                            return (
                                                <th key={index} scope="col" className="py-3 px-6 hover:text-red-500">
                                                    <a onClick={() => setTableDisplay(item.order)}>{item.statusName} </a>
                                                </th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        {current.map((num: number, index: number) => {
                                            return (
                                                <td key={index} className="py-2 px-6">
                                                    {num}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        {/* <PillStatusTable /> */}
                        <div className="mb-4 inline-flex justify-center items-center w-full">
                            <hr className="my-4 w-full h-px bg-red-500 border-0 dark:bg-gray-700"/>
                                <span className="p-1 absolute left-1/2 px-3 font-medium text-white bg-red-500 -translate-x-1/2 dark:text-white dark:bg-gray-900">
                                    {statusName[tableDisplay].statusName}膠囊表格</span>
                        </div>

                        {/* 展示界面： */}
                        {tableDisplay == 0 ?
                            <div className='transition-transform ease-in-out duration-500 slideInFromR' >
                                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">

                                    <table className="w-full text-sm text-left dark:text-gray-400">
                                        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="p-4">
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    胶囊编号
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    到期日期
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {testDataset1.map((row, index) => {
                                                return (
                                                    <tr key={row.number} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <td className="p-4 w-4">
                                                            <div className="flex items-center">
                                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                            </div>
                                                        </td>
                                                        <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                            {row.number}
                                                        </th>
                                                        <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                            {row.ddl}
                                                        </th>
                                                    </tr>
                                                )
                                            })
                                            } */}
                                        </tbody>
                                    </table>
                                </div>

                                <div className='flex w-full justify-between'>
                                    <button onClick={() => setTableDisplay(1)}>提前领取胶囊</button>
                                </div>
                            </div>
                            :
                            <></>
                        }

                        {/* 展示界面： */}
                        {tableDisplay == 1 ?
                            <div className='h-fit' >
                                已到期胶囊界面
                                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left  dark:text-gray-400">
                                        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                                    </div>
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    胶囊编号
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    到期日期
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    是否通知
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    123456
                                                </th>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    12/21
                                                </th>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    未通知
                                                </th>
                                            </tr>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    654321
                                                </th>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    12/21
                                                </th>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    已通知
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='flex w-full justify-between'>

                                    <button onClick={() => setTableDisplay(0)}>发送邮件</button>
                                    <button onClick={() => setTableDisplay(1)}>领取胶囊</button>
                                    <button onClick={() => setTableDisplay(2)}>设置过期</button>
                                </div>
                            </div>
                            :
                            <></>
                        }
                        {/* 展示界面： */}
                        {tableDisplay == 2 ?
                            <div className='h-fit' >
                                已完成胶囊界面
                                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left  dark:text-gray-400">
                                        <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="p-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                                    </div>
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    胶囊编号
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    到期日期
                                                </th>
                                                <th scope="col" className="py-3 px-6">
                                                    完成方式
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    123456
                                                </th>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    12/21
                                                </th>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    过期
                                                </th>
                                            </tr>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    654321
                                                </th>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    12/21
                                                </th>
                                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                                    已领取
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='flex w-full justify-between'>

                                    <button onClick={() => setTableDisplay(0)}>取消领取？</button>
                                </div>
                            </div>
                            :
                            <></>
                        }




                    </div>
                </div>

            </div>

        </>
    );
}

