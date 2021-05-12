const Weather = require('../../models/Weather');
const axios = require('axios');

exports.getWeather = (async (req, res) => {
  var city = req.params.city;
  const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=' + 
                  city + '&appid=' + process.env.WEATHER_API_KEY +
                  '&lang=en' + '&units=metric';
  const response = await axios.get(apiLink);
  const data = response.data
  console.log(data);
  const weather = new Weather ({
    name: data.name,
    clouds: data.clouds,
    wind: data.wind.speed,
    weather: data.weather[0].description,
    temperature: data.main.temp,
  });

    const savedWeather = await weather.save();
    res.json(savedWeather);
});
