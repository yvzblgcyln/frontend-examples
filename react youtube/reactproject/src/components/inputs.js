import React, { useState } from 'react'
import {useHistory} from "react-router-dom"

function Inputs() {
    const[title, setTitle]= useState("");
    const[body, setBody] = useState("");
    const[content, setContent] = useState("");
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent page refreshing
        const blog={title, body, content};
        setIsPending(true);

        fetch("http://localhost:8000/data",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new added");
            setIsPending(false);
            //history.go(-1);
            history.push("/"); //redirecting
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                typeof='text'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            
            <select value={body} onChange={(e)=>setBody(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>

            {!isPending && <button> add button </button>}
            {isPending && <button> addding button... </button>}

            <div>title: {title}</div>            
            <div>user: {body}</div>
        </form>        
    </div>
  )
}

export default Inputs