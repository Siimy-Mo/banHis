// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
// import Api from '../../apis';
import UpdateView from './UpdateView';
import { useRouter } from 'next/router';

export default function UpdateContainer() {
    const router = useRouter();

    return <UpdateView/>; // 导出view 传入参数。
}
