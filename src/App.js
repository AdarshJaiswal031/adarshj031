import React from 'react';

// import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import { Header, About, Work, Skills, Testimonial, Footer } from "./container"
import Profiles from './container/Profiles/Profiles';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Profiles />
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
