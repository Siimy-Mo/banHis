// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
// import Api from '../../apis';
import TableFillTextView from './TableFillTextView';
import { useRouter } from 'next/router';

export default function TableFillTextContainer() {
    const router = useRouter();
    const tableMode = router.query.mode
    const [SubmitLoading, setSubmitLoading] = useState(false)


    const GenerateImg = (content: string)=>{
        let img = new Image();
        
        // 将文字和图片合成并展示出来
        // 图片要设置跨域： crossOrigin:*, based64格式才可能绘制
        const dpr = window.devicePixelRatio?window.devicePixelRatio : 2;
        alert(img);

    }

    const postTo = ()=>{
        // post给服务器
    }
    
    //父级的函数处理
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const date = formData.get('date');
        const content = formData.get('content') as string;
        const tip = formData.get('tip') as string;

        // console.log('\nform中的内容：')
        // console.log('【name, email, date】',name, email, date)
        // console.log('【content, tip】',content, tip)
        GenerateImg(content);

        //将文字合成进图片
        // setSubmitLoading(true);
        // setTimeout(() => {
        //     setSubmitLoading(false)
        //     // console.log(router.pathname)
        //     // router.push('./submitTip');
        //     //     else router.reload();
        // },1000)
    };

    // 监视content内容的变化，并且绘制到canvas上，可能需要一个合成中的flag
    // useEffect(() => {
    //     setOpen(searchDocumentByContentLoading);
    // }, [searchDocumentByContentLoading]);

    return <TableFillTextView {...{ tableMode, SubmitLoading, handleSubmit }} />; // 导出view 传入参数。
}
