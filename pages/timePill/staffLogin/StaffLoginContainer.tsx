// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
import Api from '../../../apis';
import StaffLoginView from './StaffLoginView';
import { useRouter } from 'next/router';
import useAxios from 'axios-hooks';

const apiSetting = new Api();

export default function StaffLoginContainer() {
    const router = useRouter();
    const [success, setSuccess] = useState('')
    const [register, setRegister] = useState(false)
    const [{ data: signInData }, signIn] = useAxios(
        '',
        { manual: true }
    );
    const [{ data: signUpData, loading: signUpLoading, error: signUpError }, signUp] = useAxios(
        // const [{ data: signUpData, loading: signUpLoading, error: signUpError }, signUp] = useAxios(
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
                const res = await signUp(apiSetting.Authorization.signUp(email, name, password));
                if (res.data.success) {
                    setSuccess(res.data.success)
                    // console.log(res.data)
                    const token = res.data.doc.user.authentication_token;
                    localStorage.setItem('authorization', token);
                    localStorage.setItem('email', email);
                    router.reload();
                } else {
                    console.log(res.data.error)
                    if(res.data.error.email){
                    setSuccess('email taken')
                    // console.log(res.data.error.email)
                    } else {
                    setSuccess('password too short')
                    // console.log(res.data.error.password)
                    }
                    localStorage.removeItem('authorization');
                    localStorage.removeItem('email');
                    document.cookie = `authorization=null; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
                }
                // console.log(res.data)
            } else {
                alert('code錯誤!')
            }
        } else {//不存在則是登入界面
            const res = await signIn(apiSetting.Authorization.signIn(email, password));

            if (res.data.success) {
                setSuccess(res.data.success)
                const token = res.data.doc.user.authentication_token;
                localStorage.setItem('authorization', token);
                localStorage.setItem('email', email);
                if (router.pathname === '/timePill/staffLogin') router.push('./staffInterface');
                else router.reload();
            } else {
                // console.log('handleSignIn', signInData)
                setSuccess(res.data.success)

                localStorage.removeItem('authorization');
                localStorage.removeItem('email');
                document.cookie = `authorization=null; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
            }
        }
    }


    useEffect(() => {
        setSuccess('')
    }, [register])


    return <StaffLoginView {...{ success, register, setRegister, handleSignIn }} />; // 导出view 传入参数。
}
