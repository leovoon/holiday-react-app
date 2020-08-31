import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Moment from "react-moment";
import { useFetch } from "./useFetchHook";
require('dotenv').config()


function App() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const url = `
  https://cors-anywhere.herokuapp.com/calendarific.com/api/v2/holidays?&api_key=${process.env.REACT_APP_NOT_SECRET_CODE}&country=MY&year=${year}&month=${month}&day=${day}`;

  
  const { holidays, loading } = useFetch(url);




  return (

    <div className='App'>
    <h1 style={{ textTransform: 'upperCase' }}>
What Holiday is Today in <span role="img" aria-labelledby="checking holiday" >🇲🇾</span></h1>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <Moment date={date} format='DD  MMMM YYYY' />
        </p>


        {!loading ? holidays === undefined 
          ? "Today isn't a holiday." : <div>{holidays[0].name}</div> :
          <div>Checking..<span role="img" aria-labelledby="checking holiday" >💭</span></div>
          }
      </header>
    </div>
  );
}

export default App;
