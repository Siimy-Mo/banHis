// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
// import Api from '../../apis';
import StaffLoginView from './StaffLoginView';
import { useRouter } from 'next/router';

// const apiSetting = new Api();

export default function StaffLoginContainer() {
    const router = useRouter();

    // 用户状态是每次访问都要重新输入的
    useEffect(() => {

    }, []);

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
    };


    return <StaffLoginView {...{handleSubmit}}/>; // 导出view 传入参数。
}
