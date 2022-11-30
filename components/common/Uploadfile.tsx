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
    method: number;
}

function HeadNav(props: UploadingProps) {
    const { method = 0 } = props;

    // const project = (method: number) => {
    //     //這裡就要傳數據了！！，或者在table0裡【不建議】
    //     switch (method) {
    //         case 0:
    //             return table0();
    //         case 1:
    //             return table1();
    //         case 2:
    //             return table2();
    //         default:
    //             return <h1>No data</h1>
    //     }
    // }



    return (
        // <div>{project(method)}</div>
        <div>ghdhgd</div>
    );
}


export default HeadNav;
