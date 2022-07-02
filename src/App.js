import React, { useEffect, useCallback } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Services } from "./pages/Services";
import { Careers } from "./pages/Careers";
import { Job } from "./pages/Job";
import { ContactForm } from "./components/contact-form";
import trackPathForAnalytics from "./hooks/trackPath.ts";

const App = () => {
  const { pathname, search } = useLocation();

  const analytics = useCallback(() => {
    trackPathForAnalytics({
      path: pathname,
      search: search,
      title: pathname.split("/")[1],
    });
  }, [pathname, search]);

  useEffect(() => {
    analytics();
  }, [analytics]);
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home/:id" exact component={Home} />
        <Route path="/services/:id" exact component={Services} />
        <Route path="/careers" exact component={Careers} />
        <Route path="/careers/:id" exact component={Job}></Route>
      </Switch>
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
