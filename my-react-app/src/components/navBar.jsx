import {Outlet,Link, useParams} from 'react-router-dom'
import axios from "axios";
import React,{useEffect, useState} from "react";

const entirePost=""

const NavBar=()=> {
    useEffect(()=>{
        getPosts()
       },[])
    const [posts, setPosts]= useState([])
    const [id,setId] = useState([])
    const getPosts=()=>{
        return axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        .then((res)=>{
         setPosts(res.data)
        })
   }
   
   console.log(posts)
   
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
                    const params=post.id
                   
                        return (
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                            <Link to="/postDisplay/">lien vers</Link>
                        </div>
                        )
                    })}
                    
               </div>
            </div>
        )
    
}

export default NavBar
