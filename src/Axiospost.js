import axios from 'axios';
import React, { useRef } from 'react'

const AxiosPost = () => {
     let  id="";
    const bookIdRef=useRef(null);
    const bookTitleRef=useRef(null);
    const bookAuthorRef=useRef(null);
  const handlePost= async()=>{
    const data={
        id:id,
        name:bookIdRef.current.value,
        email:bookTitleRef.current.value,
        password:bookAuthorRef.current.value
    };
    
       try {
        const response=await axios.post("http://localhost:8080/users",data);
        console.log(response)
       } catch (error) {
        console.log(error)
       }
    

  }
  return (
    <div>

        <input type='text' ref={bookIdRef}/>
        <input type='text' ref={bookTitleRef}/>
        <input type='text' ref={bookAuthorRef}/>
        <button onClick={handlePost}>Post</button>
    </div>
  )
}

export default AxiosPost