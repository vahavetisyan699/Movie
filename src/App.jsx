import "./App.css";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Main from "./pages/Main";
import Movie from "./pages/Movie";
import Trailer from "./pages/Trailer";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path = "/" component = {Main} />
            <Route exact path = "/movie/:id" component = {Movie} />
            <Route exact path = '/movie/:id/watchTrailer' component = {Trailer} />
            <Redirect from = "/home" to = "/" />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
