import React from 'react'

function Header({data,number,increment}) {
    console.log("rendered")
  return (
    <div>
        <p>Header</p>
        <p>{number}</p>

        <code>{JSON.stringify(data)}</code><br/>

        <button onClick={increment}> click +1 </button>

        <hr/>
    </div>
  )
}

export default React.memo(Header);