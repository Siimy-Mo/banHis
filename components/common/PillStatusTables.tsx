import { Fragment, useCallback, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

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

interface UploadingProps {
    display: number;
    pillData: {};
}

function HeadNav(props: UploadingProps) {
    const { display = 0, pillData={} } = props;

    const project = (display: number, pillData:{}) => {
        switch (display) {
            case 0:
                return table0(pillData);
            case 1:
                return table1(pillData);
            case 2:
                return table2(pillData);
            default:
                return <h1>No data</h1>
        }
    }

    return (
        <div>{project(display, pillData)}</div>
    );
}

const table0 =(pillData:{}) =>{
    return <div>0</div>
}

const table1 =(pillData:{}) =>{
    return <div>1</div>
}

const table2 =(pillData:{}) =>{
    return <div>2</div>
}

export default HeadNav;
