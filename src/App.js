import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Services } from "./pages/Services";
import ScrollToTop from "./components/scroll-to-top";
import { Careers } from "./pages/Careers";
import { Job } from "./pages/Job";

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home/:id" exact component={Home} />
        <Route path="/services/:id" exact component={Services} />
        <Route path="/careers" exact component={Careers} />
        <Route path="/careers/:id" exact component={Job}></Route>
      </Switch>
      <Footer />
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
