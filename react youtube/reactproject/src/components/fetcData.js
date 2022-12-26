import BlogList from './blogList';
import useFetch from './useFetch';

function FetcData() {
  const {data, isPending, error} = useFetch("http://localhost:8000/data");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      <strong>json</strong>
      {data && data.map((data)=>(
            <div key={data.id}>
                 title: {data.title} / body: {data.body}
            </div>
      ))}
      
      {data && <BlogList list={data}/>}  
    </div>
  )
}

export default FetcData