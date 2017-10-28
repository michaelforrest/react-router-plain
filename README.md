# react-router-plain

This is a React-Router alternative. A very easy-to-use router, integrated with Redux, support Server Side Rendering.

Example

import React from 'react';
import ReactDOM from 'react-dom';

import HistoryRouter, { changePath, HistoryRoute, historyRouter } from 'react-router-plain';

const App = () => 
  <div className="app">
    <h3>Example</h3>
    
    <p>
      <HistoryRoute path="*" component={ AlwaysRenderedList } />
      <HistoryRoute path="/list" component={ List } />
      <HistoryRoute path="/list" render={() => <List data={[]} /> } />
      <HistoryRoute path={path => path.includes('/values')} render={() => <List data={[]} /> } />
    </p>

    <HistoryRouter />

    <button onClick={() => changePath('/submitted') }>submit</button>
  </div>

const AlwaysRenderedList = ({data) => <ul><li>item1</li></ul>
const List = ({data) => <ul><li>item1</li></ul>

ReactDOM.render(<App />, document.querySelector('#root'));

Don't forget add a reducer:

createStore(
  combineReducers({
    appData: AppReducer,
    historyRouter
  })
)