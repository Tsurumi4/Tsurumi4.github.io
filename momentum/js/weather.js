function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "702a710b5f40be4061b74bad7899dc1c";
    console.log("You live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const widget = document.createElement("iframe");
       // widget.innerText = `<iframe width="100%" height="245" src="https://forecast.io/embed/#lat=${lat}&lon=${lon}&name=${data.name}&color=&font=arial&units=si" frameborder="0"></iframe>`
       // weather.innerText = `${data.weather[0].main} / ${parseFloat(data.main.temp).toFixed(1)}`;
       widget.src = `https://forecast.io/embed/#lat=${lat}&lon=${lon}&name=${data.name}&color=&font=arial&units=si`;
       weather.innerHTML = `<iframe width="100%" height="245" src="https://forecast.io/embed/#lat=${lat}&lon=${lon}&name=${data.name}&color=&font=arial&units=si" frameborder="0"></iframe>`;
    });
    console.log(url);
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);