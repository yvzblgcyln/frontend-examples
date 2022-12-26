import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
    const {id} = useParams();
    const {data, isPending, error} = useFetch("http://localhost:8000/data/" + id);
    const history = useHistory();
    const handleClick=()=>{
        fetch("http://localhost:8000/data/"+id, {
          method: "DELETE"
        }).then(()=>{
          history.push("/")
        })
    }
  return (
    <div>
        <strong>blog id: {id} </strong>

        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {data && (
        <div>
            <p>{data.title}</p>
            {data.content}
            <button onClick={handleClick}>delete</button>
        </div>)}
    </div>
  )
}

export default BlogDetails