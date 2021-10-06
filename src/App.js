import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import LogIn from "./components/login";
import SignUp from "./components/signup";
import { Route, Switch } from "react-router-dom";
import MovieForm from "./components/MovieForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/movies" component={Movies} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
          <Route path="/add-movies" component={MovieForm} />
        <Route path="/" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;
