const API_KEY = 'your api key';

export function fetchWeather(city) {

    return function (dispatch) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => {
                return res.json();
            })
            .then(JSONres => {
                //dispatch the action
                dispatch({type: 'FETCH_WEATHER',
                    payload: JSONres});
            }).catch(err => {
                console.log(err);
        })
    }
}
