import User from './components/User'
import User2 from './components/User2'

const user = { name: "yavuz", age: 18, city: "istanbul" };

const friends = [
    { id: 1, name: "ali" },
    { id: 2, name: "ayse" },
    { id: 3, name: "ahmet"}];

function App() {
  return (
      <div>
          <User
              name="yavuz"
              age={12}
              city="eskisehir"
              friends={friends}
          /><hr/>
          <User2
              user={user}
              friends={friends}
          />
      </div>
  );
}

export default App;