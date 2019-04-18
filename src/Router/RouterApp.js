import React  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Pages/Home/Home';
import MainDeckPage from '../Pages/Home/MainDeckPage';



function HomePage() {
  return <Home/>;
}


function MainDeck() {
  return <MainDeckPage/>
}


function RouterApp() {
    return (
      <Router>
      <div className="App">

        <Route path="/" exact component={HomePage}></Route>
        <Route path="/MainDeckPage" exact component={MainDeck}></Route>
      </div>
      </Router>
    );
  }

export default RouterApp;
