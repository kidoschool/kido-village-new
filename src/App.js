import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import HomeOld from "./pages/Home/HomeOld";
import Home from "./pages/Home/Home";
import Parent from './pages/Parent/Parent';
import Teacher from './pages/Teacher/Teacher';
import PreSchool from './pages/PreSchool/PreSchool';
import Contact from './pages/Contact/Contact';
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
          <Route exact path="/teacher"  component={Teacher} />
          <Route exact path="/Pre-school"  component={PreSchool} />
          <Route exact path="/contact"  component={Contact} />
          <Route exact path="/privacy-policy"  component={PrivacyPolicy} />
          <Route exact path="/cookie-policy"  component={CookiePolicy} />
          <Route exact path="/website-privacy-notice"  component={WebsitePrivacyNotice} />
          <Route exact path="/thank-you"  component={ThankYou} />
          <AuthProvider>
          <Route path="/LoginRegister/:tname" component={LoginRegister} />
          <PrivateRoute path="/teacher-info/:tinfo"  component={TeachersInfo} />
          </AuthProvider>
        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>

      {/* <AuthProvider>
      <Router>
        <Switch>
          <Route path="/LoginRegister" component={LoginRegister} />
        </Switch>
      </Router>
    </AuthProvider> */}
</>
  );
}

export default App;
