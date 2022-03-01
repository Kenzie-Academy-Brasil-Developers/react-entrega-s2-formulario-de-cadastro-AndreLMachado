import "./App.css";
import Form from "./components/form";
import Home from "./components/home";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState({});
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Form usuario={usuario} setUsuario={setUsuario} />
          </Route>
          <Route exact path="/home/:name">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
