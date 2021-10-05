import React from 'react';
import './App.css';

import SectionOnUs from '../sectionOnUs/sectionOnUs';
import TextOnUs from '../textOnUs/textOnUs';
import OurBest from '../ourBest/ourBest';
import Footer from '../footer/footer';


function App() {
  return (
    <div className="App">
         <SectionOnUs/>
         <TextOnUs/>
         <OurBest/>
         <Footer/>
    </div>
  );
}

export default App;
