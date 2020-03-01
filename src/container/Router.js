import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Main from './Main';
import Favorites from './Favorites';
import Home from './Home';

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/favorites" component={Favorites}/>
      </Switch>
    </>
  )
}

export default Router
