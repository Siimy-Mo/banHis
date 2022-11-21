import { AxiosRequestConfig } from 'axios';

// apis/Authorization.ts
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default class FormSchema {
    signIn(email: string, password: string) {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/api/users/signin`,
            method: 'POST',
            data: {
                email,
                password
            }
        };
        return requestHeader;
    }

    signUp(email: string, name: string, password: string) {
        const requestHeader: AxiosRequestConfig = {
            baseURL: baseURL,
            url: `/api/users/signup`,
            method: 'POST',
            data: {
                email,
                name,
                password
            }
        };
        return requestHeader;
    }
}
