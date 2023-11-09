import React from 'react'
import SearchService from '../services/search.services';
import { QueryTable } from '../types/searchresult';
export function useSearch(token: string) {
    
    const searchService = new SearchService(`Bearer ${token}`);
 
    const uploadFile = async (data: FormData) => {
        return searchService.uploadCSV(data).then((response) => {
            if (response.message) {
                return { message: response.message, showError: true }
            }
            return { showError: false }
        })
    }

    const loadData = async (cursor: QueryTable) => {
        return searchService.list(cursor);
    }


    return {uploadFile,loadData}

}
