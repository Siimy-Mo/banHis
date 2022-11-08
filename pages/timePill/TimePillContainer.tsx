// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
import TimePillView from './TimePillView';
import { useRouter } from 'next/router';

export default function TimePillContainer() {
    const router = useRouter();
    const [mode, setMode] = useState(true)

    const handMode = () => {
        // 判定当前是否是手写扫描模式
        if (mode === true) return
        setMode(true)
    };
    
    const scanMode = () => {
        // 判定当前是否是电子填表模式
        if (mode === false) return
        setMode(false)
    };

    //简单一个函数就行了，不需要提交所以不用handle
    const goTableFill= () => {
        router.push({
            pathname: './timePill/tableFill',
            query: { mode: mode },
        })
    }


    return <TimePillView {...{ mode, handMode,scanMode,goTableFill}}/>; // 导出view 传入参数。
}
