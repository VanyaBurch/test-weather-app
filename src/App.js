import React, {useState, useEffect} from "react";
import './App.css';

//import the Provider
import {Provider} from 'react-redux';
//import the store
import Store from './store';

function App() {



    const getWeatherInfo = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }

  return (
      <Provider store={Store}>
        <div className="App">
             <header>
               <h1>Test Weather App</h1>
                <p>by Ivan Burch</p>
             </header>
         </div>
          <main>
              <form onSubmit={getWeatherInfo}>
                  <div className='control'>
                      <input
                          type="text"
                          name='name'
                          placeholder='City to check weather'
                          // onChange={e => setCity(e.target.value)}
                      />
                  </div>
                  <input type="submit" value='Check Weather'/>
              </form>
          </main>

      </Provider>
  );
}

export default App;
