import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

//action
import {fetchWeather} from './actions/fetchWeather';


function App() {

    //set city
    const [city, setCity] = useState('');

    const weatherSelector = useSelector((state) => state)
    const dispatch = useDispatch();
    const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

   useEffect(() => {
       getWeatherInfoAction('');
   }, [])


    const getWeatherInfo = (e) => {
        e.preventDefault();
        if (city === '') {
            console.log('No city to search for')
        }else {
            getWeatherInfoAction(city);
            console.log(weatherSelector.weatherInfo);
        }
    }

    let details = '';
    if (weatherSelector.weatherInfo && weatherSelector.weatherInfo.hasOwnProperty('name')) {
        details = <div className='details'>
                        <h4>Weather Details</h4>
                        <p>{weatherSelector.weatherInfo.name}</p>
                        <p>{weatherSelector.weatherInfo.sys.country}</p>
                        <p>{weatherSelector.weatherInfo.main.temp}°C</p>
                        <p>{weatherSelector.weatherInfo.weather[0].main}:
                            <span>{weatherSelector.weatherInfo.weather[0].description}</span>
                        </p>
                 </div>
    } else {
        details = <p>Tou need to type a city or the city you typed doesnt exist</p>
    }


  return (
      <React.Fragment>
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
                          onChange={e => setCity(e.target.value)}
                      />
                  </div>
                  <input type="submit" value='Check Weather'/>
              </form>
              {details}
          </main>
      </React.Fragment>

  );
}

export default App;
