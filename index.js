const userInput = document.getElementById("user-input");

const searchBtn = document.getElementById("search-btn");

const userLocation = document.getElementById("location");

const tamp = document.getElementById("tamp");

const clouds = document.getElementById("clouds");

const cloudImg = document.getElementById("cloud_img");

const cloudDescription = document.getElementById("cloud-description");

const api_key = "8b4b86c06c1cd9cf9f8ef6d371b21f43";

searchBtn.addEventListener("click", function () {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&units=matric&appid=${api_key}`
    )
        .then((res) => res.json())
        .then((data) => {
            if (
                userInput.value == "" ||
                userInput.value == undefined ||
                userInput.value == null
            ) {
                alert("You have to give the Right Location");
            } else {
                userLocation.innerText = data.name;
                tamp.innerText = Math.round(data.main.temp - 273.15);
                clouds.innerText = data.weather[0].main;
                cloudImg.src = src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                cloudDescription.innerText = data.weather[0].description;
            }
        })
        .catch((err) => {
            alert(
                "You have to give correct state & country name Like: Dhaka,Bangladesh"
            );
            userLocation.innerText =
                "We thing that Your location isn't correct give us a location like:London,Uk ";
            console.log(err);
        });
});
