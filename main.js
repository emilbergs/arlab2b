// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAVSwKbEz7o7mDUACg2SFIyAvqhsX1FIEs",
  authDomain: "arlab2b-cc293.firebaseapp.com",
  databaseURL: "https://arlab2b-cc293.firebaseio.com",
  projectId: "arlab2b-cc293",
  storageBucket: "arlab2b-cc293.appspot.com",
  messagingSenderId: "708643905623",
  appId: "1:708643905623:web:c621d5099116614ce4c312"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const yearSix = db.collection("yearSix");


function createUser() {
  // references to the input fields
  let nrCowsInput = document.querySelector("#nrCows");
  let kgMilkInput = document.querySelector("#kgMilk");
  let dieselInput = document.querySelector("#diesel");
  let electricityInput = document.querySelector("#electricity");
  let dryMatterInput = document.querySelector("#dryMatter");
  let selfFeedInput = document.querySelector("#selfFeed");

  console.log(nrCowsInput.value);
  

  let newUser = {
      yearCows: nrCowsInput.value,
      kgMilk: kgMilkInput.value,
      diesel: dieselInput.value,
      electricity: electricityInput.value,
      dryMatter: dryMatterInput.value,
      selfFeed: selfFeedInput.value
  };
  yearSix.add(newUser);
}

function selectOnlyThisFilter(id){
  var myCheckbox = document.getElementsByName("checkboxFilter");
  Array.prototype.forEach.call(myCheckbox,function(el){
  	el.checked = false;
  });
  id.checked = true;
}
function selectOnlyThisRegion(id){
  var myCheckbox = document.getElementsByName("checkboxRegion");
  Array.prototype.forEach.call(myCheckbox,function(el){
  	el.checked = false;
  });
  id.checked = true;
}

let vælgRegion = document.querySelector("#vælgRegion").value
let nordjylland = document.querySelector("#nordjylland")
let midtjylland = document.querySelector("#midtjylland")
let syddanmark = document.querySelector("#syddanmark")
let sjælland = document.querySelector("#sjælland")
let hovedstaden = document.querySelector("#hovedstaden")



function skiftRegion() {
  console.log(vælgRegion)
  if (vælgRegion === "nordjylland") {
    nordjylland.style.display = "block"
    midtjylland.style.display = "none"
    syddanmark.style.display = "none"
    sjælland.style.display = "none"
    hovedstaden.style.display = "none"
  } else if (vælgRegion === "midtjylland") {
    nordjylland.style.display = "none"
    midtjylland.style.display = "block"
    syddanmark.style.display = "none"
    sjælland.style.display = "none"
    hovedstaden.style.display = "none"
  } else if (vælgRegion === "syddanmark") {
    nordjylland.style.display = "none"
    midtjylland.style.display = "none"
    syddanmark.style.display = "block"
    sjælland.style.display = "none"
    hovedstaden.style.display = "none"
  } else if (vælgRegion === "sjælland") {
    nordjylland.style.display = "none"
    midtjylland.style.display = "none"
    syddanmark.style.display = "none"
    sjælland.style.display = "block"
    hovedstaden.style.display = "none"
  } else if (vælgRegion === "hovedstaden") {
    nordjylland.style.display = "none"
    midtjylland.style.display = "none"
    syddanmark.style.display = "none"
    sjælland.style.display = "none"
    hovedstaden.style.display = "block"
  }
}
