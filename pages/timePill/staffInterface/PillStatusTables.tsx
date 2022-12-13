import { MouseEventHandler, FormEventHandler, ChangeEventHandler, useContext, useMemo, useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import Api from '../../../apis';
// import {PillContext} from './StaffInterfaceContainer';

const apiSetting = new Api();

// received: 0,  //未到期
// confirmed: 0,  //店员确认
// informed: 0,  //店员已发邮件
// expire: 0,  //已到期，未领取
// finish: 0,  //完成，已领取
// unused: 0, //完成，未领取
const displayLabel = {
    0: ['received', 'confirmed'],
    1: ['expire', 'informed'],
    2: ['finished', 'unused'],
}

const dataset1 = [ //未到期 的膠囊狀態：膠囊編號 | 到期日期
    { number: '123456', ddl: '12/21', status: '未確認' },
    { number: '654321', ddl: '12/21', status: '已確認' },
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

const changeStatus1: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    console.log('tchange!!!!!!!!!!!')

    // const res = await getAllPillsWithStatus(apiSetting.PillStatus.getAllPillsWithStatus(headers, s1[0]))
    // if (res.data.success) {
    //     const content = res.data.doc
    //     setPillContent(content)
    //     console.log('Pill Tables: res.data', res.data)
    // }
}

function HeadNav(props: UploadingProps) {
    // const display0 = useContext(AppContext);
    const { display = -1, setCheckid, setTargetStatus } = props;
    const [pillContent, setPillContent] = useState([])
    const [pillnum, setPillnum] = useState(0)
    const [{ data: allPillsStatusData }, getAllPillsWithStatus] = useAxios(
        {},
        { manual: true }
    );

    const getPills = async (status: Array<[]>) => {//两个promise，合并需要Promise.all来处理
        const res = await getAllPillsWithStatus(apiSetting.PillStatus.getAllPillsWithStatus(headers, status[0]))
        const res1 = await getAllPillsWithStatus(apiSetting.PillStatus.getAllPillsWithStatus(headers, status[1]))
        if (res.data.success && res1.data.success) {
            const content = res.data.doc
            const content1 = res1.data.doc
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
    }

    const project = (display: number) => {
        //這裡就要傳數據了！！，或者在table0裡【不建議】
        // console.log('pillContent', pillContent)
        if (pillContent) {
            switch (display) {
                case 0:
                    return table0(pillContent, handleChange, handleSubmit);
                case 1:
                    return table1();
                case 2:
                    return table2();
                default:
                    return <h1>No data</h1>
            }
        }
    }

    useEffect(() => {
        if (display >= 0) {
            getPills(displayLabel[display])
        }
    }, [display]);//第一次默認

    useEffect(() => {
        console.log('pillNumber: ', pillnum)
    }, [pillnum]);

    return (
        <div>{project(display)}</div>
    );
}

const table0 = (pillContent: any, handleChange: any, handleSubmit: any) => {
    // const value = useContext(PillContext);
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
            </div>
            <div className='flex w-full justify-center'>
                <button className='staffInterfaceBtn' onClick={() => { handleSubmit('confirmed') }}>確認收件</button>
                <button className='staffInterfaceBtn' onClick={() => { handleSubmit('finish') }}>提前领取</button>
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
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-4 w-4">
                                <div className="flex items-center">
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
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
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
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
                <button className='staffInterfaceBtn' >致電通知</button>
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
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
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
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
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
                                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
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
                <button className='staffInterfaceBtn' >取消领取？</button>
            </div>
        </div>
    )
}

export default HeadNav;
