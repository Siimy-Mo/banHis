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
    const tableMode = router.query.mode
    const [SubmitLoading, setSubmitLoading] = useState(false)

    // 从api中获取信息，
    
    // const {response,loading,error} = useAxios(apiSetting.PillForm.queryPillStatus());
    
    // 第一次加载网页，需要识别authorization
    useEffect(() => {
        axios.get('https://futureword.m2mda.com/api/capsules/search?code=050363')
        // axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res) => {
        console.log(res)

        })
        // console.log(response)
    }, []);

    // 处理view中的 Form 元素
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

        // const res = await signIn(apiSetting.Authorization.signIn(email, password));

        alert(content);
    };



    // const updateLabelNameByIdHandler = useCallback(
    //     async (id: string, newName: string) => {
    //         updateLabelNameById({
    //             ...apiSetting.Tag.updateTagNameById(id),
    //             data: { name: newName }
    //         });
    //     },
    //     [updateLabelNameById]
    // );

    
    // 监视 content内容，如若不为空+success为真的时候，将内容更新到document，并且设置loading flag：open
    // useEffect(() => {
    //     if (searchDocumentByContentData && searchDocumentByContentData.success === true) {
    //         setDocuments(searchDocumentByContentData.documents);
    //         setOpen(false);
    //     }
    // }, [searchDocumentByContentData]);

    // loading 中的时候设置open
    // useEffect(() => {
    //     setOpen(searchDocumentByContentLoading);
    // }, [searchDocumentByContentLoading]);

    return <TableFillHandView {...{ tableMode, SubmitLoading, handleSubmit }} />; // 导出view 传入参数。
}
