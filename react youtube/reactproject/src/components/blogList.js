import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({list}) {
  return (
    <div> 
        <strong>json id link</strong>   

        {list && list.map((data)=>(
        <div key={data.id}>
            <Link to={`blog/${data.id}`}>
                <div>title: {data.title} / body: {data.body} / id: {data.id}</div>
            </Link>
        </div>
         ))}
    </div>
  )
}

export default BlogList