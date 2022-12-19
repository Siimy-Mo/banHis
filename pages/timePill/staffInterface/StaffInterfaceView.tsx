// import { CheckIcon, XIcon } from '@heroicons/react/outline'; // react lib的一些icon图标
import { ChangeEvent, createContext } from 'react';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import PillStatusTables from './PillStatusTables';

interface StaffInterfaceViewProps {
    headers: any;
    status: any;
    setCheckid: any;
    setTargetStatus: any;
    Logout: any;
}
const statusName = [
    { order: 0, statusName: '未到期' },
    { order: 1, statusName: '已到期' },
    { order: 2, statusName: '已完成' },
]


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}


export default function StaffInterfaceView(props: StaffInterfaceViewProps) {
    // export default function LoginView() {
    const { headers, status = [], setCheckid, setTargetStatus, Logout } = props;
    const [tableDisplay, setTableDisplay] = useState(-1)
    const router = useRouter();

    return (
        <>
            <div className='flex justify-center py-20 w-screen'>

                <div className='flex flex-col items-center w-full md:w-2/3 text-red-900'>

                    <h3 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-red-900 md:text-4xl lg:text-5xl dark:text-white">
                        staff操作界面</h3>

                    <div className=" block mb-6 text-lg font-normallg:text-xl sm:px-16 xl:px-48">
                        <a onClick={Logout} className="block text-center">
                            点击退出
                        </a>
                    </div>

                    <div className='flex flex-col items-center min-w-min w-staffTable py-4 pt-8 md:px-12 md:py-6 rounded-xl bg-red-200 timePillIntroShadowOn '>
                        <div className='text-center w-screen md:w-full 最頂上的文字應該寫操作介紹和問候'>
                            點擊胶囊状态，查看對應表格
                        </div>

                        <hr className="my-2 mx-auto w-48 h-1 bg-red-900 rounded border-0 md:my-4" />

                        <div className="mb-4 overflow-x-auto relative md:w-96 ">
                            <table className="w-full text-sm text-center  ">
                                <thead className="text-base">
                                    <tr>
                                        {statusName.map((item, index) => (
                                            // <a href="#" class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300">Profile</a>
                                            // <a href="#" class="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active " aria-current="page">Dashboard</a>

                                            <th key={index} scope="col"
                                                className={classNames("py-3 px-6 mx-4 rounded-t-lg border-b-2 border-transparent hover:text-red-6500",
                                                    item.order == tableDisplay ?
                                                        "text-red-500 border-red-500"
                                                        :
                                                        ""
                                                )}>
                                                <a onClick={() => {
                                                    setTableDisplay(item.order)
                                                }}>{item.statusName} </a>
                                            </th>

                                        ))}

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <td className="py-2 px-6">
                                            {status.received + status.confirmed}
                                        </td>
                                        <td className="py-2 px-6">
                                            {status.expire + status.informed}
                                        </td>
                                        <td className="py-2 px-6">
                                            {status.finish + status.unused}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <PillStatusTable /> */}

                        <div className="mb-4 inline-flex justify-center items-center w-full">
                            <hr className="my-4 w-3/4 md:w-full h-px bg-red-500 border-0 dark:bg-gray-700" />
                            {tableDisplay == -1 ? <span></span> :
                                <span className="p-1 absolute left-1/2 px-3 font-medium text-white bg-red-500 -translate-x-1/2 dark:text-white dark:bg-gray-900">
                                    {statusName[tableDisplay].statusName}膠囊表格
                                </span>
                            }
                        </div>


                        {/* 還要傳送數據！ default是空集狀態組件*/}
                        {/* <Provider value={tableDisplay }> */}
                        <PillStatusTables
                            headers={headers}
                            display={tableDisplay}
                            setCheckid={setCheckid}
                            setTargetStatus={setTargetStatus} />
                        {/* </Provider> */}

                    </div>
                </div>

            </div>

        </>
    );
}

