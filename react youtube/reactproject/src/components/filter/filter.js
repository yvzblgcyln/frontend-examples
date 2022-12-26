import {useState} from "react";
import Delete from "./delete"
import Filtered from "./filtered"

function Filter() {
    const [list, setList] = useState([  
        {name:"yavuz", age:15, id:1},
        {name:"bilge", age:18, id:2},
        {name:"ceylan", age:25, id:3}
    ]);

  return (
    <div>   
        <strong>not filtered:</strong> 
        {list.map((list)=>(
            <div key={list.id}>
                {list.name}: {list.age}
            </div>
        ))}<hr/>

        {/*props olarak filter işlem sonucu gönderme*/}
        <Filtered list={list.filter((filtered)=>filtered.name === "yavuz")}/>   
        <Filtered list={list.filter((filtered)=>filtered.name === "bilge")}/><hr/>

        {/*delete*/}
        <Delete list={list} setList={setList}/>

    </div>
  );
}

export default Filter