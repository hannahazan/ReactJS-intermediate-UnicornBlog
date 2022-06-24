import axios from "axios";
import {useParams} from 'react-router-dom'
import React,{useEffect, useState} from "react";



const PostsDisplay= ()=>{
    const{id}=useParams()
    console.log(id)
    useEffect(()=>{
        getOnePosts()
       },[])
    const [onePost, setOnePost]= useState([])
    const getOnePosts=()=>{
        return axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>{
         setOnePost(res.data)
        })
   }
   useEffect(()=>{
    getComments()
   },[])
   const[comments,setComments]=useState([])
   const getComments=()=>{
    return axios
    .get(`https://jsonplaceholder.typicode.com/comments/`)
    .then((res)=>{
     setComments(res.data)
    })
   }
console.log(comments)
    return(
        <div>
                <div>
                    <h1>{onePost.title}</h1>
                    <p>{onePost.body}</p>
                </div>
          </div>
    )
}

export default PostsDisplay