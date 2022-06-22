import React, {useState} from "react"
const UploadForm =()=>{
    const[inputValue,setInputvalue]=useState("")
    return(
        <div>
            <form action="">
                <input type="text"/>
                <input type="text" onChange={event=>setInputvalue(event.target.value)}/>
                <p>{inputValue}</p>
            </form>
        </div>
    )
    
}

export default UploadForm