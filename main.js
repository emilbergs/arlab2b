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
  let checkboxFilter = document.getElementsByName("checkboxFilter");
  Array.prototype.forEach.call(checkboxFilter,function(el){
  	el.checked = false;
  });
  id.checked = true;
}
function selectOnlyThisRegion(id){
  let checkboxRegion = document.getElementsByName("checkboxRegion");
  Array.prototype.forEach.call(checkboxRegion,function(el){
  	el.checked = false;
  });
  id.checked = true;
}


let nordjylland = document.querySelector("#nordjylland")
let midtjylland = document.querySelector("#midtjylland")
let syddanmark = document.querySelector("#syddanmark")
let sjælland = document.querySelector("#sjælland")
let hovedstaden = document.querySelector("#hovedstaden")



function skiftRegion() {
  let vælgRegion = document.querySelector("#vælgRegion").value
  console.log(vælgRegion)
  let template = '';
  if (vælgRegion === "nordjylland") {
    template += /*html*/ `
              <div class="flex">
                  <label for="cowsBox">Nordjylland Gård 1</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 2</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 3</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 4</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 5</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
              </div>
              `
  } else if (vælgRegion === "midtjylland") {
    template += /*html*/ `
              <div class="flex">
                  <label for="cowsBox">Midtjylland Gård 1</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 2</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 3</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 4</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 5</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
              </div>
              `
  } else if (vælgRegion === "syddanmark") {
    template += /*html*/ `
              <div class="flex">
                  <label for="cowsBox">Syddanmark Gård 1</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 2</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 3</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 4</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 5</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
              </div>
              `
  } else if (vælgRegion === "sjælland") {
    template += /*html*/ `
              <div class="flex">
                  <label for="cowsBox">Sjælland Gård 1</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 2</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 3</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 4</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 5</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
              </div>
              `
  } else if (vælgRegion === "hovedstaden") {
    template += /*html*/ `
              <div class="flex">
                  <label for="cowsBox">Hovedstaden Gård 1</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 2</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 3</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 4</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="cowsBox">Gård 5</label>
                  <input type="checkbox" id="cowsBox" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
              </div>
              `
  }
  document.querySelector("#gårdIRegion").innerHTML = template
}
