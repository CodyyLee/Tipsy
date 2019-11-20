import React from 'react';
import {Route} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Home/Landing";
import Footer from "./Components/Footer/Footer";
import Discover from './Components/Discover/Discover';
import Drink from "./Components/Discover/Drink";

function App() {
  return (
    <div>
      <Navigation/>

      <Route path="/" exact render={() => {
        return <Landing />
      }}/>

      <Route path="/Discover" exact render={() => {
        return <Discover />
      }}/>

      <Route path="/Discover/:name" render={(props) => {
        return <Drink {...props}/>
      }}/>

      <Footer/>
    </div>
  );
}

export default App;
