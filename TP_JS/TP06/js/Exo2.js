const recuperation = document.querySelector("#recuperation");
const envoi = document.querySelector("#envoi");
const nouvelleVille = document.querySelector("#nouvelleVille");

function meteo() {
  fetch("https://www.prevision-meteo.ch/services/json/" + nouvelleVille.value)
    .then((resp) => resp.json())
    .then((info) => {
      // var liv = JSON.stringify(data);
      // const tmp = document.querySelector("#tmp");
      // const wnd_spd = document.querySelector("#wnd_spd");
      // const wnd_gust = document.querySelector("#wnd_gust");
      // const pressure = document.querySelector("#pressure");
      // const humidity = document.querySelector("#humidity");
      // const tmin = document.querySelector("#tmin");
      // const tmax = document.querySelector("#tmax");

      // tmp.innerHTML = "Température : " + info.current_condition.tmp + "°C";
      // wnd_spd.innerHTML = "Vitesse du vent : " + info.current_condition.wnd_spd + " Km/h";
      // wnd_gust.innerHTML = "Vitesse du vent en rafale : " + info.current_condition.wnd_gust + " Km/h";
      // pressure.innerHTML = "Pression : " + info.current_condition.pressure + " Hpa";
      // humidity.innerHTML = "Humidité : " + info.current_condition.humidity + " %";
      // tmin.innerHTML = "Température minimale : " + info.fcst_day_0.tmin + "°C";
      // tmax.innerHTML = "Température maximale : " + info.fcst_day_0.tmax + "°C";
      // tmp.innerHTML = "Température : " + info.current_condition.tmp + "°C";
      console.log(info);

      recuperation.innerHTML =
        "Ville : " + info.city_info.name + " <br>" +
        "Latitude : " + info.city_info.latitude + " <br>" +
        "Longitude : " + info.city_info.longitude + " <br>" +
        "météo du : " + info.current_condition.date + " à " + info.current_condition.hour +" <br>" +
        "Température : " + info.current_condition.tmp + "°C <br>" +
        "Temps actuel : " + info.fcst_day_0.condition + "<br>" +
        "<img src=" + info.current_condition.icon + ">";
             
    })
    .catch(function (error) {
      recuperation.innerHTML = " Entrée le departement ";

      fetch("https://www.prevision-meteo.ch/services/json/" + nouvelleVille.value + "-" + "")
        .then((resp) => resp.json())
        .then((info) => {
        console.log(info);

        recuperation.innerHTML =
          "Ville : " + info.city_info.name + " <br>" +
          "Latitude : " + info.city_info.latitude + " <br>" +
          "Longitude : " + info.city_info.longitude + " <br>" +
          "météo du : " + info.current_condition.date + " à " + info.current_condition.hour +" <br>" +
          "Température : " + info.current_condition.tmp + "°C <br>" +
          "Temps actuel : " + info.fcst_day_0.condition + "<br>" +
          "<img src=" + info.current_condition.icon + ">";
    })

    });
}

envoi.addEventListener("click", meteo);