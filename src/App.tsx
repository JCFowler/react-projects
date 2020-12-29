import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HeroBuilder from './projects/HeroBuilder';
import Home from './common/components/Home';
import ToDoList from './projects/TodoList';
import QuizApp from './projects/Quiz';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/hero' exact component={ HeroBuilder } />
          <Route path='/todo' exact component={ ToDoList } />
          <Route path='/quiz' exact component={ QuizApp } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
