import React from 'react'

function Filtered({list}) {
  return (
    <div>   
        <strong>filtered:</strong> 
        {list.map((list)=>(
            <div key={list.id}>
                {list.name}: {list.age}
            </div>
        ))}

    </div>
  )
}

export default Filtered