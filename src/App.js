import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import HomeOld from "./pages/Home/HomeOld";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Parent from './pages/Parent/Parent';
import Teacher from './pages/Teacher/Teacher';
import PreSchool from './pages/PreSchool/PreSchool';
import Contact from './pages/Contact/Contact';
import Centa from './pages/Centa/Centa';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy/CookiePolicy';
import WebsitePrivacyNotice from './pages/WebsitePrivacyNotice/WebsitePrivacyNotice';
import Footer from "./components/Footer/Footer";
import { AuthProvider } from './context/Auth';
import PrivateRoute from './common/guards/PrivateRoute';
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import ScrollToTop from "./ScrollToTop"
import './App.css';
import TeachersInfo from './pages/TeachersInfo/TeachersInfo';
import ThankYou from './components/ThankYou';
import PreSchoolThankYou from './components/PreSchoolThankYou';
import ScheduleTourThankYou from './components/ScheduleTourThankYou';



function App() {
  
  return (
  <>
       <Router>
       <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path="/"  component={Home} />
          {/* <Route exact path="/home2"  component={HomeOld} /> */}
          <Route exact path="/about"  component={About} />
          <Route exact path="/parent"  component={Parent} />
          <Route exact path="/pods"  component={Teacher} />
          {/* <Route exact path="/Pre-school"  component={PreSchool} /> */}
          <Route path='/Pre-school' component={() => { 
              window.location.href = 'https://www.kidofranchise.com/'; 
              return null;
          }}/>
          <Route exact path="/contact"  component={Contact} />
          <Route exact path="/centa"  component={Centa} />
          <Route exact path="/privacy-policy"  component={PrivacyPolicy} />
          <Route exact path="/cookie-policy"  component={CookiePolicy} />
          <Route exact path="/website-privacy-notice"  component={WebsitePrivacyNotice} />
          <Route exact path="/thank-you"  component={ThankYou} />
          <Route exact path="/thank_you"  component={PreSchoolThankYou} />
          <Route exact path="/thankyou"  component={ScheduleTourThankYou} />
          <AuthProvider>
          <Route path="/LoginRegister/:tname" component={LoginRegister} />
          <PrivateRoute path="/teacher-info/:tinfo"  component={TeachersInfo} />
          </AuthProvider>
        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>
</>
  );
}

export default App;
