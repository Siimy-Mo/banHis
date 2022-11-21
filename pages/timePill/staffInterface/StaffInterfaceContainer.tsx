// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
import Api from '../../../apis';
import StaffInterfaceView from './StaffInterfaceView';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';

const apiSetting = new Api();

export default function StaffInterfaceContainer() {
    const router = useRouter();

    const [{ data: signInData, loading: signInLoading, error: signInError }, signIn] = useAxios(
        '',
        { manual: true }
    );
    const [{ data: signUpData, loading: signUpLoading, error: signUpError }, signUp] = useAxios(
        '',
        { manual: true }
    );
    


    const handleSignIn: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('name') as string;
        const name = formData.get('name') as string;
        const password = formData.get('password') as string;
        const code = formData.get('code') as string;

        if (code) { //如果code存在，說明是register，不存在則是登入
            const res = await signIn(apiSetting.Authorization.signIn(email, password));
            if (res.data.success) {
                //if (res.headers.authorization) {
                const token = res.headers.authorization;
                localStorage.setItem('authorization', token);
                localStorage.setItem('email', email);
                if (code) {
                    const expiryDate = 'Fri, 31 Dec 9999 23:59:59 GMT'; // to be updated so that this can be dynamic
                    document.cookie = `authorization=${escape(token)}; expires=${expiryDate}`;
                } else {
                    document.cookie = `authorization=${escape(token)}`;
                }
                if (router.pathname === 'login') router.push('/');
                else router.reload();
            } else {
                localStorage.removeItem('authorization');
                localStorage.removeItem('email');
                document.cookie = `authorization=null; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
            }
        } else {//不存在則是登入界面
            const res = await signIn(apiSetting.Authorization.signUp(email,name, password));
            if (res.data.success) {
                //if (res.headers.authorization) {
                const token = res.headers.authorization;
                localStorage.setItem('authorization', token);
                localStorage.setItem('email', email);
                if (code) {
                    const expiryDate = 'Fri, 31 Dec 9999 23:59:59 GMT'; // to be updated so that this can be dynamic
                    document.cookie = `authorization=${escape(token)}; expires=${expiryDate}`;
                } else {
                    document.cookie = `authorization=${escape(token)}`;
                }
                if (router.pathname === 'login') router.push('/');
                else router.reload();
            } else {
                localStorage.removeItem('authorization');
                localStorage.removeItem('email');
                document.cookie = `authorization=null; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
            }

        }
    }

    return <StaffInterfaceView {...{handleSignIn}}/>; // 导出view 传入参数。
}
