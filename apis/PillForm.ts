// apis/Classification.ts
import { AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default class PillForm {
    uploadPillForm(name:string,email:string,content:any,remark:string,deadline:string) {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: '/api/capsules',
            method: 'POST',
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
        return requestHeader; //应该包含：成功状态，pill order
    }

    queryPillStatus(code:string) {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            // url: `/api/capsules/search`,
            url: `/api/capsules/search?code=${code}`,
            method: 'GET',
            data: {
                code,
                
            }
        };
        return requestHeader;
    }

}
