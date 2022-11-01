// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
// import Api from '../../apis';
import LoginView from './LoginView';
import { useRouter } from 'next/router';
import { addListener } from 'process';

// const apiSetting = new Api();
const STORAGE_KEY = 'todo-P7oZi9sLs'

export default function LoginContainer() {
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
        alert(email+'\n 登入成功！'+router.pathname)

        if (router.pathname === '/timePill/login') router.push('/timePill');
        else router.reload();
        
        localStorage.setItem('authorization', email);

    };


    return <LoginView {...{ handleSignIn}}/>; // 导出view 传入参数。
}
