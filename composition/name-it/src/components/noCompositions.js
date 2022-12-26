import React from 'react'

function NoCompositions() {
    return (
        <div>
            <Card1 />
            <Card2 />
        </div>
    )
}
const Card1 = () => {
    return (
        <div>
            <h1>card1</h1>
            <p>this is card 1</p>
        </div>
    )

}
const Card2 = () => {
    return (
        <div>
            <h1>card2</h1>
            <p>this is card 2</p>
            <button>button</button>
        </div>
    )
}
export default NoCompositions