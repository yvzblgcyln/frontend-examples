import {useState} from 'react'

function State() {

    const [name, setName] = useState("Yavuz");
    const [array, setArray] = useState(["array deneme "]);

    const handleClick = () => {
        setName("Bilge");
        setArray([...array, 1]);
    }

  return (
    <div>
        <div> state: {name} ({array}) </div>   
        <button onClick={handleClick}> change state </button>
    </div>
  )
}

export default State