// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState, useRef } from 'react';
// import Api from '../../apis';
import TableFillTextView from './TableFillTextView';
import { useRouter } from 'next/router';
import axios from 'axios';

// 用于文本换行的扩展js代码：https://www.zhangxinxu.com/wordpress/2018/02/canvas-text-break-line-letter-spacing-vertical/

export default function TableFillTextContainer() {
    const router = useRouter();
    // const tableMode = router.query.mode
    const [SubmitLoading, setSubmitLoading] = useState(false)
    const [PillPreview, setPillPreview] = useState(false)
    const [PillText, setPillText] = useState('')
    const [PillImg, setPillImg] = useState('')


    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // 图片+文字的合成
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        ctx.font = "20pt Arial";
        ctx.fillStyle = 'blue';

        // 处理换行：中文？英文？
        ctx.fillText(PillText, 50, 50);
        
        // 读取图片底的方法：
        // const img = new Image();
        // img.src = "../rella0.jpg";
        // img.addEventListener("load", ()=>{
        //     ctx.drawImage(img, 0,0,200,200);
        //     const imgData = ctx.getImageData(10,20,80,200);
        //     ctx.putImageData(imgData,260,0)
        // })

        // 转换成imga推送到服务器
        setPillImg(canvas.toDataURL('image/jpeg',0.9))
    }, [PillText])



    //父级的函数处理
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const date = formData.get('date') as string;
        const content = formData.get('content') as string;
        const tip = formData.get('tip') as string;

        // let pillDDL = new Date(date)
        // let nowDate = new Date(Date.parse(new Date().toString()))
        // let diff = Math.floor(Math.abs(pillDDL.getTime() - nowDate.getTime()) / 1000 / 60 / 60 / 24)
        // if (pillDDL < pillDDL) {
        //     if (diff > 30) {
        //         alert("寄存日期超过了1个月！")
        //     } else {

        //         // 正式链接：
        //         const imgdata = await convertBase64(content);
        //         const res = await uploadPillForm(apiSetting.PillForm.uploadPillForm(name, email, imgdata, tip, date));
        //         if (res.data.success) {
        //             console.log(res.data)
        //             const info = res.data.doc.capsule;
        //             localStorage.setItem('successfulInfo', JSON.stringify(info));
        //             if (router.pathname === '/timePill/tableFillHand') router.push('./submitTip');
        //             else router.reload();
        //         }
        //     }
        // } else {
        //     alert("日期错误！")
        // }

        if (PillPreview) { // 如果已经是preview状态：传给server
            // 模拟提交成功，做到网页之间的传参！
            if (router.pathname === '/timePill/tableFillHand') router.push('./submitTip');
            else router.reload();
            
            // 正式链接：
            // const res = await uploadPillForm(apiSetting.PillForm.uploadPillForm(name, email,PillImg,tip,date));
            // if (res.data.success) {
            //     console.log(res.data)
            //     const token = res.headers.authorization;
            //     // localStorage.setItem('authorization', token);
            //     // localStorage.setItem('email', email);
            //     // if (remember) {
            //     //     const expiryDate = 'Fri, 31 Dec 9999 23:59:59 GMT'; // to be updated so that this can be dynamic
            //     //     document.cookie = `authorization=${escape(token)}; expires=${expiryDate}`;
            //     // } else {
            //     //     document.cookie = `authorization=${escape(token)}`;
            //     // }
            //     if (router.pathname === '/timePill/tableFillHand') router.push('/submitTip');
            //     else router.reload();
            // }
        } else { //如果还未预览则打开预览模式
            setPillText(content)
            setPillPreview(true)
        }
    };


    const cancelPreview = () => {
        setPillPreview(false)
        setPillText('')
    }

    return <TableFillTextView {...{ SubmitLoading, handleSubmit, canvasRef, PillPreview, cancelPreview }} />; // 导出view 传入参数。
}
