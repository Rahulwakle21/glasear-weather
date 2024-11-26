import React from 'react';

type WeatherDetailsProps = {
  weatherData: {
    name: string;
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    icon: string;
  };
};

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData }) => {
  const { name, temp, condition, humidity, windSpeed, icon } = weatherData;

  return (
    <div className="weather-details">
      <h2>{name}</h2>
      <p>Temperature: {temp} </p>
      <p>Condition: {condition}</p>
      <p>Humidity: {humidity} </p>
      <p>Wind Speed: {windSpeed} </p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={condition}
      />
    </div>
  );
};

export default WeatherDetails;
