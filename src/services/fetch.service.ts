const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function FetchService(url: string, payload: object, method: string) {
  
    const response = await fetch(`${process.env.REACT_APP_API_BASEURL}/${url}`, {
        method,
        headers,
        body: JSON.stringify(payload),
        redirect: 'follow'
    });
    console.log(response)

    return response.json()
}
