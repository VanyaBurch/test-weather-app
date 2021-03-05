const API_KEY = 'ad8ea940cb2afc1969188c072a7c252a';

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
