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
                  <label for="">Nordjylland Gård 1</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 2</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 3</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 4</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 5</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
              </div>
              `
  } else if (vælgRegion === "midtjylland") {
    template += /*html*/ `
              <div class="flex">
                  <label for="">Midtjylland Gård 1</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 2</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 3</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 4</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 5</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
              </div>
              `
  } else if (vælgRegion === "syddanmark") {
    template += /*html*/ `
              <div class="flex">
                  <label for="">Syddanmark Gård 1</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 2</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 3</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 4</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 5</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
              </div>
              `
  } else if (vælgRegion === "sjælland") {
    template += /*html*/ `
              <div class="flex">
                  <label for="">Sjælland Gård 1</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 2</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 3</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 4</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 5</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
              </div>
              `
  } else if (vælgRegion === "hovedstaden") {
    template += /*html*/ `
              <div class="flex">
                  <label for="">Hovedstaden Gård 1</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 2</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 3</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 4</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
                </div>
                <div class="flex">
                  <label for="">Gård 5</label>
                  <input type="checkbox" id="" name="checkboxRegion" onclick="selectOnlyThisRegion(this)">
              </div>
              `
  }
  document.querySelector("#gårdIRegion").innerHTML = template
}


  let cowBox = document.querySelector("#cowBox");
  let milkBox = document.querySelector("#milkBox");
  let dieselBox = document.querySelector("#dieselBox");
  let electricityBox = document.querySelector("#electricityBox");
  let dryMatterBox = document.querySelector("#dryMatterBox");
  let selfFeedBox = document.querySelector("#selfFeedBox");
  let footprint = document.querySelector("#footprint");
  let chartContainer1 = document.querySelector("#chartContainer1")
  let chartContainer2 = document.querySelector("#chartContainer2")
  let chartContainer3 = document.querySelector("#chartContainer3")
  let chartContainer4 = document.querySelector("#chartContainer4")
  let chartContainer5 = document.querySelector("#chartContainer5")
  let chartContainer6 = document.querySelector("#chartContainer6")
  let chartContainer7 = document.querySelector("#chartContainer7")

function displayChart() {
  if (cowBox.checked == true) {
    chartContainer1.style.display = "block";
    chartContainer2.style.display = "none";
    chartContainer3.style.display = "none";
    chartContainer4.style.display = "none";
    chartContainer5.style.display = "none";
    chartContainer6.style.display = "none";
    chartContainer7.style.display = "none";
  } else if (milkBox.checked == true) {
    chartContainer1.style.display = "none";
    chartContainer2.style.display = "block";
    chartContainer3.style.display = "none";
    chartContainer4.style.display = "none";
    chartContainer5.style.display = "none";
    chartContainer6.style.display = "none";
    chartContainer7.style.display = "none";
  } else if (dieselBox.checked == true) {
    chartContainer1.style.display = "none";
    chartContainer2.style.display = "none";
    chartContainer3.style.display = "block";
    chartContainer4.style.display = "none";
    chartContainer5.style.display = "none";
    chartContainer6.style.display = "none";
    chartContainer7.style.display = "none";
  } else if (electricityBox.checked == true) {
    chartContainer1.style.display = "none";
    chartContainer2.style.display = "none";
    chartContainer3.style.display = "none";
    chartContainer4.style.display = "block";
    chartContainer5.style.display = "none";
    chartContainer6.style.display = "none";
    chartContainer7.style.display = "none";
  } else if (dryMatterBox.checked == true) {
    chartContainer1.style.display = "none";
    chartContainer2.style.display = "none";
    chartContainer3.style.display = "none";
    chartContainer4.style.display = "none";
    chartContainer5.style.display = "block";
    chartContainer6.style.display = "none";
    chartContainer7.style.display = "none";
  } else if (selfFeedBox.checked == true) {
    chartContainer1.style.display = "none";
    chartContainer2.style.display = "none";
    chartContainer3.style.display = "none";
    chartContainer4.style.display = "none";
    chartContainer5.style.display = "none";
    chartContainer6.style.display = "block";
    chartContainer7.style.display = "none";
  } else if (footprint.checked == true) {
    chartContainer1.style.display = "none";
    chartContainer2.style.display = "none";
    chartContainer3.style.display = "none";
    chartContainer4.style.display = "none";
    chartContainer5.style.display = "none";
    chartContainer6.style.display = "none";
    chartContainer7.style.display = "block";
  } 
}

function selectOnlyThisFilter(id){
  let checkboxFilter = document.getElementsByName("checkboxFilter");
  Array.prototype.forEach.call(checkboxFilter,function(el){
  	el.checked = false;
  });
  id.checked = true;
  displayChart()
}
function selectOnlyThisRegion(id){
  let checkboxRegion = document.getElementsByName("checkboxRegion");
  Array.prototype.forEach.call(checkboxRegion,function(el){
  	el.checked = false;
  });
  id.checked = true;
}

