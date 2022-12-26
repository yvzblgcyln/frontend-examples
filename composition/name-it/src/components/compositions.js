//self close yerine </ > ile close kullan.
//<> differences </>
//farklılıkları props.children şeklinde kullan

function Compositions() {
    return (
        <div>
            <Card title="card1" description="this is card 1" >
                <a href="#">link</a>
            </Card>
            <Card title="card2" description="this is card 2">
                <button>button</button>
            </Card>
        </div>
    )
}
const Card = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.children}
        </div>
    )
}
export default Compositions