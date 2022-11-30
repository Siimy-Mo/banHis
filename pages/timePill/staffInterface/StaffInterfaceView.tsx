// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { FormEventHandler } from 'react';
import { ChangeEvent, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PillStatusTable from './StaffInterfaceContainer'

const testDataset1 = [
    { number: '123456', ddl: '12/21', },
    { number: '654321', ddl: '12/21' },
];

const testDataset2 = [
    { number: '123456', ddl: '12/21', },
    { number: '654321', ddl: '12/21' },
];

interface StaffInterfaceViewProps {
    // handleSignIn: FormEventHandler;
}

export default function StaffInterfaceView(props: StaffInterfaceViewProps) {
    // export default function LoginView() {
    const [PillLabel, setPillLabel] = useState(0)
    const router = useRouter();

    return (
        <>

            <div className='flex justify-center pt-20 w-screen'>

                <div className='flex flex-col items-center w-full md:w-2/3 text-red-900'>

                    <div className=''>
                        <h3 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-red-900 md:text-4xl lg:text-5xl dark:text-white">
                            staff操作界面</h3>
                    </div>

                    <div className='flex flex-col items-center px-12 py-6 rounded-xl bg-red-200 timePillIntroShadowOn'>
                        胶囊状态
                        <div >
                            <div className="overflow-x-auto relative">
                                <table className="w-full text-sm text-left  ">
                                    <thead className="text-xs uppercase dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">
                                                <a onClick={() => setPillLabel(0)}>未到期</a>
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                <a onClick={() => setPillLabel(1)}>已到期</a>
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                <a onClick={() => setPillLabel(2)}>已完成</a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <td className="py-2 px-6">
                                                20
                                            </td>
                                            <td className="py-2 px-6">
                                                5
                                            </td>
                                            <td className="py-2 px-6">
                                                10
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        {/* <PillStatusTable {...{PillLabel}}/> */}

                        {/* 展示界面： */}
                        {PillLabel == 0 ?
                            <div className='transition-transform ease-in-out duration-500 slideInFromR' >
                                未到期胶囊界面
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
                                            {testDataset1.map((row, index) => {
                                                return (
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                <div className='flex w-full justify-between'>
                                    <button onClick={() => setPillLabel(1)}>提前领取胶囊</button>
                                </div>
                            </div>
                            :
                            <></>
                        }

                        {/* 展示界面： */}
                        {PillLabel == 1 ?
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

                                    <button onClick={() => setPillLabel(0)}>发送邮件</button>
                                    <button onClick={() => setPillLabel(1)}>领取胶囊</button>
                                    <button onClick={() => setPillLabel(2)}>设置过期</button>
                                </div>
                            </div>
                            :
                            <></>
                        }
                        {/* 展示界面： */}
                        {PillLabel == 2 ?
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

                                    <button onClick={() => setPillLabel(0)}>取消领取？</button>
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
