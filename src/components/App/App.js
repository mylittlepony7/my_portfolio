// import { Component } from 'react';
import React ,{useEffect}from 'react';
import home_content from '../Home/home';
import eaducation from '../Eaducation/eaducation';
import Projects from '../Projects/projects'
import work from '../Work/work';
import gsap from 'gsap';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
function Application() {
  useEffect( ()=> {
    const t = gsap.timeline({dafaults : {ease : "power1.out"}});
    console.log("Done");
    t.to('.textspan' , { y:"0%" , duration : 1});
  });
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={home_content}/>
          <Route path="/eaducation" exact component={eaducation}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/work" exact component={work}/>
        </Switch>
      </Router>

    );
}

// ReactDOM.render(temp,document.getElementById("root"));
export default Application;
