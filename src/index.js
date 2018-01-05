import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';

var person = {
  personName: "Nick",
  personAge: 24,
  favorites: [
    "capybaras",
    "Tigers",
    "Dinosaurs!"
  ]
}

ReactDOM.render(
  <Hello
  name={person.personName}
  age={person.personAge}
  animals={person.favorites} />,
  document.getElementById('root')
);
