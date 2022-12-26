import './App.css';

const fullname = "Yavuz Bilge Ceylan"
const user = {
    name: "yavuz",
    age: 19
}
const isPassCorrect = true;

function App() {
    return (
        <div class="App-header" >

            {isPassCorrect ? (
                <div>
                    <p>welcome {fullname} </p>  
                    <p>info:</p>
                    <p>name: {user.name}</p>
                    <p>age: {user.age}</p>
                </div>
            ) : (<p>password is false</p>)}

        </div>
    );
}

export default App; 

