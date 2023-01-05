// https://github.com/baidu/mix-img 图片文字合成的库
import { FormEventHandler, useEffect, useState, useRef } from 'react';
// import Api from '../../apis';
import TableFillTextView from './TableFillTextView';
import { useRouter } from 'next/router';
import Api from '../../../apis';
import useAxios from 'axios-hooks';

// import imgSynthesis from './imgSynthesis';
// import {imgSynthesis} from 'img-synthesis/src/imgSynthesis';
const {imgSynthesis} =  require('img-synthesis/src/imgSynthesis');

const apiSetting = new Api(); //调用api设置

export default function TableFillTextContainer() {
    const router = useRouter();
    // const tableMode = router.query.mode
    const [SubmitLoading, setSubmitLoading] = useState(false)
    const [PillPreview, setPillPreview] = useState(false)
    const [PillText, setPillText] = useState('')
    const [PillImg, setPillImg] = useState('')
    const [{ data: uploadPillFormData }, uploadPillForm] = useAxios(
        {},
        { manual: true }
    );

    const canvasRef = useRef<HTMLCanvasElement | null>(null);


    // 图片+文字的合成
    useEffect(() => {
        const test = document.querySelector("#is") as HTMLImageElement | null;

        //设置宽高和背景颜色
        let is = new imgSynthesis(600, 400, "#0381ff");

    // * is.addTxt("文本1",100,100,{size:"30px",color:"#e3e3e3",align:"center",w:400})
        // 设置背景图
        is.addImg('../postcard.jpg', 0, 0).then(() => {
            //设置文字
            is.addTxt(PillText, 100, 100, JSON.parse(JSON.stringify({ color: "#223a70", w: 400})));
            // 导出生成的图片
            let img = new Image();
            img.src = is.getImg();
            if (test != null) {
                test.appendChild(img);
                setPillImg(img.src)
            }
        })




        // const canvas = canvasRef.current; //获取
        // if (!canvas) {
        //     return;
        // }
        // const ctx = canvas.getContext('2d'); // 转成canvas格式
        // if (!ctx) {
        //     return;
        // }
        // ctx.font = "20pt Arial";
        // ctx.fillStyle = 'blue';

        // // 处理换行：中文？英文？
        // ctx.fillText(PillText, 50, 50);

        // // 读取图片底的方法：
        // // const img = new Image();
        // // img.src = "../rella0.jpg";
        // // img.addEventListener("load", ()=>{
        // //     ctx.drawImage(img, 0,0,200,200);
        // //     const imgData = ctx.getImageData(10,20,80,200);
        // //     ctx.putImageData(imgData,260,0)
        // // })

        // // 转换成imga推送到服务器
        // setPillImg(canvas.toDataURL('image/jpeg', 0.9))
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

        //日期检测， 最里面才是跳转！
        let pillDDL = new Date(date)
        let nowDate = new Date(Date.parse(new Date().toString()))
        let diff = Math.floor(Math.abs(pillDDL.getTime() - nowDate.getTime()) / 1000 / 60 / 60 / 24)
        if (nowDate < pillDDL) {
            if (diff > 30) {
                alert("寄存日期超过了1个月！")
            } else {

                if (PillPreview) { // 如果已经是preview状态：传给server
                    // 模拟提交成功，做到网页之间的传参！
                    // if (router.pathname === '/timePill/tableFillHand') router.push('./submitTip');
                    // else router.reload();

                    // 正式链接：
                    const res = await uploadPillForm(apiSetting.PillForm.uploadPillForm(name, email, PillImg, tip, date));
                    if (res.data.success) {
                        console.log(res.data)
                        const info = res.data.doc.capsule;
                        localStorage.setItem('successfulInfo', JSON.stringify(info));
                        if (router.pathname === '/timePill/tableFillText') router.push('./submitTip');
                        else router.reload();
                    }
                } else { //如果还未预览则打开预览模式
                    setPillText(content)
                    setPillPreview(true)
                }
            }
        } else {
            alert("日期错误！")
        }
    };

    const cancelPreview = () => {
        setPillPreview(false)
        setPillText('')
    }



    return <TableFillTextView {...{ SubmitLoading, handleSubmit, canvasRef, PillPreview, cancelPreview }} />; // 导出view 传入参数。
}
