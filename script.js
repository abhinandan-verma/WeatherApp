const apikey ="0a726efdb007c9c3434fc859b53c0ba8";
const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input")
const searchbtn =document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response = await fetch(apiurl+ city +`&appid=${apikey}`);

    var data= await response.json();
    console.log(data);
document.querySelector('.city').innerHTML= data.name;
document.querySelector('#humidity').innerHTML=data.main.humidity +"%";
document.querySelector('.temp').innerHTML= Math.round(data.main.temp_max)+"Â°C";
document.querySelector('#speed').innerHTML=data.wind.speed +"km/h";
if(data.weather[0].main == "Clouds"){
    weathericon.src ="cloudy.png";
    weathericon.style.width="208px";
    weathericon.style.height="187px";

}
else if(data.weather[0].main == "Drizzle"){
    weathericon.src ="drizzle.png";
}
else if(data.weather[0].main == "Clear"){
    weathericon.src ="clear-sky.png";
    weathericon.style.width="150px";
    weathericon.style.height="183px";
    weathericon.style.marginTop="10px"; 
}
else if(data.weather[0].main == "Haze"){
    weathericon.src ="clear-sky.png";
    weathericon.style.width="150px";
    weathericon.style.height="183px";
    weathericon.style.marginTop="10px"; 
}
else if(data.weather[0].main == "Rain"){
    weathericon.src ="rain.svg";
}
else if(data.weather[0].main == "Mist"){
    weathericon.src ="foge.png";
}
else{
    weathericon.src ="clear-sky.png";
    weathericon.style.width="150px";
    weathericon.style.height="183px";
    weathericon.style.marginTop="10px"; 
}
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})