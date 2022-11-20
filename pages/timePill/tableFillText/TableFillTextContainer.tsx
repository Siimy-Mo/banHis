// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState, useRef } from 'react';
// import Api from '../../apis';
import TableFillTextView from './TableFillTextView';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function TableFillTextContainer() {
    const router = useRouter();
    // const tableMode = router.query.mode
    const [SubmitLoading, setSubmitLoading] = useState(false)
    const [PillPreview, setPillPreview] = useState(false)
    const [PillText, setPillText] = useState('')


    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        ctx.font = "14pt Arial";
        ctx.fillStyle='blue';
        ctx.fillText(PillText,100,100);
    },[PillText])


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

        if(PillPreview){ // 如果已经是preview状态：传给server
            alert('传数据给server！')
        } else { //如果还未预览则打开预览模式
            setPillText(content)
            setPillPreview(true)

        }

        // console.log('\nform中的内容：')
        // console.log('【name, email, date】',name, email, date)
        // console.log('【content, tip】',content, tip)

        //将文字合成进图片
        // setSubmitLoading(true);
        // setTimeout(() => {
        //     setSubmitLoading(false)
        //     // console.log(router.pathname)
        //     // router.push('./submitTip');
        //     //     else router.reload();
        // },1000)
    };


    const cancelPreview =()=>{
        setPillPreview(false)
        setPillText('')
    }

    return <TableFillTextView {...{ SubmitLoading, handleSubmit, canvasRef, PillPreview, cancelPreview }} />; // 导出view 传入参数。
}
