import {useState} from 'react'

function Map() {

    const [blogs, setBlogs] = useState([
        {name:"yavuz", age:15, id:1},
        {name:"bilge", age:18, id:2},
        {name:"ceylan", age:25, id:3}
    ]);

    const handleClick = () => {
        setBlogs([...blogs, {name:"xxx", age:32, id:4}]);
    }

  return (
    <div>
        {blogs.map((blg)=>(
                <div key={blg.id}>
                    {blg.name}: {blg.age}
                </div>
            ))}
            
        <button onClick={handleClick}> add state </button>
    </div>
  )
}

export default Map