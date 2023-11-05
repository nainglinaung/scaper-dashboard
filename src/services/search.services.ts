import { Credentials } from "../types/credentials";
import  FetchService  from "./fetch.service";

export class SearchService {
    private fetchService;
    constructor(Authorization:object) {
        this.fetchService = new FetchService({Authorization});
    }

    async login(credentials: Credentials) {
        return this.fetchService.request("auth/login", credentials, 'POST');
    }

    async register(credentials: Credentials) {
        return this.fetchService.request("auth/register", credentials, 'POST');
    }
}
