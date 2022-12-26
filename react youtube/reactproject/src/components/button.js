function Button() {

    const handleClick = () => {
        console.log("button is clicked ");
    }

    const handleClick2 = (name) => {
        console.log("passed parameter: " + name );
    }

    const handleClick3 = (e) => {
        console.log(e);
        console.log("e.detail:" + e.detail);
        console.log("e.target.name:" + e.target.name);
    }

  return (
    <div>
        
        {/*passing a function as a reference*/}
        <button onClick={handleClick} > button1 </button>

        {/*passing parameter to function*/}
        <button onClick={() => handleClick2("ybc")} > button2 </button>
        
        {/*event*/}
        <button onClick={(e) => handleClick3(e)} > button3 </button>

    </div>
  )
}

export default Button