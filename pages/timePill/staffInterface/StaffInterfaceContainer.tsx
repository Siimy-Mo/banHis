// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, createContext, useState } from 'react';
import Api from '../../../apis';
import StaffInterfaceView from './StaffInterfaceView';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';
import axios from 'axios';


const apiSetting = new Api();

const status =  //子组件不用所以这里不放在cxt中
{
    received: 0,  //未到期
    confirmed: 0,  //店员确认
    informed: 0,  //店员已发邮件
    expire: 0,  //已到期，未领取
    finish: 0,  //完成，已领取
    unused: 0, //完成，未领取
}




export default function StaffInterfaceContainer(PillContext: any) {
    const [tableDisplay, setTableDisplay] = useState(0)

    const router = useRouter();
    // const status = {};
    const [{ data: allPillsData }, getAllPills] = useAxios(
        {},
        { manual: true }
    );

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer B7PC44kY7jEgbGPA_Wu1',
    };

    const getNum = (data: any, target: string) => {
        let num = 0
        data.map((item: any) => {
            (item.status == target) ?
                num += 1 : num = num
        })
        return num
    }

    const getPills = async () => {
        console.log('GetPills in Interface:')
        const res = await getAllPills(apiSetting.PillStatus.getAllPills(headers))

        if (res.data.success) {
            const pills = res.data.doc
            status.received = getNum(pills, 'received')
            status.confirmed = getNum(pills, 'confirmed')
            status.informed = getNum(pills, 'informed')
            status.expire = getNum(pills, 'expire')
            status.finish = getNum(pills, 'finish')
            status.unused = getNum(pills, 'unused')
        };
    }

    // 检查token，不然跳转至login
    useEffect(() => {
        // axios.defaults.headers.common['authorization'] =
        //     localStorage.getItem('authorization') || '';
        const data = localStorage.getItem('authorization');
        if (data) {
            //do something
            // axios.get('https://futureword.m2mda.com/api/capsules/search')
            // axios.get('https://randomuser.me/api/') // 是可以用的
            // axios({
            //     method: 'get',
            //     url: 'https://futureword.m2mda.com/api/capsules',
            //     headers: headers,
            // })
            //     .then((res) => {
            //         console.log(res.data)
            //     })

            getPills()
            console.log(status)
        } else {
            router.push('./staffLogin');
        }
    }, []);

    //根據display訪問 三種類型的表格，獲得3個數據

    return (
        <StaffInterfaceView {...{ status }} />
        )

}
