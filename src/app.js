function startInterval() {
  citiesInterval = setInterval(showCities, 1000);
}
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
function openOptions(event) {
  let continent = event.target.value;
  if (continent.length > 0) {
    if (continent === "africa") {
      document.getElementById("africa").style.display = "block";
      document.getElementById("americas").style.display = "none";
      document.getElementById("asia").style.display = "none";
      document.getElementById("australia").style.display = "none";
      document.getElementById("europe").style.display = "none";
      document.getElementById("antarctica").style.display = "none";
      document.getElementById("atlantic").style.display = "none";
      document.getElementById("indian").style.display = "none";
      document.getElementById("pacific").style.display = "none";
    }
    if (continent === "americas") {
      document.getElementById("africa").style.display = "none";
      document.getElementById("americas").style.display = "block";
      document.getElementById("asia").style.display = "none";
      document.getElementById("australia").style.display = "none";
      document.getElementById("europe").style.display = "none";
      document.getElementById("antarctica").style.display = "none";
      document.getElementById("atlantic").style.display = "none";
      document.getElementById("indian").style.display = "none";
      document.getElementById("pacific").style.display = "none";
    }
    if (continent === "asia") {
      document.getElementById("africa").style.display = "none";
      document.getElementById("americas").style.display = "none";
      document.getElementById("asia").style.display = "block";
      document.getElementById("australia").style.display = "none";
      document.getElementById("europe").style.display = "none";
      document.getElementById("antarctica").style.display = "none";
      document.getElementById("atlantic").style.display = "none";
      document.getElementById("indian").style.display = "none";
      document.getElementById("pacific").style.display = "none";
    }
    if (continent === "australia") {
      document.getElementById("africa").style.display = "none";
      document.getElementById("americas").style.display = "none";
      document.getElementById("asia").style.display = "none";
      document.getElementById("australia").style.display = "block";
      document.getElementById("europe").style.display = "none";
      document.getElementById("antarctica").style.display = "none";
      document.getElementById("atlantic").style.display = "none";
      document.getElementById("indian").style.display = "none";
      document.getElementById("pacific").style.display = "none";
    }
    if (continent === "europe") {
      document.getElementById("africa").style.display = "none";
      document.getElementById("americas").style.display = "none";
      document.getElementById("asia").style.display = "none";
      document.getElementById("australia").style.display = "none";
      document.getElementById("europe").style.display = "block";
      document.getElementById("antarctica").style.display = "none";
      document.getElementById("atlantic").style.display = "none";
      document.getElementById("indian").style.display = "none";
      document.getElementById("pacific").style.display = "none";
    }
    if (continent === "antarctica") {
      document.getElementById("africa").style.display = "none";
      document.getElementById("americas").style.display = "none";
      document.getElementById("asia").style.display = "none";
      document.getElementById("australia").style.display = "none";
      document.getElementById("europe").style.display = "none";
      document.getElementById("antarctica").style.display = "block";
      document.getElementById("atlantic").style.display = "none";
      document.getElementById("indian").style.display = "none";
      document.getElementById("pacific").style.display = "none";
    }
    if (continent === "atlantic") {
      document.getElementById("africa").style.display = "none";
      document.getElementById("americas").style.display = "none";
      document.getElementById("asia").style.display = "none";
      document.getElementById("australia").style.display = "none";
      document.getElementById("europe").style.display = "none";
      document.getElementById("antarctica").style.display = "none";
      document.getElementById("atlantic").style.display = "block";
      document.getElementById("indian").style.display = "none";
      document.getElementById("pacific").style.display = "none";
    }
    if (continent === "indian") {
      document.getElementById("africa").style.display = "none";
      document.getElementById("americas").style.display = "none";
      document.getElementById("asia").style.display = "none";
      document.getElementById("australia").style.display = "none";
      document.getElementById("europe").style.display = "none";
      document.getElementById("antarctica").style.display = "none";
      document.getElementById("atlantic").style.display = "none";
      document.getElementById("indian").style.display = "block";
      document.getElementById("pacific").style.display = "none";
    }
    if (continent === "pacific") {
      document.getElementById("africa").style.display = "none";
      document.getElementById("americas").style.display = "none";
      document.getElementById("asia").style.display = "none";
      document.getElementById("australia").style.display = "none";
      document.getElementById("europe").style.display = "none";
      document.getElementById("antarctica").style.display = "none";
      document.getElementById("atlantic").style.display = "none";
      document.getElementById("indian").style.display = "none";
      document.getElementById("pacific").style.display = "block";
    }
  } else {
    showCities();
    clearInterval(choiceInterval);
    startInterval();
    document.getElementById("africa").style.display = "none";
    document.getElementById("americas").style.display = "none";
    document.getElementById("asia").style.display = "none";
    document.getElementById("australia").style.display = "none";
    document.getElementById("europe").style.display = "none";
    document.getElementById("antarctica").style.display = "none";
    document.getElementById("atlantic").style.display = "none";
    document.getElementById("indian").style.display = "none";
    document.getElementById("pacific").style.display = "none";
  }
}
function choiceCities(timezone) {
  let displayArea = document.querySelector("#cities");
  if (timezone.length > 0) {
    displayArea.innerHTML = `<div class="city" >
          <div class="date-place">
            <h2>${timezone
              .substring(timezone.indexOf("/") + 1)
              .replace("_", " ")}</h2>
            <div class="date">${moment
              .tz(timezone)
              .format("dddd Do MMMM YYYY")}</div>
          </div>
          <div class="time">${moment.tz(timezone).format("HH:mm:ss")}</div>
        </div>`;
  }
}
function showTimezone(event) {
  clearInterval(citiesInterval);
  let timezone = event.target.value;
  choiceCities(timezone);
  choiceInterval = setInterval(() => {
    choiceCities(timezone);
  }, 1000);
}
showCities();
startInterval();
let continentSelect = document.querySelector("#continents");
continentSelect.addEventListener("change", openOptions);

let africaCities = document.querySelector("#africa");
let americasCities = document.querySelector("#americas");
let antarcticaCities = document.querySelector("#antarctica");
let asiaCities = document.querySelector("#asia");
let atlanticCities = document.querySelector("#atlantic");
let australiaCities = document.querySelector("#australia");
let europeCities = document.querySelector("#europe");
let indianCities = document.querySelector("#indian");
let pacificCities = document.querySelector("#pacific");
africaCities.addEventListener("change", showTimezone);
americasCities.addEventListener("change", showTimezone);
antarcticaCities.addEventListener("change", showTimezone);
asiaCities.addEventListener("change", showTimezone);
atlanticCities.addEventListener("change", showTimezone);
australiaCities.addEventListener("change", showTimezone);
europeCities.addEventListener("change", showTimezone);
indianCities.addEventListener("change", showTimezone);
pacificCities.addEventListener("change", showTimezone);
