import {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1);
    }
    //mount ve unmount olduğu için başta 2 defa yazılıyolar
    useEffect(()=>{
        console.log("1.every time values in page are changed, use effect is treiggered");
    });
    useEffect(()=>{
        console.log("2.just in first initializing, use effect is treiggered");
    },[]);
    useEffect(()=>{
        console.log("3.every time you pressed button, use effect is treiggered");
    },[count]);

  return (
    <div>
        <button onClick={handleClick}>useEffect trigger button ({count}) </button>
    </div>
  )
}

export default UseEffect