import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import {
  Navbar,
  Footer,
  ScrollToTop,
  Home,
  About,
  Projects
} from "./components"

function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loaded) return <div id="preloader"/>

  return (
      <div className="App">
        <Router>
          <ScrollToTop/>

          <Navbar/>

          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>

            <Route path="*" element={<Navigate to="/home"/>}/>
          </Routes>

          <Footer/>
        </Router>
      </div>
  )
}

export default App;
