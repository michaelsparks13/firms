mapboxgl.accessToken =
  "pk.eyJ1IjoibWljaGFlbHNwYXJrczEzIiwiYSI6ImNsMmRoczNjMDAwMWkzYm10dzRyb3gxenQifQ.56aTkg40fV3OsQibg27VEA";

const map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/michaelsparks13/cl363ql7j001t15o5z2fvg5qg",
  minzoom: 4,
  center: [-95.9979883, 41.2523634], // starting position [lng, lat]
  zoom: 5, // starting zoom
});


const fireInfo = document.getElementById('fireInfo')
map.on('mousemove', (e) => {
    // console.log(e)
    const fires = map.queryRenderedFeatures(e.point);
    fireInfo.innerHTML = fires[0].layer.id == "thermal anomalies"
      ? `<p>Fire observed on <strong>${fires[0].properties.ACQ_DATE.slice(0,10)}</strong> at <strong>${fires[0].properties.ACQ_TIME.slice(0,2)}:${fires[0].properties.ACQ_TIME.slice(2)}</strong> with <strong>${fires[0].properties.CONFIDENCE}</strong> confidence that it represents a true fire on the ground.</p>`
      : `<p>Hover over a fire!</p>`;
  });

  map.getCanvas().style.cursor = 'default';




const modal = document.getElementById("dataModal");
const btn = document.getElementById("dataBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}