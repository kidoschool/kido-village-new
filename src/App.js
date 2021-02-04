import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import HomeOld from "./pages/Home/HomeOld";
import Home from "./pages/Home/Home";
import Parent from './pages/Parent/Parent';
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop"
import './App.css';


function App() {
  
  return (
  <>
       <Router>
       <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/home2"  component={HomeOld} />
          <Route exact path="/parent"  component={Parent} />
        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>
</>
  );
}

export default App;
