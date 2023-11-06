import { QueryTable } from "../types/searchresult";
import FetchService from "./fetch.service";

export default class SearchService {
    private fetchService;
    constructor(Authorization: string) {
        this.fetchService = new FetchService({ Authorization });
    }

    async list(query: QueryTable) {
        return this.fetchService.get("search-result", query);
    }

    async getDetails(id: string) {
        return this.fetchService.get(`search-result/${id}`, null);
    }

    async uploadCSV(data: FormData) {
        return this.fetchService.post('search-result/upload-csv', data);
    }
}
