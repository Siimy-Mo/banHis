// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
// import Api from '../../apis';
import StaffLoginView from './StaffLoginView';
import { useRouter } from 'next/router';

// const apiSetting = new Api();

export default function StaffLoginContainer() {
    const router = useRouter();

    useEffect(() => {
        localStorage.setItem('authorization', 'token');
        localStorage.setItem('email', 'email');
        document.cookie = `authorization=null; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        
        // if (router.pathname === 'login') router.push('/');
        // else router.reload();
    }, []);

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


    return <StaffLoginView />; // 导出view 传入参数。
}
