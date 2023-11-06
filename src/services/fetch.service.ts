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

    async post(url: string, payload: object): Promise<any> {

        const response = await fetch(`${this.baseURL}/${url}`, { method: 'POST', headers: this.headers, body: JSON.stringify(payload), redirect: 'follow' })

        return response.json()
    }

    async get(url: string): Promise<any> {

        const response = await fetch(`${this.baseURL}/${url}`, { method: 'GET', headers: this.headers });
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }
        return response.json()
    }

}
