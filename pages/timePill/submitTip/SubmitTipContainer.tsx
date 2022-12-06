// import useAxios from 'axios-hooks';
import { FormEventHandler, useEffect, useState } from 'react';
// import Api from '../../apis';
import SubmitTipView from './SubmitTipView';
import { useRouter } from 'next/router';

// const apiSetting = new Api();
const testcapulse = {
    code: "099857",
    content:
        "https://m2mda.blob.core.windows.net/chyb-document-storage/366ae3cc-320b-43cb-a273-417e204d530d_image.png",
    deadline: "2022-12-09T00:00:00.000Z",
    email: "test@gmail.com",
    id: 23,
    name: "Siimy",
    remark: "",
}

export default function SubmitTipContainer() {
    const router = useRouter();
    const [information, setInfo] = useState({
        id: 0,
        deadline: '',
        email: '',
        content: '',
    })
    const [diff, setDiff] = useState(0)

    const calculate = (info: any) => {
        const now = new Date().toLocaleString('fr-CA', { timeZone: 'Asia/Taipei' }).split(' ')[0];
        const ddl = info.deadline.substr(0, 10);

        //计算日期差：
        const dateStart = new Date(now).getTime();
        let dateEnd = new Date(ddl).getTime();
        let diff = (dateEnd - dateStart) / (1000 * 60 * 60 * 24);
        info.deadline = ddl
        setDiff(diff)
        setInfo(info)
    }
    // interface裡的key還沒設置
    useEffect(() => {
        const info = localStorage.getItem('successfulInfo');
        if (info) {
            setInfo(JSON.parse(info))
            calculate(JSON.parse(info))

        } else {
            setInfo(testcapulse)
        }
        // localStorage.removeItem('successfulInfo');
        console.log('info-------------', info)
    }, []);




    return <SubmitTipView {...{ information, diff }} />; // 导出view 传入参数。
}
