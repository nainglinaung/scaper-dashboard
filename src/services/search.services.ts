import { Credentials } from "../types/credentials";
import  FetchService  from "./fetch.service";

export default class SearchService {
    private fetchService;
    constructor(Authorization:string) {
        this.fetchService = new FetchService({Authorization});
    }

    async list() {
        return this.fetchService.get("search-result");
    }

    async register(credentials: Credentials) {
        return this.fetchService.get("auth/register");
    }
}
