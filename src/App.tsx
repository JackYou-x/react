import React from 'react';
import './App.css';
import Header from './components/todoHeader'
import List from './components/todoList'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <List></List>
    </div>
  );
}

export default App;
