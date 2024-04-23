import React from 'react';
import FirstComponent from './FirstComponent';
import NamedComponent from './NamedComponent';
import Tweet from './Tweet';
import Person from './Person';
import './App.css';

function App() {
  return (
    <>
    <FirstComponent />
    <NamedComponent name="Sara"/>
    <Tweet username="r_carri09" name="Reba Carrillo" date="02/16/24" message="My first tweet"/>
    <Tweet username="c_gibs044" name="Clint Gibson" date="03/21/24" message="Happy Spring!"/>
    <Tweet username="do_reid557" name="Dolores Reid" date="04/01/24" message="I was bitten by a turtle"/>
    <Person  name="Catherine Snyder" age={30} hobbies={['hiking','swimming','piano']}/>
    <Person  name="Duncan Norman" age={45} hobbies={['chess','fishing','watching tv']}/>
    <Person  name="Alyssa Luna" age={17} hobbies={['gymnastics','roller blading','watching Youtube']}/>
    </>
  );
}

export default App;
