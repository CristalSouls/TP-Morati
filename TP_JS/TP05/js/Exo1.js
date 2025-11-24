    const x = document.querySelector("#demo");
    const button = document.querySelector("#button");


    function showPosition(position) {
        x.innerHTML =
            "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude +
            "<br>Altitude: " + position.coords.altitude +
            "<br>Présition: " + position.coords.accuracy +
            "<br>Vitesse: " + position.coords.speed;
    }

    button.addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
    }
    })
    
    window.addEventListener("load")