import React from 'react';
import './App.css';
import history from './history';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Auth/Home'
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp'
import { AuthProvider } from './components/Auth/auth';
// import PrivateRoute from './components/Auth/PrivateRoute'
import Organisationcount from './components/charts/Organisationcount'
import RevenueChart from './components/charts/Revenue'
import RevenueScreen from './components/charts/RevenueScreen'
import StudentScreen from './components/charts/StudentScreen';
import TutorsCount from './components/charts/Tutorscount';
import TutorScreen from './components/charts/Tutorscreen';
import Quizattemptscreen from './components/charts/Quizattemptscreen'
import PractQuizattemptscreen from './components/charts/PracticeScreen'
import LectureScreen from './components/charts/Lecture'
import TotalQuizScreen from './components/charts/Totalquizscreen'

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
          <Route exact path="/QuizattemptScreen" component={Quizattemptscreen}></Route>
          <Route exact path="/Practice" component={PractQuizattemptscreen}></Route>
          <Route exact path="/Lecture" component={LectureScreen}></Route>
          <Route exact path="/Quiz" component={TotalQuizScreen}></Route>


        </div>
      </Router>
     </AuthProvider>
  );
}

export default App;


    //  <Route exact path="/paidorganisationcount" component={PaidOrganisationcount}></Route>
