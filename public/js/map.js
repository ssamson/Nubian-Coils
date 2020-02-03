mapboxgl.accessToken =
  "pk.eyJ1Ijoidmlsb2thbiIsImEiOiJjazY2cm0wM20wNHk2M29wdzR4c2U2Y2lqIn0.56LJo0DI2zcyjsJEPbNBYg";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 9,
  center: [-71.057083, 42.361145]
});

// fetch salons from API
async function getSalons() {
  const res = await fetch("/api/v1/salons");
  const data = await res.json();

  const salons = data.data.map(salon => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
          salon.location.coordinates[0],
          salon.location.coordinates[1]
        ]
      },
      properties: {
        salonId: salon.salonId,
        icon: "shop"
      }
    };
  });

  loadMap(salons);
}

// load map with salons
function loadMap(salons) {
  map.on("load", function() {
    map.addLayer({
      id: "points",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: salons
        }
      },
      layout: {
        "icon-image": "{icon}-15",
        "icon-size": 1.5,
        "text-field": "{salonId}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.9],
        "text-anchor": "top"
      }
    });
  });
}

getSalons();
