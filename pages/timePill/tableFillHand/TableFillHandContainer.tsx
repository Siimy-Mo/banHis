// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
// import Api from '../../apis';
import TableFillHandView from './TableFillHandView';
import { useRouter } from 'next/router';

export default function TableFillHandContainer() {
    const router = useRouter();
    const tableMode = router.query.mode
    const [SubmitLoading, setSubmitLoading] = useState(false)
    // 预处理，处理接收到的mode模式，用于选择content type: textarea:input image
    // const [{ data: signInData, loading: signInLoading, error: signInError }, signIn] = useAxios(
    //     '',
    //     { manual: true }
    // );

    //父级的函数处理
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const date = formData.get('date');
        const content = formData.get('content') as string;
        const tip = formData.get('tip') as string;

        console.log('\nform中的内容：')
        console.log('【name, email, date】',name, email, date)
        console.log('【content, tip】',content, tip)

        setSubmitLoading(true);
        setTimeout(() => {
            setSubmitLoading(false)
            // console.log(router.pathname)
            // router.push('./submitTip');
            //     else router.reload();
        },1000)
        // 验证密码 -> 上传文件
        // const res = await signIn(apiSetting.Authorization.signIn(email, password));
        // if (res.data.success) {
        //     //if (res.headers.authorization) {
        //     const token = res.headers.authorization;
        //     localStorage.setItem('authorization', token);
        //     localStorage.setItem('email', email);
        //     if (remember) {
        //         const expiryDate = 'Fri, 31 Dec 9999 23:59:59 GMT'; // to be updated so that this can be dynamic
        //         document.cookie = `authorization=${escape(token)}; expires=${expiryDate}`;
        //     } else {
        //         document.cookie = `authorization=${escape(token)}`;
        //     }
        //     if (router.pathname === 'login') router.push('/');
        //     else router.reload();
        // } else {
        //     localStorage.removeItem('authorization');
        //     localStorage.removeItem('email');
        //     document.cookie = `authorization=null; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        // }
    };

    return <TableFillHandView {...{ tableMode, SubmitLoading, handleSubmit }} />; // 导出view 传入参数。
}
