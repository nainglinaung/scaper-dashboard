import Keywords from "./components/Keywords"
import { cookies } from "next/headers";
export default async function Home() {



  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/keywords", { headers: { Cookie: cookies().toString() }, });
     
      if (response.status === 200) { 
        return response.json();
      }
      return [];
  
    } catch(error) {
      console.log(error);
      return [];
    }
  }

  const data = await loadData();

  
  return (
    <>
      <Keywords data={data} />
    </>
  )
}
