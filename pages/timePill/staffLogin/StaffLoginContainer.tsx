// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
import Api from '../../../apis';
import StaffLoginView from './StaffLoginView';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';

const apiSetting = new Api();

export default function StaffLoginContainer() {
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
        const email = formData.get('email') as string;
        const name = formData.get('name') as string;
        const password = formData.get('password') as string;
        const code = formData.get('code') as string;

        if (code) { //如果code存在，說明是register，不存在則是登入
            // 判斷code是否正確
            if (code == 'yes') {

                const res = await signIn(apiSetting.Authorization.signUp(email, name, password));
                if (res.data.success) {
                    console.log(res.data)
                    const token = res.headers.authorization;
                    localStorage.setItem('authorization', token);
                    localStorage.setItem('email', email);
                    //自动点返回？弹窗成功先
                    router.reload();
                } else {
                    console.log(res.data)
                    localStorage.removeItem('authorization');
                    localStorage.removeItem('email');
                    document.cookie = `authorization=null; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
                }
            } else {
                alert('code錯誤!')
            }
        } else {//不存在則是登入界面
            const res = await signIn(apiSetting.Authorization.signIn(email, password));
            if (res.data.success) {
                console.log(res.data)
                const token = res.headers.authorization;
                localStorage.setItem('authorization', token);
                localStorage.setItem('email', email);
                if (router.pathname === '/timePill/staffLogin') router.push('./staffInterface');
                else router.reload();
            } else {
                console.log(res.data)

                localStorage.removeItem('authorization');
                localStorage.removeItem('email');
                document.cookie = `authorization=null; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
            }
        }
    }

    return <StaffLoginView {...{ handleSignIn }} />; // 导出view 传入参数。
}
