import { QueryTable } from "../types/searchresult";

export default class FetchServiceClass {

    private headers;

    private baseURL;



    constructor(header: object) {
        this.headers = new Headers();
        for (const [key, value] of Object.entries(header)) {
            this.headers.append(key, value)
        }
        this.baseURL = process.env.REACT_APP_API_BASEURL;
    };

    async post(url: string, payload: object | FormData): Promise<any> {

        const body = (payload instanceof FormData) ? payload : JSON.stringify(payload)

        const response = await fetch(`${this.baseURL}/${url}`, { method: 'POST', headers: this.headers, body, redirect: 'follow' })
        
        return response.json()
    }

    async get(url: string, params: QueryTable | null): Promise<any> {

        url = `${this.baseURL}/${url}`;

        if (params) {
            const query = Object.entries(params).map(([key, value]) => {
                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
            }).join('&');

            url = `${url}?${query}`;
        }

        const response = await fetch(url, { method: 'GET', headers: this.headers });
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }

        return response.json()
    }

}
