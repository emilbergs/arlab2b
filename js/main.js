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
  const yearOne = db.collection("yearOne")
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


/* charts */


let _datas = [];
yearOne.onSnapshot(function (snapshotData) {
  snapshotData.forEach(function (doc) {
    let dataOne = doc.data();
    dataOne.id = doc.id;
    _datas.push(dataOne)
  })
});
console.log(_datas)

function appendData(datas) {
  for (let data in datas) {
   let _dataPrYear = [{
      year: "2015",
      yearCows: data.yearCows
    }];
    console.log(_dataPrYear)
  }
}
appendData(_datas)

let dataPrYear = [{
  year: "2015",
  cows: 51
}, 
{
  year: "2016",
  cows: 50
}, 
{
  year: "2017",
  cows: 49
}, 
{
  year: "2018",
  cows: 51
}, 
{
  year: "2019",
  cows: 50
}
];
// 2: prepare data for chart
// seperating the objects to arrays: months and sales
// why? that's how chart.js reads the data :)
function prepareData(data) {
  // declaring two array to store the data 
  let years = [];
  let cows = [];
  // looping through the data array
  for (const object of data) {
    // adding the values to the different arrays
    years.push(object.year);
    cows.push(object.cows);
  }
  // returning the two arrays (months & sales) inside and object
  // we cannot return to values - that's why we have to do it inside an array
  return {
    years,
    cows
  };
}

// 3: create and append the chart
function appendChart(cowData) {
  // using prepareData() to get the excact data we want
  let data = prepareData(cowData);
  //open the developer console to inspect the result
  console.log(data);
  let chartContainer = document.getElementById('chartContainer');
  let chart = new Chart(chartContainer, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: data.years, // refering to the data object, holding data from prepareData()
      datasets: [{
        data: data.cows, // refering to the data object, holding data from prepareData()
        label: 'Cows each year',
        backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
        borderColor: 'rgb(255, 99, 132)'
      }]
    },
    // Configuration options goes here
    // Go to the docs to find more: https://www.chartjs.org/docs/latest/
    options: {
      title: {
        display: true,
        text: 'Cows'
      }
    }

  });
}

appendChart(dataPrYear);


