// @ts-nocheck
// https://github.com/baidu/mix-img 图片文字合成的库
import { FormEventHandler, useEffect, useState, useRef } from 'react';
import TableFillTextView from './TableFillTextView';
import { useRouter } from 'next/router';
import Api from '../../../apis';
import useAxios from 'axios-hooks';

// const imgSynthesis = require('./imgSynthesis'); 放在隔壁报错： Class constructor imgSynthesis cannot be invoked without 'new'
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
    // const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // 图片+文字的合成
    useEffect(() => {
        const test = document.querySelector("#is") as HTMLImageElement | null;

        //设置宽高和背景颜色
        let is = new imgSynthesis(600, 400, "#0381ff");

        // // 设置背景图
        is.addImg('../postcard.jpg', 0, 0).then(() => {
            //设置文字
            is.addTxt(PillText, 100, 100, JSON.parse(JSON.stringify({ color: "#223a70", w: 400 })));
            // 导出生成的图片
            let img = new Image();
            img.src = is.getImg();
            if (test != null) {
                test.appendChild(img);
                setPillImg(img.src)
            }
        })
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
    return <TableFillTextView {...{ SubmitLoading, handleSubmit, PillPreview, cancelPreview }} />; // 导出view 传入参数。
}


class imgSynthesis {
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    constructor(w = 640, h = 1236, bg = "") {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = w;
        this.canvas.height = h;
        if (bg != "") {
            this.ctx.fillStyle = bg;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    async addImgs(imgs) {
        //批量添加图片
        if (imgs != null) {
            for (let i of imgs) {
                await this.addImg(...i);
            }
        }
        return this
    };

    addTxt(text = "文本", x = 0, y = 0, opts = {}) {
        return new Promise(res => {
            this.setText();
            let { w = 156, h = 0, size = '24px', color = '#ffffff', writingMode = '', align = 'left' } = opts;
            this.ctx.font = size + "  Arial";
            this.ctx.textAlign = align;
            this.ctx.textBaseline = "top";
            this.ctx.fillStyle = color;
            if (writingMode == 'td') {
                this.ctx.fillTextVertical(String(text), x, y);
            } else {
                if (h == 0) {
                    h = parseInt(size.replace(/px/, ""))
                }
                this.ctx.wrapText(String(text), x, y, w, h);
            }
            res(this)
        })

    }

    addImg(src, x = 0, y = 0, opts = {}) {
        return new Promise((resolve, reject) => {
            let img_bg = new Image();
            img_bg.setAttribute('crossOrigin', 'anonymous');
            // console.log(src)
            if (src) {
                img_bg.onload = () => {
                    let { algin = 'l' } = opts;
                    if (algin == 'r') {
                        x = x - img_bg.width;
                    }

                    if (opts.w) {
                        this.ctx.drawImage(img_bg, x, y, opts.w, opts.h);
                    } else {
                        this.ctx.drawImage(img_bg, x, y);
                    }
                    resolve(this);
                }
                img_bg.src = src;
            } else {
                reject('缺少src参数');
            }
        })
    }

    getImg(str = '') {
        if (str != '') {
            return this.canvas.toDataURL(str);
        } else {
            return this.canvas.toDataURL();
        }
    }

    setText(): void {
        // canvas 文字换行
        CanvasRenderingContext2D.prototype.wrapText = function (
            text,
            x,
            y,
            maxWidth,
            lineHeight
        ) {
            if (typeof text != "string" || typeof x != "number" || typeof y != "number") {
                return;
            }
            const context = this;
            const canvas = context.canvas;
            if (typeof maxWidth == "undefined") {
                maxWidth = (canvas && canvas.width) || 300;
            }
            if (typeof lineHeight == "undefined") {
                lineHeight =
                    (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) ||
                    parseInt(window.getComputedStyle(document.body).lineHeight);
            }
            // 字符分隔为数组
            let arrText = text.split("");
            let line = "";
            for (let n = 0; n < arrText.length; n++) {
                const testLine = line + arrText[n];
                const metrics = context.measureText(testLine);
                const testWidth = metrics.width;
                if (testWidth > maxWidth && n > 0) {
                    context.fillText(line, x, y);
                    line = arrText[n];
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }
            context.fillText(line, x, y);
        };

        CanvasRenderingContext2D.prototype.fillTextVertical = function (text, x, y) {
            let context = this;
            let canvas = context.canvas;

            let arrText = text.split('');
            let arrWidth = arrText.map(function (letter) {
                return context.measureText(letter).width;
            });

            let align = context.textAlign;
            let baseline = context.textBaseline;

            if (align == 'left') {
                x = x + Math.max.apply(null, arrWidth) / 2;
            } else if (align == 'right') {
                x = x - Math.max.apply(null, arrWidth) / 2;
            }
            if (baseline == 'bottom' || baseline == 'alphabetic' || baseline == 'ideographic') {
                y = y - arrWidth[0] / 2;
            } else if (baseline == 'top' || baseline == 'hanging') {
                y = y + arrWidth[0] / 2;
            }

            context.textAlign = 'center';
            context.textBaseline = 'middle';

            // 开始逐字绘制
            arrText.forEach(function (letter, index) {
                // 确定下一个字符的纵坐标位置
                let letterWidth = arrWidth[index];
                // 是否需要旋转判断
                let code = letter.charCodeAt(0);
                if (code <= 256) {
                    context.translate(x, y);
                    // 英文字符，旋转90°
                    context.rotate(90 * Math.PI / 180);
                    context.translate(-x, -y);
                } else if (index > 0 && text.charCodeAt(index - 1) < 256) {
                    // y修正
                    y = y + arrWidth[index - 1] / 2;
                }
                context.fillText(letter, x, y);
                // 旋转坐标系还原成初始态
                context.setTransform(1, 0, 0, 1, 0, 0);
                // 确定下一个字符的纵坐标位置
                let letterWidth2 = arrWidth[index];
                y = y + letterWidth2;
            });
            // 水平垂直对齐方式还原
            context.textAlign = align;
            context.textBaseline = baseline;
        };
    }
}