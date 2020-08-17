import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Temperature from "./pages/Temperature";
import CustomImg from "./pages/CustomImg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavMain />
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/temperature" component={Temperature} />
          <Route exact path="/" component={CustomImg} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
