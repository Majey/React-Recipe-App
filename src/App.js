import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = "0facebfa";
  const APP_KEY = "88eeed96cb93c64cc787a617872f1718";
  const API = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(API);  
    const data = await response.json();
    console.log(data);
  }


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Search</button>
      </form> 
    </div>
  );
}

export default App;
