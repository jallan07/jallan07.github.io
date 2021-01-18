// components
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Contact from './components/layouts/Contact';
import Clients from './components/layouts/Clients';
import Projects from './components/layouts/Projects';

// styles
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './styles/style.css';

function App() {
  AOS.init();
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/projects" component={Projects} />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
