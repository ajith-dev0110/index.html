import axios from 'axios';

// Replace with your actual backend URL and OpenWeatherMap API Key
const BACKEND_URL = 'http://localhost:5000/api';
const WEATHER_API_KEY = 'YOUR_OPENWEATHER_API_KEY'; 

export const weatherApi = {
  getLiveWeather: async (city) => {
    // Falls back to mock data matched with image if API key is not present
    if (!WEATHER_API_KEY || WEATHER_API_KEY === 'YOUR_OPENWEATHER_API_KEY') {
      return getMockWeatherData(city);
    }
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${WEATHER_API_KEY}`);
    return response.data;
  },
  
  getForecast: async (city) => {
    return getMockForecastData(city);
  }
};

// Mock data strictly tailored to mirror the provided UI Snapshot
function getMockWeatherData(city) {
  return {
    name: city || "San Francisco, CA",
    temp: 68,
    condition: "Partly Cloudy",
    humidity: 65,
    wind: 12,
    visibility: 10,
    pressure: 1012,
    feelsLike: 62
  };
}

function getMockForecastData(city) {
  return [
    { day: "Today", condition: "Cloudy", pop: 20, high: 72, low: 58 },
    { day: "Friday", condition: "Rainy", pop: 80, high: 65, low: 55 },
    { day: "Saturday", condition: "Rainy", pop: 70, high: 63, low: 54 },
    { day: "Sunday", condition: "Cloudy", pop: 30, high: 66, low: 56 },
    { day: "Monday", condition: "Sunny", pop: 10, high: 71, low: 57 },
    { day: "Tuesday", condition: "Sunny", pop: 5, high: 74, low: 59 },
    { day: "Wednesday", condition: "Drizzle", pop: 40, high: 69, low: 56 }
  ];
}