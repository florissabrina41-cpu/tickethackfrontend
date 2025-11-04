
  const search = document.getElementById('searchBtn');

  search.addEventListener('click', function () {
    
  const departure = document.getElementById('Departure').value;
    const arrival = document.getElementById('arrival').value;
    const date = document.getElementById('date').value;
    console.log (departure, arrival,date); 

    // Appel endpoint /byDate
  
     fetch('http://localhost:3000/trips/byDate') 
      method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ departure, arrival, date })

    .then(response => response.json())
    .then (data => {console.log (data)})
      });

     

      // AFFICHER LES RESULATS
      /*const resultsDiv = document.getElementById('div2');
      resultsDiv.innerHTML = data.trips.map(trip => `
        <div class="trip">
          <p>${trip.departure} → ${trip.arrival} on ${new Date(trip.date).toLocaleDateString()}</p>
        </div>
      `).join('');

    } catch (error) {
      console.error(error);
    }*/
  
