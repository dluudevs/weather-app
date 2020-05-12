// TODO: Re-watch Lecture 30 after weather-app is complete 
const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=47199bc362cf473b97d334e5179d307b&query=37.8267,-122.4233&units=f'

// first argument is options object, url must be provided
// json option converts data to json without having to use JSON.parse()
request({url, json: true}, (error, response) => { 
  // error only gets passed to callback when network request fails. this is called a low level error
  if(error){
    console.log('Unable to connect to weather service!')
  // else if for situations where a response with an error is passed. ie., when no coordinates is provided to the query
  } else if (response.body.error){
    console.log('Unable to find location')
  } else {
    const weather = response.body.current
    console.log(`${weather.weather_descriptions[0]}. It is currently ${weather.temperature} degrees out. It feels like ${weather.feelslike} degrees out`)
  }
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGVsdnYiLCJhIjoiY2szejRmdHFjMWUyajNlcGRwb2dncml0aSJ9.BjzlJbeyH4qtVzr8ns9gDA&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error){
    console.log('Unable to connect to location services!')
  } else if (!response.body.features.length){
    console.log('Unable to find location')
  } else {
    const [ longitude, latitude ] = response.body.features[0].center
    console.log(`Longitude: ${longitude}, Latitude: ${latitude}`)
  }
})





















