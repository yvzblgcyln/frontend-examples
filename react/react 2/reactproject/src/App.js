import User1 from "./components/User1";
import User2 from "./components/User2";
import User3 from "./components/User3";
import User4 from "./components/User4";
import User5 from "./components/User5";

const user = {
    name: "YBC",
    age: 22
}

function App() {

  return (
     <div >
          <User1 name={"user1"} age={111} /> <hr/>
          <User2 data2={user} /> <hr/>
          <User3 data3={user} fulname={["yavuz", "bilge", "ceylan"]} /><hr />
          <User4 name={"YBC"} age={11} city={"paris"} /> <hr />
          <User5 title1="title" data5={{name: "YBC", age: 11, city: "paris" }} array={["yavuz", "bilge", "ceylan"]} /> <hr />

     </div>
  );
}

export default App;
