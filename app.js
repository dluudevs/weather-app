// TODO: Re-watch Lecture 30 after weather-app is complete 
const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=47199bc362cf473b97d334e5179d307b&query=37.8267,-122.4233'

request({url}, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})
