require("dotenv").config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_API_ADDRESS = "http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst";

const btn = document.getElementById("aoeriharjnberal");
btn.addEventListener('click', updateWeather);


function updateWeather() {
    let input, datalist, i, temp, searchValue;
    input = document.getElementById("searchBox").value;
    datalist = document.getElementById("locationSearch").options;
    for(i = 0; i < datalist.length; i++) {
        console.log(datalist[i]);
    }
    console.log(input);
}

console.log(WEATHER_API_KEY);