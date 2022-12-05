// apis/Classification.ts
import { AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 记得加 token！
// Content-Type application/json
// Authorization Bearer qVnrDugnY73BRSz_oZSX
export default class PillStatus {
    getAllPills(){
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer qVnrDugnY73BRSz_oZSX',
            },
            url: `/api/capsules/status=finish`,
            method: 'GET',
        };
        return requestHeader;
    }

    sendEmail_confirm(code:string){
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/api/capsules/${code}/send_email`,
            method: 'POST',
        };
        return requestHeader;
    }
    sendEmail_inform(code:string){
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/api/capsules/${code}/send_email`,
            method: 'POST',
        };
        return requestHeader;
    }
    
    queryPillStatus(code:string) {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/api/capsules/search?code=${code}`,
            method: 'GET',
            data: {
                code,
                
            }
        };
        return requestHeader;
    }

}
