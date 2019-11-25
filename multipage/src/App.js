import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPosts from './NewPosts/NewPosts';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <ul>
            <li>
              <Link to='/'>Posts</Link>
            </li>
            <li>
              <Link to='/new-posts'>New Posts</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path='/' exact component={Posts}></Route>
          <Route path='/new-posts' component={NewPosts}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
