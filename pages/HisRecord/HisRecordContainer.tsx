// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect } from 'react';
// import Api from '../../apis';
import LoginView from './HisRecordView';
import { useRouter } from 'next/router';

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


    // 子组件需要的逻辑
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


    return <LoginView {...{ handleSignIn}}/>; // 导出view 传入参数。
}
