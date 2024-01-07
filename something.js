const { getJson } = require("serpapi");
const express = require("express");
const { all } = require("axios");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const Alabama = { lng: 32.806671, lat: -86.79113 };
const Alaska = { lat: 61.370716, lng: -152.404419 };
const Arizona = { lat: 33.729759, lng: -111.431221 };
const Arkansas = { lat: 34.969704, lng: -92.373123 };
const California = { lat: 36.116203, lng: -119.681564 };
const Colorado = { lat: 39.059811, lng: -105.311104 };
const Connecticut = { lat: 41.597782, lng: -72.755371 };
const Delaware = { lat: 39.318523, lng: -75.507141 };
const DistrictofColumbia = { lat: 38.897438, lng: -77.026817 };
const Florida = { lat: 27.766279, lng: -81.686783 };
const Georgia = { lat: 33.040619, lng: -83.643074 };
const Hawaii = { lat: 21.094318, lng: -157.498337 };
const Idaho = { lat: 44.240459, lng: -114.478828 };
const Illinois = { lat: 40.349457, lng: -88.986137 };
const Indiana = { lat: 39.849426, lng: -86.258278 };
const Iowa = { lat: 42.011539, lng: -93.210526 };
const Kansas = { lat: 38.5266, lng: -96.726486 };
const Kentucky = { lat: 37.66814, lng: -84.670067 };
// const Louisiana	= 31.169546	-91.867805
// const Maine	= 44.693947	-69.381927
// const Maryland	= 39.063946	-76.802101
// const Massachusetts	= 42.230171	-71.530106
// const Michigan	= 43.326618	-84.536095
// const Minnesota	= 45.694454	-93.900192
// const Mississippi	= 32.741646	-89.678696
// const Missouri	= 38.456085	-92.288368
// const Montana	= 46.921925	-110.454353
// const Nebraska	= 41.125370	-98.268082
// const Nevada	= 38.313515	-117.055374
// const New Hampshire	= 43.452492	-71.563896
// const New Jersey	= 40.298904	-74.521011
// const New Mexico	= 34.840515	-106.248482
// const New York	= 42.165726	-74.948051
// const North Carolina	= 35.630066	-79.806419
// const North Dakota	= 47.528912	-99.784012
// const Ohio	= 40.388783	-82.764915
// const Oklahoma	= 35.565342	-96.928917
// const Oregon	= 44.572021	-122.070938
// const Pennsylvania	= 40.590752	-77.209755
// const Rhode Island	= 41.680893	-71.511780
// const South Carolina	= 33.856892	-80.945007
// const South Dakota	= 44.299782	-99.438828
// const Tennessee	= 35.747845	-86.692345
const Texas = { lat: 31.054487, lng: -97.563461 };
// const Utah	= 40.150032	-111.862434
// const Vermont	= 44.045876	-72.710686
// const Virginia	= 37.769337	-78.169968
// const Washington	= 47.400902	-121.490494
// const West Virginia	= 38.491226	-80.954453
// const Wisconsin	= 44.268543	-89.616508
// const Wyoming	= 42.755966	-107.302490

const allStatesArray = [
  //   Alabama,
  Alaska,
  //   Arizona,
  //   Arkansas,
  //   California,
  //   Colorado,
  //   Connecticut,
  //   Delaware,
  //   DistrictofColumbia,
  //   Florida,
  //   Georgia,
  //   Hawaii,
  //   Idaho,
  //   Illinois,
  //   Indiana,
  //   Iowa,
  //   Kansas,
  //   Kentucky,
  //   Texas,
];

function x() {
  let allStatesWithoutWebsite = [];
  let allStatesWithWebsite = [];

  const businessesWithoutWebsites = [];
  const businessesWithWebsites = [];
  allStatesArray.map((field) => {
    getJson(
      {
        engine: "google_maps",
        q: "restaurant",
        //map over this
        ll: `@${field.lat}, ${field.lng}, 15.1z`,
        type: "search",
        api_key:
          "b6c1800d9d2275dfe77f595087ce3f22756f1e619d0ea825dffd465deaa7934f",
      },
      (json) => {
        // console.log("json", json);
        if (json && json.local_results) {
          let returnedPlaces = json.local_results;
          returnedPlaces.map((field) => {
            if (field.website) {
              businessesWithWebsites.push({
                name: field.title,
                website: field.website,
              });
            } else businessesWithoutWebsites.push(field);
          });
          //   console.log("w/Website", businessesWithWebsites);
          console.log("w/oWebsite", businessesWithoutWebsites);
        }
      }
    );
  });
  return businessesWithoutWebsites;
}
let bla = x();
console.log("bla", bla);

// getJson(
//   {
//     engine: "google_maps",
//     q: "pizza",
//     //map over this
//     ll: "@40.7455096,-74.0083012,15.1z",
//     type: "search",
//     api_key: "b6c1800d9d2275dfe77f595087ce3f22756f1e619d0ea825dffd465deaa7934f",
//   },
//   (json) => {
//     const businessesWithWebsites = [];
//     const businessesWithoutWebsites = [];
//     if (json && json.local_results) {
//       let returnedPlaces = json.local_results;
//       returnedPlaces.map((field) => {
//         if (field.website) {
//           businessesWithWebsites.push({
//             name: field.title,
//             website: field.website,
//           });
//         } else businessesWithoutWebsites.push(field);
//       });
//       console.log(businessesWithWebsites);
//       console.log(businessesWithoutWebsites);
//     }
//   }
// );
