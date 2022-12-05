// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
import Api from '../../../apis';
import StaffInterfaceView from './StaffInterfaceView';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const dataset0 = [
    { num: 21 },
    { num: 6 },
    { num: 10 }
]; //目前的膠囊狀態：未到期 | 已到期 | 已完成


const apiSetting = new Api();


export default function StaffInterfaceContainer() {
    const router = useRouter();
    // const [{ data: allPillsData}, getAllPills] = useAxios(
    //     apiSetting.PillStatus.getAllPills(),
    //     // '',
    //     { manual: false }
    // );


    // const [{ data: getTagByTaggingData }] = useAxios(apiSetting.Tag.getTagByTagging(), {
    //     manual: false
    // }); //getTagByTaggingData 傳走

    const current = dataset0;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer qVnrDugnY73BRSz_oZSX',
    };

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
            //     url: 'https://futureword.m2mda.com/api/capsules/status=finish',
            //     headers: headers,
            // })
            //     .then((res) => {
            //         console.log(res.data)
            //     })
        } else {
            router.push('./staffLogin');
        }
    }, []);

    // useEffect(() => {
    //     // console.log('allPillsData', allPillsData)
    // }, [allPillsData]);//訪問dataset0，返回所有膠囊狀態（數字）


    //根據display訪問 三種類型的表格，獲得3個數據

    return <StaffInterfaceView {...{ current }} />; // 导出view 传入参数。
}
