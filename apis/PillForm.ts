// apis/Classification.ts
import { AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const baseURL2 = 'https://docai-dev.m2mda.com';

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

    queryPillStatus(code = "050363") {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            // url: `/api/capsules/search`,
            url: `/api/capsules/search?code=${code}`,
            method: 'GET',
            data: {
                code: "050363",
                
            }
        };
        return requestHeader;
    }

    searchDocumentByContent() {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL2,
            url: `/api/v1/search/documents/content`,
            method: 'GET'
        };
        return requestHeader;
    }
}
