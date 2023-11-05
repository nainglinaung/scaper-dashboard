export default class FetchServiceClass {

    private headers; 
    private baseURL;
    
    constructor(header: object) {
        this.headers = new Headers();
        for (const [key, value] of Object.entries(header)) {
            this.headers.append(key,value)
        }
        this.baseURL = process.env.REACT_APP_API_BASEURL;
    };

    async request(url: string, payload: object, method: string): Promise<any> {

        const response = await fetch(`${this.baseURL}/${url}`, { method, headers: this.headers, body: JSON.stringify(payload), redirect: 'follow' })
        
        return response.json()
    }
}

