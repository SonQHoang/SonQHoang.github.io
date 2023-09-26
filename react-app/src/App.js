import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import SideBar from "./components/Sidebar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Mainpage from "./components/MainPage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Mainpage/>
          <Intro/>
          <Contact/>
          <SideBar/>
          <Projects/>
          <About/>
          <Footer/>
        </Switch>
      )}
    </>
  );
}

export default App;
