// import useAxios from 'axios-hooks';
// import { FormEventHandler, useEffect, useState } from 'react';
// import Api from '../../apis';
import LoginView from './LoginView';
import { useRouter } from 'next/router';

// const apiSetting = new Api();

export default function LoginContainer() {
    const router = useRouter();
    return <LoginView />; // 导出view 传入参数。
}
