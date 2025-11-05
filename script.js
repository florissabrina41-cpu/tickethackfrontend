const search = document.getElementById("searchBtn");

search.addEventListener("click", function () {
  const departure = document.getElementById("Departure").value;
  const arrival = document.getElementById("arrival").value;
  const date = document.getElementById("date").value;

  console.log(departure, arrival, date);

  // Appel endpoint /byDate
  fetch("http://localhost:3000/trips/byDate", {
    method: "POST", // :warning: il fallait mettre ça dans l'objet options
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ departure, arrival, date }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // AFFICHER LES RESULTATS
      const resultsDiv = document.getElementById("div2");
      if (data.trips && data.trips.length > 0) {
        resultsDiv.innerHTML = data.trips
          .map(
            (trip) => `
    <div class="trip">
      <div class="trajet">${trip.departure} > ${trip.arrival}      
      ${new Date(trip.date).toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      })} <button class= "btn-book">Book</button>
      </div>
      <div class="id-trip">${trip._id}</div>
            
    </div>
  `
          )
          .join("");
      } else {
        resultsDiv.innerHTML = "<p>Aucun voyage trouvé</p>";
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
