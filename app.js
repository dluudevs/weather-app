// TODO: Re-watch Lecture 30 after weather-app is complete 

// local file requires '/'
const geocode = require('./utils/geocode')
const forecast = require('./utils/weather')

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

// callback with two parameters error and response is good practice and strongly recommended
geocode('Toronto', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})





















