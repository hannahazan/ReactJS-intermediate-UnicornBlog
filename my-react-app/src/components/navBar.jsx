import {Outlet,Link,} from 'react-router-dom'
import axios from "axios";
import React,{useEffect, useState} from "react";


const NavBar=()=> {
    useEffect(()=>{
        getPosts()
       },[])
    const [posts, setPosts]= useState([])
    const getPosts=()=>{
        return axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        .then((res)=>{
         setPosts(res.data)
        })
   }
   
   
    return(
        <div>
            <nav>
                <Link to='/UploadForm'>upload</Link>
                <Link to='/Gallery'>hello</Link>
                <div>logo</div>
            </nav>
            <Outlet />
            <div>
            search post
            <input type="text" />
            </div>
            <div>
                {posts.map((post)=>{
                
                
                    return (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <Link to={`/postDisplay/${post.id}`}>lien vers</Link>
                    </div>
                    )
                })}
                
            </div>
        </div>
    )
    
}

export default NavBar
