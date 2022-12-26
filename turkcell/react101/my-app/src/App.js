import Header from "./components/Header";
import LoggIn from "./components/LoggIn";
import User  from "./components/User";
import User2 from "./components/User2";
import User3 from "./components/User3";
import User4 from "./components/User4";
import Counter from "./components/Counter";
import Colors from "./components/Colors";
import Form from "./components/Form";
import Fetch from "./components/Fetch";

const isLoggedIn = false;
const fullname = "Yavuz Bilge Ceylan";

const user = {
    name: "kamil",
    city: "new york",
    age: 19,
};

function App() {
  return (
    <div>
          App

          <Header />

          {isLoggedIn ? (<div> welcome {fullname} </div>) : (<div>failed</div>)}
          {isLoggedIn && (<div> welcome {fullname} </div>)}
          {!isLoggedIn && <LoggIn />} 

          <hr/>
          <User name="ali" city="istanbul" age={30} />
          <User name="veli" city="ankara" age={20} />

          {/*<User2 data={user} friends />*/}
          <User2 data={user} friends={['a', 'b', 'c']} />

          <User3
              name={"kamil"}
              city="new york"
              age={19}
          />

          <User4
              title="kisi"
              data={{
                name:"kamil",
                city:"new york",
                age:19,
              }}
              friends={['a', 'b', 'c']}
          />

          <Counter /> <hr/>
          <Colors /> <hr />
          <Form /> <hr />
          <Fetch/>

    </div>
  );
}

export default App;