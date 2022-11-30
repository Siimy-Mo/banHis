// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
import Api from '../../../apis';
import StaffInterfaceView from './StaffInterfaceView';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';

const dataset0 = [21,6,10]; //目前的膠囊狀態：未到期 | 已到期 | 已完成

const dataset1 = [ //未到期 的膠囊狀態：膠囊編號 | 到期日期
    { number: '123456', ddl: '12/21', },
    { number: '654321', ddl: '12/21' },
];
const dataset2 = [//已到期 的膠囊狀態：膠囊編號 | 到期日期 | 是否通知
    { number: '123456', ddl: '12/21', status:'uncall'},
    { number: '654321', ddl: '12/21', status:'called'},
];
const dataset3 = [//已完成 的膠囊狀態：膠囊編號 | 到期日期 | 完成方式
    { number: '123456', ddl: '12/21', method:'Expired'},
    { number: '654321', ddl: '12/21', method:'Finished'},
];

const apiSetting = new Api();

export default function StaffInterfaceContainer() {

    // const [{ data: getTagByTaggingData }] = useAxios(apiSetting.Tag.getTagByTagging(), {
    //     manual: false
    // }); //getTagByTaggingData 傳走
    const current = dataset0

    useEffect(() => {
    }, []);//訪問dataset0，返回所有膠囊狀態（數字）


    return <StaffInterfaceView {...{current}}/>; // 导出view 传入参数。
}
