import {BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
import React  from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import SingleMeal from './Pages/SingleMeal';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Category from './Pages/Category';
import Contact from './Pages/Contact';
import Error from './Pages/Error';

function App() {
  
  return (
    <Router>
      <Navbar />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/meal/:idMeal">
              <SingleMeal />
            </Route>
            <Route path="/categories">
              <Category />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <Error />
            </Route>
        </Switch>      
      <Footer />
    </Router>
  );
}

export default App;
