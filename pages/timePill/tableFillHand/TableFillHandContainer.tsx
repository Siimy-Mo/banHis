// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
import TableFillHandView from './TableFillHandView';
import { useRouter } from 'next/router';
import Api from '../../../apis';
import useAxios from 'axios-hooks';
import axios from 'axios';

const apiSetting = new Api(); //调用api设置
// notification 参考：https://kalacloud.com/blog/best-react-notification-message-libraries/

export default function TableFillHandContainer() {
    const router = useRouter();
    const [SubmitLoading, setSubmitLoading] = useState(false)
    const [{ data: uploadPillFormData }, uploadPillForm] = useAxios(
        {},
        { manual: true }
    );


    // 处理view中的 Form 元素
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const content = formData.get('content');
        const tip = formData.get('tip') as string;
        const date = formData.get('date') as string;

        // 模拟提交成功，做到网页之间的传参！
        // if (router.pathname === '/timePill/tableFillHand') router.push('./submitTip');
        // else router.reload();

        // 正式链接：
        const res = await uploadPillForm(apiSetting.PillForm.uploadPillForm(name, email,content,tip,date));
        if (res.data.success) {
            console.log(res.data)
            const token = res.headers.authorization;
            // localStorage.setItem('authorization', token);
            // localStorage.setItem('email', email);
            // if (remember) {
            //     const expiryDate = 'Fri, 31 Dec 9999 23:59:59 GMT'; // to be updated so that this can be dynamic
            //     document.cookie = `authorization=${escape(token)}; expires=${expiryDate}`;
            // } else {
            //     document.cookie = `authorization=${escape(token)}`;
            // }
            if (router.pathname === '/timePill/tableFillHand') router.push('./submitTip');
            else router.reload();
        } else {

        }

    };
    return <TableFillHandView {...{ SubmitLoading, handleSubmit }} />; // 导出view 传入参数。
}
