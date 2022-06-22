import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
