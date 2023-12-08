/* eslint-disable react-hooks/rules-of-hooks */
import AddNewKeyword from '@/app/components/AddNewKeyword'
import React from 'react'
import { revalidatePath } from 'next/cache';
import { cookies } from "next/headers";
function page() {


  const handleSubmit = async (prevState: any, formData: FormData) => { 
    "use server"
    const keyword = formData.get("keyword");
    const body = await fetch("http://localhost:3000/api/keywords", {
      method: "POST",
      headers: { Cookie: cookies().toString() },
      body: JSON.stringify({ name: keyword }),
    });
 
    if (body.status !== 200) {
      return "error"
    }
    revalidatePath("/")
    return "success"
  }
  

  return (
    <>
      <AddNewKeyword handleSubmit={handleSubmit} />
    </>
  )
}

export default page