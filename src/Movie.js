import React from 'react';
import './App.css';

function Movie(props) {
  return (
    <div>
    <p>name : {props.name}</p>
    <p>id : {props.id}</p>
    <p>year : {props.year}</p>
   </div>
  );
}

export default Movie;
