import axios from "axios";
import { useQuery } from "react-query";

const API_KEY = "745a2734219fbce740186f91ae1912b8";
const URL = 'https://api.openweathermap.org/data/3.0/weather'


export const useWeather =(city:string)=>{
    return useQuery(['weather', city], async () => {
        const { data } = await axios.get(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return {
          name: data.name,
          temp: data.main.temp,
          condition: data.weather[0].main,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: data.weather[0].icon,
        };
      });
}