import React, { useCallback, useEffect, useState } from 'react'
import AuthProvider from '../providers/Auth'
import { useNavigate, useParams } from 'react-router'
import { useCookies } from 'react-cookie';
import { TableData } from '../types/searchresult';
import SearchServiceClass from '../services/search.services';


function Single() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState<TableData>({
        keyword: "",
        id: "",
        adswords_count: "",
        link_count: "",
        total_search_result_for_keyword: "",
        raw_html: "",
    });
    const [cookie, , removeCookie] = useCookies(['accessToken']);
    const LoadData = useCallback(() => {
        const searchService = new SearchServiceClass(`Bearer ${cookie.accessToken}`);

        if (id) {
            searchService.getDetails(id).then((data: TableData) => {
                setData(data);
            }).catch((error) => {
                if (error.message === 'HTTP status 401') {
                    removeCookie("accessToken", { path: '/' });
                    navigate('/login')
                }
            })
        } else {
            navigate('/')
        }

    }, [cookie.accessToken, navigate, removeCookie])


    useEffect(() => {
        LoadData()
    }, [])


    return (
        <AuthProvider><div>
            <h2>{data.keyword}</h2>
            <div>
                <ul>
                    <li>adswords_count - {data.adswords_count}</li>
                    <li>link_count - {data.link_count}</li>
                    <li>total_search_result_for_keyword - {data.total_search_result_for_keyword}</li>
                </ul>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: data.raw_html }} />
            </div>
        </div></AuthProvider>
    )
}

export default Single