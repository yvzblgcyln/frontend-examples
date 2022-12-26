import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Button from "./components/button";
import State from "./components/state";
import Map from "./components/map";
import Filter from "./components/filter/filter";
import UseEffect from "./components/useEffect";
import FetcData from "./components/fetcData";
import Navbar from "./components/navbar";
import BlogDetails from "./components/blogDetails";
import Inputs from "./components/inputs";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Navbar/> <hr/>
      <Switch>
        <Route exact path="/">
          <State/><hr/>
          <Map/><hr/>
          <UseEffect/><hr/>
          <FetcData/><hr/>
        </Route>
        <Route path="/filter">
          <Filter/><hr/>
        </Route>
        <Route path="/button">
          <Button/><hr/>
        </Route>
        <Route path="/blog/:id">
          <BlogDetails/><hr/>
        </Route>
        <Route path="/inputs">
          <Inputs/><hr/>
        </Route>
        <Route path="*">
          <NotFound/><hr/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;