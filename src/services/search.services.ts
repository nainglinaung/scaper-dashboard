import { QueryTable } from "../types/table";
import FetchService from "./fetch.service";

export default class SearchService {
    private fetchService;
    constructor(Authorization: string) {
        this.fetchService = new FetchService({ Authorization });
    }

    async list(query: QueryTable) {
        return this.fetchService.get("search-result", query);
    }

    // async register(credentials: Credentials) {
    //     return this.fetchService.get("auth/register");
    // }
}
