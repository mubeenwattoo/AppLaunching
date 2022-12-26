import React from "react";
import About from "./components/About";
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';

import Feature from "./components/Feature";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
    <Header/>
    <Feature/>
    <About image={aboutimage} title='Download And Get The App Now'
     button='Get The App'/>
     <Presentation/>

     <About image={aboutimage1} title='Comes with All you need for daily life'
     button='Download'/>
     <Contact/>
    </div>
  );
}

export default App;
