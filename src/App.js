// components
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/layouts/Home';
// styles
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './styles/style.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route path="/" component={Home} />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
