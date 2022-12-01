// apis/Classification.ts
import { AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default class PillStatus {
    allPills(){
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            // url: `/api/capsules/search`,
            url: `/api/capsules`,
            method: 'GET',
        };
        return requestHeader;
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
