// apis/Classification.ts
import { AxiosRequestConfig } from 'axios';
import { stat } from 'fs';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 记得加 token！
// Content-Type application/json
// Authorization Bearer qVnrDugnY73BRSz_oZSX
export default class PillStatus {
    getAllPills(headers:any){
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            headers:headers,
            url: `/api/capsules`,
            method: 'GET',
        };
        return requestHeader;
    }

    getAllPillsWithStatus(headers:any, status: string|'received'){
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            headers:headers,
            url: `/api/capsules?${status}`,
            method: 'GET',
        };
        return requestHeader;
    }

    sendEmailConfirm(code:string){
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/api/capsules/${code}/send_email`,
            method: 'POST',
        };
        return requestHeader;
    }
    sendEmailInform(code:string){
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
