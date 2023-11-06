import React, { useCallback, useEffect, useState } from 'react'
import AuthProvider from '../providers/Auth'
import { useNavigate, useParams } from 'react-router'
import { useCookies } from 'react-cookie';
import { TableData } from '../types/searchresult';
import SearchServiceClass from '../services/search.services';
import { Card, CardHeader } from '@material-tailwind/react';


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
        <AuthProvider><Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{data.keyword}</h2>
            </CardHeader>

            <ul>
                <li>adswords_count - {data.adswords_count}</li>
                <li>link_count - {data.link_count}</li>
                <li>total_search_result_for_keyword - {data.total_search_result_for_keyword}</li>
            </ul>
            <div dangerouslySetInnerHTML={{ __html: data.raw_html }} />
        </Card></AuthProvider>
    )
}

export default Single