
import axios from "axios";
import React,{useEffect, useState} from "react";

const Gallery= ()=>{
    useEffect(()=>{
        getImage()
       },[])
    const [images, setImages]= useState([])
    const getImage=()=>{
        return axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{
        setImages(res.data)})
        .catch((err)=>console.error(err))
   }
   
  
        return(
           <div>
                <div>
                    <h1>Telo</h1>
                    {images.map((image)=>{
                        return (
                        <img src={image.url} alt="" key={image.id} />
                        )
                    })}
                </div>
          </div>
        )
    
}

export default Gallery