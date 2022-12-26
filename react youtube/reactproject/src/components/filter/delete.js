import React from 'react'

function Delete({list,setList}) {

  const handleDelete = (id) => {
    const newList = list.filter(list => list.id !== id);
    setList(newList);
}
  return (
    <div>   
        <strong> delete list: </strong> 

        {list.map((list)=>(
            <div key={list.id}>
                {list.name}: {list.age}
                <button onClick={()=>handleDelete(list.id)}> delete </button>
            </div>
        ))}
    </div>
  )
}

export default Delete