import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Auth/Home'
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp'
import { AuthProvider } from './components/Auth/auth';
import PrivateRoute from './components/Auth/PrivateRoute'
import Organisationcount from './components/charts/Organisationcount'
import RevenueChart from './components/charts/Revenue'
import RevenueScreen from './components/charts/RevenueScreen'
import StudentScreen from './components/charts/StudentScreen';
import TutorsCount from './components/charts/Tutorscount';
import TutorScreen from './components/charts/Tutorscreen';

function App() {
  return (
    <AuthProvider>
     <Router>
     <div>
     <Route exact path="/" component={Home} />
     <Route exact path="/login" component={Login}></Route>
     <Route exact path="/signup" component={SignUp}></Route>
     <Route exact path="/organisationcount" component={Organisationcount}></Route>
     <Route exact path="/tutorscreen" component={TutorScreen}></Route>
     <Route exact path="/studentscreen" component={StudentScreen}></Route>
     <Route exact path="/RevenueScreen" component={RevenueScreen}></Route>

     

     </div>
     </Router>
     </AuthProvider>
  );
}

export default App;


    //  <Route exact path="/paidorganisationcount" component={PaidOrganisationcount}></Route>
