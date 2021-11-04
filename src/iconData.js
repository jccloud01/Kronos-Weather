import { useState } from "react";
import Weather from "./Weather";


function iconDisplay() {

    const [weatherIcon, setWeatherIcon] = useState('');

    const handleWeatherIcon = (e) => {
        e.preventDefault();
        const id = (e.target.value)
    }

    const iconData = [

        
        { icon: "01d", src:'./icons/clearsky.png' ,alt:'clear sky'},

        { icon: "02d", src:'./icons/fewclouds.png', alt:'few clouds'},

        { icon: "03d", src:'./icons/scatteredclouds.png', alt:'scattered clouds'},

        { icon: "04d", src:'./icons/brokenclouds.png', alt:'broken clouds'},

        { icon: "09d", src:'./icons/showerrain.png', alt:'shower rain'},

        { icon: "10d", src:'./icons/rain.png', alt:'rain' },

        { icon: "11d", src:'./icons/thunderstorm.png', alt: 'thunderstorm'},

        { icon: "13d", src:'./icons/snow.png', alt: 'snow'},

        { icon: "50d", src:'./icons/mist.png', alt: 'mist'},

];


    return (
        <div> </div>
    )
}



export default iconDisplay;