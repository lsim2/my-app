import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
import schools from './schools';
/*
This list of produce that is passed into the FilteredList component.
Notice that it is a list of javascript objects where {key: value}.
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredList items={schools} />
      </div>
    );
  }
}

export default App;