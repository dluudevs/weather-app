// TODO: Re-watch Lecture 30 after weather-app is complete 

// local file requires '/'
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if (!address){
  console.log('Please provide an address')
} else {
  // callback with two parameters error and response (in this function response is a destructured object) is good practice and strongly recommended
  // add default value of empty object for response, without the empty object the app will crash if the value is undefined (ie., invalid location searched)
  // the geocode function crashes the app as it tries to destructure undefined
  geocode(address, (error, { longitude, latitude, location } = {}) => {
    // if error, return to exit the function
    if (error) {
      return console.log(error)
    }
    // for all other instances where this is no error, make a call to forecast
    forecast(latitude, longitude, (error, forecastData) => {
      if (error){
        return console.log(error)
      }
      console.log(location)
      console.log(forecastData)
    })
  })
}





















