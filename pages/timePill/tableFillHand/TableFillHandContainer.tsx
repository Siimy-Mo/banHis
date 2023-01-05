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

        let pillDDL = new Date(date)
        let nowDate = new Date(Date.parse(new Date().toString()))
        let diff = Math.floor(Math.abs(pillDDL.getTime() - nowDate.getTime()) / 1000 / 60 / 60 / 24)
        if (nowDate < pillDDL) {
            if (diff > 30) {
                alert("寄存日期超过了1个月！")
            } else {
                // 正式链接：
                const imgdata = await convertBase64(content);
                // console.log(imgdata)
                const res = await uploadPillForm(apiSetting.PillForm.uploadPillForm(name, email, imgdata, tip, date));
                if (res.data.success) {
                    console.log(res.data)
                    const info = res.data.doc.capsule;
                    localStorage.setItem('successfulInfo', JSON.stringify(info));
                    if (router.pathname === '/timePill/tableFillHand') router.push('./submitTip');
                    else router.reload();
                }
            }
        } else {
            alert("日期错误！")
        }
    };

    const convertBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }
    return <TableFillHandView {...{ SubmitLoading, handleSubmit }} />; // 导出view 传入参数。
}
