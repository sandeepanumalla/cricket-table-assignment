import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Playerpage from "./components/Playerpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/homepage">
          <Homepage />
        </Route>
        <Route
          path="/playerpage/:Id"
          component={(props) => <Playerpage />}></Route>
        <Redirect to="/homepage"></Redirect>
      </Router>
    </div>
  );
}

export default App;
