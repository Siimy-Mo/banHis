import { Fragment, useCallback, useEffect, useState } from 'react';

//請求數據
//提交操作

const dataset1 = [ //未到期 的膠囊狀態：膠囊編號 | 到期日期
    { number: '123456', ddl: '12/21', },
    { number: '654321', ddl: '12/21' },
];
const dataset2 = [//已到期 的膠囊狀態：膠囊編號 | 到期日期 | 是否通知
    { number: '123456', ddl: '12/21', status: 'uncall' },
    { number: '654321', ddl: '12/21', status: 'called' },
];
const dataset3 = [//已完成 的膠囊狀態：膠囊編號 | 到期日期 | 完成方式
    { number: '123456', ddl: '12/21', method: 'Expired' },
    { number: '654321', ddl: '12/21', method: 'Finished' },
];

interface UploadingProps {
    display: number;
}

function HeadNav(props: UploadingProps) {
    const { display = 0 } = props;

    const project = (display: number) => {
        //這裡就要傳數據了！！，或者在table0裡【不建議】
        switch (display) {
            case 0:
                return table0();
            case 1:
                return table1();
            case 2:
                return table2();
            default:
                return <h1>No data</h1>
        }
    }

    useEffect(() => {
        console.log('display會變化， 看display選請求鏈接')
        console.log(display)
    }, [display]);//第一次默認



    return (
        <div>{project(display)}</div>
    );
}

const table0 = () => {
    return (
        <div className='h-fit' >
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
                        {/* {
                        dataset1.map((row, index) => (
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
                        ))} */}
                    </tbody>
                </table>
            </div>
            <div className='flex w-full justify-center'>
                <button className='staffInterfaceBtn' >提前领取胶囊</button>
            </div>

        </div>
    )
}

const table1 = () => {
    return (
        <div className='h-fit' >
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
                <button className='staffInterfaceBtn' >发送邮件</button>
                <button className='staffInterfaceBtn' >领取胶囊</button>
                <button className='staffInterfaceBtn' >设置过期</button>
            </div>
        </div>
    )
}

const table2 = () => {
    return (
        <div className='h-fit' >
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

            <div className='flex w-full justify-center'>
                <button className='staffInterfaceBtn' >取消领取</button>
            </div>
        </div>
    )
}

export default HeadNav;
