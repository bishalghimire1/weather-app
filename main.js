window.onload = function() {
  var apiData = {};
  fetch("https://fcc-weather-api.glitch.me/api/current?lat=27&lon=85")
    .then((response) =>
      response
        .json()
        .then(
          (result) =>
          {
              console.log("result>>", result);
            // (document.getElementById("app").innerHTML = result.wind.speed +","+ result.wind.deg)
            // let temp = document.getElementById('temperature')
            // temp.innerHTML = result.main.temp + '&deg;'
            // document.getElementById('max-temp').innerHTML = result.main.temp_max + '&deg;'
            // document.getElementById('min-temp').innerHTML = result.main.temp_min + '&deg;'
            // document.getElementById('wind-speed').innerHTML = result.wind.speed + '&deg;'
             document.getElementById('clear').innerHTML = result.weather[0].main
             document.getElementById('city-name').innerHTML = result.name
             let temp=document.getElementById('temp')
            //  console.log(result.main.temp)
            temp.innerHTML=result.main.temp + '&deg;' + 'C'
             if(result.main.temp>32 ){
               temp.style.cssText = 'color:red'
             }
             else{
               temp
             }
             document.getElementById('humidity').innerHTML = result.main.humidity + '%'
             document.getElementById('wind-speed').innerHTML = result.wind.speed + 'km/hr'
             document.getElementById('pressure').innerHTML = result.main.pressure + 'Pa'
            //  console.log(result.sys)
            document.getElementById('country-name').innerHTML = result.sys.country
            // document.getElementById('sea-level').innerHTML = result.main.sea_level

          }
            
        )
    )
    .catch((err) => { 
      alert("error");
      console.log(err);
    });

  // console.log(apiData)
};
