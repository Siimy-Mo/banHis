import { MouseEventHandler, FormEventHandler, ChangeEventHandler, useContext, useMemo, useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import Api from '../../../apis';
import { useRouter } from 'next/router';
// import {PillContext} from './StaffInterfaceContainer';

const apiSetting = new Api();

// received: 0,  //未到期
// confirmed: 0,  //店员确认
// informed: 0,  //店员已发邮件
// expire: 0,  //已到期，未领取
// finish: 0,  //完成，已领取
// unused: 0, //完成，未领取
const displayLabel = [
    ['received', 'confirmed'],
    ['expire', 'informed'],
    ['finish', 'unused'],
]



interface UploadingProps {
    display: number,
    setCheckid: any,
    setTargetStatus: any,
}

const cutDate = (date: string) => {
    return date.substring(0, 10)
}

// const changeStatus 
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer B7PC44kY7jEgbGPA_Wu1',
};

function HeadNav(props: UploadingProps) {
    // const display0 = useContext(AppContext);
    const router = useRouter();
    const { display = -1, setCheckid, setTargetStatus } = props;
    const [pillContent, setPillContent] = useState([])
    const [pillnum, setPillnum] = useState(0)
    const [{ data: allPillsStatusData }, getAllPillsWithStatus] = useAxios(
        {},
        { manual: true }
    );

    const getPills = async (status: Array<string>) => {//两个promise，合并需要Promise.all来处理
        // console.log('getPills function ! with status:', status)
        const res = await getAllPillsWithStatus(apiSetting.PillStatus.getAllPillsWithStatus(headers, status[0]))
        const res1 = await getAllPillsWithStatus(apiSetting.PillStatus.getAllPillsWithStatus(headers, status[1]))
        if (res.data.success && res1.data.success) {
            const content = res.data.doc
            const content1 = res1.data.doc
            // console.log('status[0]: ', res.data)
            // console.log('status[1]: ', res1.data)
            Promise.all([content, content1]).then((values) => {
                setPillContent(values[0].concat(values[1]))
            })
        }
    }

    // 捕捉选择的胶囊id
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        // console.log(e.target)
        if (e.target.checked) {
            setPillnum(Number(e.target.value))
        } //else?
    }

    const handleSubmit = (target: string) => {
        // console.log(target)
        setCheckid(pillnum)
        setTargetStatus(target)
        router.reload()
    }

    const tableList = (display: number) => {
        if (pillContent) {
            switch (display) {
                case 0:
                    return table0(pillContent, handleChange);
                case 1:
                    return table1(pillContent, handleChange);
                case 2:
                    return table2(pillContent, handleChange);
                default:
                    return <h1>No data</h1>
            }
        }
    }


    const buttonList = (display: number) => {
        if (pillContent) {
            switch (display) {
                case 0:
                    return buttons0(handleSubmit);
                case 1:
                    return buttons1(handleSubmit);
                case 2:
                    return buttons2(handleSubmit);
                default:
                    return <h1>No data</h1>
            }
        }
    }
    useEffect(() => {
        if (display + 1) {
            getPills(displayLabel[display])
        }
    }, [display]);//第一次默認

    // useEffect(() => {
    //     console.log('pillNumber: ', pillnum)
    // }, [pillnum]);

    return (
        <div className='h-fit w-3/4' >
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                {tableList(display)}
            </div>
            <div>
                {buttonList(display)}
            </div>
        </div>
    );
}

const table0 = (pillContent: any, handleChange: any) => {
    // const value = useContext(PillContext);
    return (
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
                    <th scope="col" className="py-3 px-6">
                        致電確認
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    pillContent.map((row: any) => (
                        <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4 w-4">
                                <div className="flex items-center">
                                    <input id="default-radio-1" onChange={handleChange}
                                        type="radio" value={row.id} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                </div>
                            </td>
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                {row.id}
                            </th>
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                {cutDate(row.deadline)}

                            </th>
                            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                {row.status}
                            </th>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}


const table1 = (pillContent: any, handleChange: any) => {
    return (
            <table className="w-full text-sm text-left  dark:text-gray-400">
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
                        <th scope="col" className="py-3 px-6">
                            通知狀態
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pillContent.map((row: any) => (
                            <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4 w-4">
                                    <div className="flex items-center">
                                        <input id="default-radio-1" onChange={handleChange} type="radio" value={row.id} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                    </div>
                                </td>
                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                    {row.id}
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                    {cutDate(row.deadline)}
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                    {row.status}
                                </th>
                            </tr>
                        ))}

                </tbody>
            </table>

    )
}

const table2 = (pillContent: any, handleChange: any) => {
    return (
            <table className="w-full text-sm text-left  dark:text-gray-400">
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
                        <th scope="col" className="py-3 px-6">
                            完成方式
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pillContent.map((row: any) => (
                            <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4 w-4">
                                    <div className="flex items-center">
                                        <input id="default-radio-1" onChange={handleChange} type="radio" value={row.id} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                                    </div>
                                </td>
                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                    {row.id}
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                    {cutDate(row.deadline)}
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap dark:text-white">
                                    {row.status}
                                </th>
                            </tr>

                        ))}
                </tbody>
            </table>

    )
}

const buttons0 = (handleSubmit: any) => {
    // const value = useContext(PillContext);
    return (
        <div className='flex w-full justify-between md:px-16'>
            <button className='staffInterfaceBtn' onClick={() => { handleSubmit('confirmed') }}>確認收件</button>
            <button className='staffInterfaceBtn' onClick={() => { handleSubmit('expire') }}>设置到期</button>
        </div>
    )
}

const buttons1 = (handleSubmit: any) => {
    // const value = useContext(PillContext);
    return (
        <div className='flex w-full justify-between'>
                <button className='staffInterfaceBtn' onClick={() => { handleSubmit('informed') }}>致電通知</button>
                <button className='staffInterfaceBtn' onClick={() => { handleSubmit('finish') }}>领取胶囊</button>
                <button className='staffInterfaceBtn' onClick={() => { handleSubmit('unused') }}>逾期无人领取</button>
        </div>
    )
}

const buttons2 = (handleSubmit: any) => {
    // const value = useContext(PillContext);
    return (
        <div className='flex w-full justify-center'>
            <button className='staffInterfaceBtn' onClick={() => { handleSubmit('received') }}>设置成最初的状态（测试）</button>
        </div>
    )
    }

export default HeadNav;
