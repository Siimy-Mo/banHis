// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
// import Api from '../../apis';
import TableFillView from './TableFillView';
import { useRouter } from 'next/router';

export default function TableFillContainer() {
    const router = useRouter();
    const tableMode = router.query.mode

    // 预处理，处理接收到的mode模式，用于选择content type: textarea:input image
    useEffect(() => {
        // let params = router.currentRoute.value.query
    }, [router]);

        //父级的函数处理
    const handleSignIn: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('username') as string;
        const password = formData.get('password') as string;
        // const remember = formData.get('remember');
        alert(email+'\n 登入成功！')

        if (router.pathname === '/login') router.push('/');
        else router.reload();
        
        localStorage.setItem('authorization', email);

    };


    return <TableFillView {...{ tableMode,handleSignIn}}/>; // 导出view 传入参数。
}
