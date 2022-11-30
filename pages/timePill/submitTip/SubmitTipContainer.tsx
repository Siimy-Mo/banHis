// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useContext } from 'react';
// import Api from '../../apis';
import SubmitTipView from './SubmitTipView';
import { useRouter } from 'next/router';

// const apiSetting = new Api();
const STORAGE_KEY = 'todo-P7oZi9sLs'

export default function SubmitTipContainer() {
    const router = useRouter();

    // interface裡的key還沒設置
    useEffect(() => {

    }, []);




    return <SubmitTipView {...{ }}/>; // 导出view 传入参数。
}
