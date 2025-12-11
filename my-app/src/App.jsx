import { useState,useEffect } from 'react'
import Postlist from './components/Postlist';
export default function App(){
 const[allPosts , setAllpostd]=useState([]);
 const[currentPage , setCurrentPage]=useState(1);
 const pageSize=6;
const [loading , setloading]= useState(true);
const [startupload,setStartup]=useState(true)
 useEffect(()=>{
  const t = setTimeout(()=> setStartup(false),5000);
  return ()=>clearTimeout(t);
 },[]);
useEffect(()=>{
  async function load() {
    try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("api data --" , data)
    setAllpostd(data);
    setloading(false);
    
    }catch(err){
      console.log(err.message)
    }
  }
  load();
},[]);
const totalPages=Math.ceil(allPosts.length/pageSize) || 1;
const start = (currentPage -1)*pageSize;
const end=currentPage * pageSize;
const currentPost = allPosts.slice(start, end);
const removePost =(id)=>{
  const updated = allPosts.filter(p => p.id !==id);
  setAllpostd(updated);
  const newTotalPages = Math.ceil(updated.length/pageSize) || 1;
  if(currentPage > newTotalPages) setCurrentPage(newTotalPages);
}
if(startupload){
  return(
   <div className='flex items-center justify-center h-screen bg-gray-50'>
    <h1 className='text-xl animate-pulse'>loading---</h1>
  </div>)
}
if(loading){
  return(
  <div className='flex items-center justify-center h-screen bg-gray-50'>
    <h1 className='text-xl animate-pulse'>Fetching posts---</h1>
  </div>)
}

return(
  <div className='min-h-screen bg-red-100 p-8'>
    <Postlist
    posts ={currentPost}
    removePost ={removePost}
    currentPage ={currentPage}
    totalPages = {totalPages}
    goToPage ={setCurrentPage}
    />
  </div>
);
}

