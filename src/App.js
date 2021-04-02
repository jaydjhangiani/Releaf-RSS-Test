import React,{useState,useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Podcast from './Pages/Podcast';
import PodcastLanding from './Pages/PodcastLanding';
import Test from './Pages/Test';

function App() {
  
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          {/* Navbar */}
          <Switch>
            <Route path = "/" component = {Home} exact/>
            <Route path = "/podcast" component = {Podcast} />
            {/* <Route path = "/p" component = {PodcastLanding} /> */}
            <Route path = "/blog" component = {Blog} />
      
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
