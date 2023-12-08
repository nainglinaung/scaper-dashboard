import React from 'react'


interface keyword {
  id: string
  adswords_count:number
  keyword:string
  link_count:number
  total_search_result_for_keyword:string
  scraping_status:string
  createdAt: Date 
  updatedAt:Date
  // user                            User     @relation(fields: [userId], references: [id])
  // createdAt                       DateTime @default(now())
  // updatedAt                       DateTime @updatedAt
}

interface Props {
  data: keyword[] 
}


function Keywords({ data }: Props) {
  return (
    <><div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Ads Word Count</th>
          <th>Keyword</th>
          <th>Link Count</th>
          <th>Total Search Result for Keyword</th>  
          <th>Status</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
        <tbody>
          {data.map((keyword) => 
            <tr key={keyword.id}>
              <th>{keyword.id}</th>
              <td>{keyword.adswords_count}</td>
              <td>{keyword.keyword}</td>
              <td>{keyword.link_count}</td>
              <td>{keyword.total_search_result_for_keyword}</td>
              <td>{keyword.scraping_status}</td>
              <td>{keyword.createdAt}</td>
              <td>{keyword.updatedAt}</td>
              
            </tr>
          
          )}
       </tbody>
    </table>
  </div></>
  )
}

export default Keywords