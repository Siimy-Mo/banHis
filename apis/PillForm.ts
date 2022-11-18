// apis/Classification.ts
import { AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default class PillForm {
    uploadPillForm() {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: '/api/capsules',
            method: 'POST'

            // login api 中还多了: headers + data(传参过来 password: string)
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            // url: `/users/sign_in`,
            // method: 'POST',
            // data: {
            //     user: {
            //         email,
            //         password
            //     }
            // }
        };
        return requestHeader; //应该包含：成功状态，pill order
    }

    queryPillStatus(code: string) {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/api/capsules/search`,
            method: 'GET',
            data: {
                user: {
                    code,
                }
            }
        };
        return requestHeader;
    }
}
