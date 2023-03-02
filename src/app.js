function showCities() {
  let citiesElement = document.querySelector("#cities");
  let cities = ["America/New_York", "America/Mexico_City", "Australia/Sydney"];
  citiesElement.innerHTML = cities
    .map(function showCity(city) {
      return `<div class="city" id="${city}">
          <div class="date-place">
            <h2>${city.substring(city.indexOf("/") + 1).replace("_", " ")}</h2>
            <div class="date">${moment
              .tz(city)
              .format("dddd Do MMMM YYYY")}</div>
          </div>
          <div class="time">${moment.tz(city).format("HH:mm:ss")}</div>
        </div>`;
    })
    .join("");
}
showCities();
setInterval(showCities, 1000);
