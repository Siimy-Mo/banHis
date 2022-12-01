// apis/Classification.ts
import { AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default class PillForm {
    uploadPillForm(name:string,email:string,content:any,remark:string,deadline:string) {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: '/api/capsules',
            method: 'POST',
            // headers:{
            //     "Content-Type":"multipart/form-data",
            // },
            data: {
                capsule: {
                    name,
                    email,
                    content,
                    remark,
                    deadline
                }
            }
        };
        return requestHeader; 
    }
}
