import Keywords from "./components/Keywords"
import { cookies } from "next/headers";
export default async function Home() {


  const response = await fetch("http://localhost:3000/api/keywords",{headers: { Cookie: cookies().toString() },});
  
  const data = await response.json();
  console.log(data);
  
  return (
    <>
      <Keywords data={data} />
    </>
  )
}
