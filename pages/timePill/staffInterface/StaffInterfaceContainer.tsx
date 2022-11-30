// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
import Api from '../../../apis';
import StaffInterfaceView from './StaffInterfaceView';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';

const apiSetting = new Api();

export default function StaffInterfaceContainer() {
    const router = useRouter();

    
    return <StaffInterfaceView {...{}}/>; // 导出view 传入参数。
}
