// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
// import Api from '../../apis';
import QueryView from './QueryView';
import { useRouter } from 'next/router';

export default function QueryContainer() {
    const router = useRouter();

    return <QueryView/>; // 导出view 传入参数。
}
