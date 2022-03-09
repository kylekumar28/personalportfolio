let map;

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const centerPosition = { lat: 51.0607, lng: -1.3132 };
  // The map, centered at Winchester roughly
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: centerPosition,
  });

  addMarkers();
}

let data = [
  {
    position: { lat: 50.7192, lng: -1.8808 },
    title: '10th January - First trip to Bournemouth',
  },
  {
    position: { lat: 50.921382, lng: -1.209897 },
    title: 'First uni hotel sleepover',
  },
  {
    position: { lat: 50.885162, lng: -1.245668 },
    title: 'First uni hotel sleepover - went for dinner',
  },
  {
    position: { lat: 51.06, lng: -1.3277 },
    title: 'University of Winchester',
  },
  {
    position: { lat: 53.40124, lng: -1.3277 },
    title: 'Sheffield BUCS',
  },
];

function addMarkers() {
  for (let i = 0; i < data.length; i++) {
    const marker = new google.maps.Marker({
      position: data[i].position,
      map,
      title: data[i].title,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: data[i].title,
    });

    marker.addListener('click', () => {
      infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
}
