import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './aboutme';
import Projects from './projects';
import Contact from './contact';
import Gallery from './gallery';

const Main = () => (
  <Switch>
    <Route exact path="/" component={AboutMe} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path="/gallery" component={Gallery} />
  </Switch>
)

export default Main;