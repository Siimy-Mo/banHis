// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useRef } from 'react';
// import Api from '../../apis';
import CameraView from './CameraView';
import { useRouter } from 'next/router';

// const apiSetting = new Api();
const STORAGE_KEY = 'todo-P7oZi9sLs'

export default function CameraContainer() {
    const router = useRouter();


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


    return <CameraView {...{ }}/>; // 导出view 传入参数。
}
