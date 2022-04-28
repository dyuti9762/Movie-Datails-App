import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetails/MovieDetail';


function App() {
  return (
    
    <div className='app'>
      <Router>
        <Header></Header>
        <div className='container'>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/movie/:imdbID" component={MovieDetail}/>
          <Route component={PageNotFound}/>
        </Switch>
        </div>
        
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
