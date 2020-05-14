const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=47199bc362cf473b97d334e5179d307b&query=${latitude},${longitude}&units=f`
  
  // first argument is options object, url must be provided
  // json option converts data to json without having to use JSON.parse()
  request({ url, json: true }, (error, response) => {
    // error only gets passed to callback when network request fails. this is called a low level error
    if (error){
      callback('Unable to connect to weather service!', undefined)
    // else if for situations where a response with an error is passed. ie., when no coordinates is provided to the query
    } else if (response.body.error) {
      callback('Unable to find location', undefined)
    } else {
      const weather = response.body.current
      callback(undefined, {
        weather: weather.weather_descriptions[0],
        temperature: weather.temperature,
        feels: weather.feelslike
      })
    }
  })
}

module.exports = forecast