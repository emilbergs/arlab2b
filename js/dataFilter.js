let nordjylland = document.querySelector("#nordjylland")
let midtjylland = document.querySelector("#midtjylland")
let syddanmark = document.querySelector("#syddanmark")
let sjælland = document.querySelector("#sjælland")
let hovedstaden = document.querySelector("#hovedstaden")
let nj = document.querySelector("#nj");
let mj = document.querySelector("#mj");
let sd = document.querySelector("#sd");
let sl = document.querySelector("#sl");
let hs = document.querySelector("#hs");



function skiftRegion() {
  let vælgRegion = document.querySelector("#vælgRegion").value
  console.log(vælgRegion)
  if (vælgRegion === "nordjylland") {
    nj.style.display = "block";
    mj.style.display = "none";
    sd.style.display = "none";
    sl.style.display = "none";
    hs.style.display = "none";
  } else if (vælgRegion === "midtjylland") {
    nj.style.display = "none";
    mj.style.display = "block";
    sd.style.display = "none";
    sl.style.display = "none";
    hs.style.display = "none";
  } else if (vælgRegion === "syddanmark") {
    sd.style.display = "block";
    sl.style.display = "none";
    hs.style.display = "none";
    nj.style.display = "none";
    mj.style.display = "none";
  } else if (vælgRegion === "sjælland") {
    sl.style.display = "block";
    nj.style.display = "none";
    mj.style.display = "none";
    sd.style.display = "none";
    hs.style.display = "none";
  } else if (vælgRegion === "hovedstaden") {
    hs.style.display = "block";
    nj.style.display = "none";
    mj.style.display = "none";
    sd.style.display = "none";
    sl.style.display = "none";
  } else if (vælgRegion === "dineData") {
    nj.style.display = "none";
    mj.style.display = "none";
    sd.style.display = "none";
    sl.style.display = "none";
    hs.style.display = "none";
  }
}


  let cowBox = document.querySelector("#cowBox");
  let milkBox = document.querySelector("#milkBox");
  let dieselBox = document.querySelector("#dieselBox");
  let electricityBox = document.querySelector("#electricityBox");
  let dryMatterBox = document.querySelector("#dryMatterBox");
  let selfFeedBox = document.querySelector("#selfFeedBox");
  let footprint = document.querySelector("#footprint");
  let user1ChartContainer1 = document.querySelector("#user1ChartContainer1")
  let user1ChartContainer2 = document.querySelector("#user1ChartContainer2")
  let user1ChartContainer3 = document.querySelector("#user1ChartContainer3")
  let user1ChartContainer4 = document.querySelector("#user1ChartContainer4")
  let user1ChartContainer5 = document.querySelector("#user1ChartContainer5")
  let user1ChartContainer6 = document.querySelector("#user1ChartContainer6")
  let user1ChartContainer7 = document.querySelector("#user1ChartContainer7")
  let user2ChartContainer1 = document.querySelector("#user2ChartContainer1")
  let user2ChartContainer2 = document.querySelector("#user2ChartContainer2")
  let user2ChartContainer3 = document.querySelector("#user2ChartContainer3")
  let user2ChartContainer4 = document.querySelector("#user2ChartContainer4")
  let user2ChartContainer5 = document.querySelector("#user2ChartContainer5")
  let user2ChartContainer6 = document.querySelector("#user2ChartContainer6")
  let user2ChartContainer7 = document.querySelector("#user2ChartContainer7")
  let user3ChartContainer1 = document.querySelector("#user3ChartContainer1")
  let user3ChartContainer2 = document.querySelector("#user3ChartContainer2")
  let user3ChartContainer3 = document.querySelector("#user3ChartContainer3")
  let user3ChartContainer4 = document.querySelector("#user3ChartContainer4")
  let user3ChartContainer5 = document.querySelector("#user3ChartContainer5")
  let user3ChartContainer6 = document.querySelector("#user3ChartContainer6")
  let user3ChartContainer7 = document.querySelector("#user3ChartContainer7")

function displayChart() {
  if (cowBox.checked == true) {
    user1ChartContainer1.style.display = "block";
    user1ChartContainer2.style.display = "none";
    user1ChartContainer3.style.display = "none";
    user1ChartContainer4.style.display = "none";
    user1ChartContainer5.style.display = "none";
    user1ChartContainer6.style.display = "none";
    user1ChartContainer7.style.display = "none";
    user2ChartContainer1.style.display = "block";
    user2ChartContainer2.style.display = "none";
    user2ChartContainer3.style.display = "none";
    user2ChartContainer4.style.display = "none";
    user2ChartContainer5.style.display = "none";
    user2ChartContainer6.style.display = "none";
    user2ChartContainer7.style.display = "none";
    user3ChartContainer1.style.display = "block";
    user3ChartContainer2.style.display = "none";
    user3ChartContainer3.style.display = "none";
    user3ChartContainer4.style.display = "none";
    user3ChartContainer5.style.display = "none";
    user3ChartContainer6.style.display = "none";
    user3ChartContainer7.style.display = "none";
    user4ChartContainer1.style.display = "block";
    user4ChartContainer2.style.display = "none";
    user4ChartContainer3.style.display = "none";
    user4ChartContainer4.style.display = "none";
    user4ChartContainer5.style.display = "none";
    user4ChartContainer6.style.display = "none";
    user4ChartContainer7.style.display = "none";
    user5ChartContainer1.style.display = "block";
    user5ChartContainer2.style.display = "none";
    user5ChartContainer3.style.display = "none";
    user5ChartContainer4.style.display = "none";
    user5ChartContainer5.style.display = "none";
    user5ChartContainer6.style.display = "none";
    user5ChartContainer7.style.display = "none";
    user6ChartContainer1.style.display = "block";
    user6ChartContainer2.style.display = "none";
    user6ChartContainer3.style.display = "none";
    user6ChartContainer4.style.display = "none";
    user6ChartContainer5.style.display = "none";
    user6ChartContainer6.style.display = "none";
    user6ChartContainer7.style.display = "none";
    user7ChartContainer1.style.display = "block";
    user7ChartContainer2.style.display = "none";
    user7ChartContainer3.style.display = "none";
    user7ChartContainer4.style.display = "none";
    user7ChartContainer5.style.display = "none";
    user7ChartContainer6.style.display = "none";
    user7ChartContainer7.style.display = "none";
    user8ChartContainer1.style.display = "block";
    user8ChartContainer2.style.display = "none";
    user8ChartContainer3.style.display = "none";
    user8ChartContainer4.style.display = "none";
    user8ChartContainer5.style.display = "none";
    user8ChartContainer6.style.display = "none";
    user8ChartContainer7.style.display = "none";
    user9ChartContainer1.style.display = "block";
    user9ChartContainer2.style.display = "none";
    user9ChartContainer3.style.display = "none";
    user9ChartContainer4.style.display = "none";
    user9ChartContainer5.style.display = "none";
    user9ChartContainer6.style.display = "none";
    user9ChartContainer7.style.display = "none";

  } else if (milkBox.checked == true) {
    user1ChartContainer1.style.display = "none";
    user1ChartContainer2.style.display = "block";
    user1ChartContainer3.style.display = "none";
    user1ChartContainer4.style.display = "none";
    user1ChartContainer5.style.display = "none";
    user1ChartContainer6.style.display = "none";
    user1ChartContainer7.style.display = "none";
    user2ChartContainer1.style.display = "none";
    user2ChartContainer2.style.display = "block";
    user2ChartContainer3.style.display = "none";
    user2ChartContainer4.style.display = "none";
    user2ChartContainer5.style.display = "none";
    user2ChartContainer6.style.display = "none";
    user2ChartContainer7.style.display = "none";
    user3ChartContainer1.style.display = "none";
    user3ChartContainer2.style.display = "block";
    user3ChartContainer3.style.display = "none";
    user3ChartContainer4.style.display = "none";
    user3ChartContainer5.style.display = "none";
    user3ChartContainer6.style.display = "none";
    user3ChartContainer7.style.display = "none";
    user4ChartContainer1.style.display = "none";
    user4ChartContainer2.style.display = "block";
    user4ChartContainer3.style.display = "none";
    user4ChartContainer4.style.display = "none";
    user4ChartContainer5.style.display = "none";
    user4ChartContainer6.style.display = "none";
    user4ChartContainer7.style.display = "none";
    user5ChartContainer1.style.display = "none";
    user5ChartContainer2.style.display = "block";
    user5ChartContainer3.style.display = "none";
    user5ChartContainer4.style.display = "none";
    user5ChartContainer5.style.display = "none";
    user5ChartContainer6.style.display = "none";
    user5ChartContainer7.style.display = "none";
    user6ChartContainer1.style.display = "none";
    user6ChartContainer2.style.display = "block";
    user6ChartContainer3.style.display = "none";
    user6ChartContainer4.style.display = "none";
    user6ChartContainer5.style.display = "none";
    user6ChartContainer6.style.display = "none";
    user6ChartContainer7.style.display = "none";
    user7ChartContainer1.style.display = "none";
    user7ChartContainer2.style.display = "block";
    user7ChartContainer3.style.display = "none";
    user7ChartContainer4.style.display = "none";
    user7ChartContainer5.style.display = "none";
    user7ChartContainer6.style.display = "none";
    user7ChartContainer7.style.display = "none";
    user8ChartContainer1.style.display = "none";
    user8ChartContainer2.style.display = "block";
    user8ChartContainer3.style.display = "none";
    user8ChartContainer4.style.display = "none";
    user8ChartContainer5.style.display = "none";
    user8ChartContainer6.style.display = "none";
    user8ChartContainer7.style.display = "none";
    user9ChartContainer1.style.display = "none";
    user9ChartContainer2.style.display = "block";
    user9ChartContainer3.style.display = "none";
    user9ChartContainer4.style.display = "none";
    user9ChartContainer5.style.display = "none";
    user9ChartContainer6.style.display = "none";
    user9ChartContainer7.style.display = "none";
  } else if (dieselBox.checked == true) {
    user1ChartContainer1.style.display = "none";
    user1ChartContainer2.style.display = "none";
    user1ChartContainer3.style.display = "block";
    user1ChartContainer4.style.display = "none";
    user1ChartContainer5.style.display = "none";
    user1ChartContainer6.style.display = "none";
    user1ChartContainer7.style.display = "none";
    user2ChartContainer1.style.display = "none";
    user2ChartContainer2.style.display = "none";
    user2ChartContainer3.style.display = "block";
    user2ChartContainer4.style.display = "none";
    user2ChartContainer5.style.display = "none";
    user2ChartContainer6.style.display = "none";
    user2ChartContainer7.style.display = "none";
    user3ChartContainer1.style.display = "none";
    user3ChartContainer2.style.display = "none";
    user3ChartContainer3.style.display = "block";
    user3ChartContainer4.style.display = "none";
    user3ChartContainer5.style.display = "none";
    user3ChartContainer6.style.display = "none";
    user3ChartContainer7.style.display = "none";
    user4ChartContainer1.style.display = "none";
    user4ChartContainer2.style.display = "none";
    user4ChartContainer3.style.display = "block";
    user4ChartContainer4.style.display = "none";
    user4ChartContainer5.style.display = "none";
    user4ChartContainer6.style.display = "none";
    user4ChartContainer7.style.display = "none";
    user5ChartContainer1.style.display = "none";
    user5ChartContainer2.style.display = "none";
    user5ChartContainer3.style.display = "block";
    user5ChartContainer4.style.display = "none";
    user5ChartContainer5.style.display = "none";
    user5ChartContainer6.style.display = "none";
    user5ChartContainer7.style.display = "none";
    user6ChartContainer1.style.display = "none";
    user6ChartContainer2.style.display = "none";
    user6ChartContainer3.style.display = "block";
    user6ChartContainer4.style.display = "none";
    user6ChartContainer5.style.display = "none";
    user6ChartContainer6.style.display = "none";
    user6ChartContainer7.style.display = "none";
    user7ChartContainer1.style.display = "none";
    user7ChartContainer2.style.display = "none";
    user7ChartContainer3.style.display = "block";
    user7ChartContainer4.style.display = "none";
    user7ChartContainer5.style.display = "none";
    user7ChartContainer6.style.display = "none";
    user7ChartContainer7.style.display = "none";
    user8ChartContainer1.style.display = "none";
    user8ChartContainer2.style.display = "none";
    user8ChartContainer3.style.display = "block";
    user8ChartContainer4.style.display = "none";
    user8ChartContainer5.style.display = "none";
    user8ChartContainer6.style.display = "none";
    user8ChartContainer7.style.display = "none";
    user9ChartContainer1.style.display = "none";
    user9ChartContainer2.style.display = "none";
    user9ChartContainer3.style.display = "block";
    user9ChartContainer4.style.display = "none";
    user9ChartContainer5.style.display = "none";
    user9ChartContainer6.style.display = "none";
    user9ChartContainer7.style.display = "none";
  } else if (electricityBox.checked == true) {
    user1ChartContainer1.style.display = "none";
    user1ChartContainer2.style.display = "none";
    user1ChartContainer3.style.display = "none";
    user1ChartContainer4.style.display = "block";
    user1ChartContainer5.style.display = "none";
    user1ChartContainer6.style.display = "none";
    user1ChartContainer7.style.display = "none";
    user2ChartContainer1.style.display = "none";
    user2ChartContainer2.style.display = "none";
    user2ChartContainer3.style.display = "none";
    user2ChartContainer4.style.display = "block";
    user2ChartContainer5.style.display = "none";
    user2ChartContainer6.style.display = "none";
    user2ChartContainer7.style.display = "none";
    user3ChartContainer1.style.display = "none";
    user3ChartContainer2.style.display = "none";
    user3ChartContainer3.style.display = "none";
    user3ChartContainer4.style.display = "block";
    user3ChartContainer5.style.display = "none";
    user3ChartContainer6.style.display = "none";
    user3ChartContainer7.style.display = "none";
    user4ChartContainer1.style.display = "none";
    user4ChartContainer2.style.display = "none";
    user4ChartContainer3.style.display = "none";
    user4ChartContainer4.style.display = "block";
    user4ChartContainer5.style.display = "none";
    user4ChartContainer6.style.display = "none";
    user4ChartContainer7.style.display = "none";
    user5ChartContainer1.style.display = "none";
    user5ChartContainer2.style.display = "none";
    user5ChartContainer3.style.display = "none";
    user5ChartContainer4.style.display = "block";
    user5ChartContainer5.style.display = "none";
    user5ChartContainer6.style.display = "none";
    user5ChartContainer7.style.display = "none";
    user6ChartContainer1.style.display = "none";
    user6ChartContainer2.style.display = "none";
    user6ChartContainer3.style.display = "none";
    user6ChartContainer4.style.display = "block";
    user6ChartContainer5.style.display = "none";
    user6ChartContainer6.style.display = "none";
    user6ChartContainer7.style.display = "none";
    user7ChartContainer1.style.display = "none";
    user7ChartContainer2.style.display = "none";
    user7ChartContainer3.style.display = "none";
    user7ChartContainer4.style.display = "block";
    user7ChartContainer5.style.display = "none";
    user7ChartContainer6.style.display = "none";
    user7ChartContainer7.style.display = "none";
    user8ChartContainer1.style.display = "none";
    user8ChartContainer2.style.display = "none";
    user8ChartContainer3.style.display = "none";
    user8ChartContainer4.style.display = "block";
    user8ChartContainer5.style.display = "none";
    user8ChartContainer6.style.display = "none";
    user8ChartContainer7.style.display = "none";
    user9ChartContainer1.style.display = "none";
    user9ChartContainer2.style.display = "none";
    user9ChartContainer3.style.display = "none";
    user9ChartContainer4.style.display = "block";
    user9ChartContainer5.style.display = "none";
    user9ChartContainer6.style.display = "none";
    user9ChartContainer7.style.display = "none";
  } else if (dryMatterBox.checked == true) {
    user1ChartContainer1.style.display = "none";
    user1ChartContainer2.style.display = "none";
    user1ChartContainer3.style.display = "none";
    user1ChartContainer4.style.display = "none";
    user1ChartContainer5.style.display = "block";
    user1ChartContainer6.style.display = "none";
    user1ChartContainer7.style.display = "none";
    user2ChartContainer1.style.display = "none";
    user2ChartContainer2.style.display = "none";
    user2ChartContainer3.style.display = "none";
    user2ChartContainer4.style.display = "none";
    user2ChartContainer5.style.display = "block";
    user2ChartContainer6.style.display = "none";
    user2ChartContainer7.style.display = "none";
    user3ChartContainer1.style.display = "none";
    user3ChartContainer2.style.display = "none";
    user3ChartContainer3.style.display = "none";
    user3ChartContainer4.style.display = "none";
    user3ChartContainer5.style.display = "block";
    user3ChartContainer6.style.display = "none";
    user3ChartContainer7.style.display = "none";
    user4ChartContainer1.style.display = "none";
    user4ChartContainer2.style.display = "none";
    user4ChartContainer3.style.display = "none";
    user4ChartContainer4.style.display = "none";
    user4ChartContainer5.style.display = "block";
    user4ChartContainer6.style.display = "none";
    user4ChartContainer7.style.display = "none";
    user5ChartContainer1.style.display = "none";
    user5ChartContainer2.style.display = "none";
    user5ChartContainer3.style.display = "none";
    user5ChartContainer4.style.display = "none";
    user5ChartContainer5.style.display = "block";
    user5ChartContainer6.style.display = "none";
    user5ChartContainer7.style.display = "none";
    user6ChartContainer1.style.display = "none";
    user6ChartContainer2.style.display = "none";
    user6ChartContainer3.style.display = "none";
    user6ChartContainer4.style.display = "none";
    user6ChartContainer5.style.display = "block";
    user6ChartContainer6.style.display = "none";
    user6ChartContainer7.style.display = "none";
    user7ChartContainer1.style.display = "none";
    user7ChartContainer2.style.display = "none";
    user7ChartContainer3.style.display = "none";
    user7ChartContainer4.style.display = "none";
    user7ChartContainer5.style.display = "block";
    user7ChartContainer6.style.display = "none";
    user7ChartContainer7.style.display = "none";
    user8ChartContainer1.style.display = "none";
    user8ChartContainer2.style.display = "none";
    user8ChartContainer3.style.display = "none";
    user8ChartContainer4.style.display = "none";
    user8ChartContainer5.style.display = "block";
    user8ChartContainer6.style.display = "none";
    user8ChartContainer7.style.display = "none";
    user9ChartContainer1.style.display = "none";
    user9ChartContainer2.style.display = "none";
    user9ChartContainer3.style.display = "none";
    user9ChartContainer4.style.display = "none";
    user9ChartContainer5.style.display = "block";
    user9ChartContainer6.style.display = "none";
    user9ChartContainer7.style.display = "none";
  } else if (selfFeedBox.checked == true) {
    user1ChartContainer1.style.display = "none";
    user1ChartContainer2.style.display = "none";
    user1ChartContainer3.style.display = "none";
    user1ChartContainer4.style.display = "none";
    user1ChartContainer5.style.display = "none";
    user1ChartContainer6.style.display = "block";
    user1ChartContainer7.style.display = "none";
    user2ChartContainer1.style.display = "none";
    user2ChartContainer2.style.display = "none";
    user2ChartContainer3.style.display = "none";
    user2ChartContainer4.style.display = "none";
    user2ChartContainer5.style.display = "none";
    user2ChartContainer6.style.display = "block";
    user2ChartContainer7.style.display = "none";
    user3ChartContainer1.style.display = "none";
    user3ChartContainer2.style.display = "none";
    user3ChartContainer3.style.display = "none";
    user3ChartContainer4.style.display = "none";
    user3ChartContainer5.style.display = "none";
    user3ChartContainer6.style.display = "block";
    user3ChartContainer7.style.display = "none";
    user4ChartContainer1.style.display = "none";
    user4ChartContainer2.style.display = "none";
    user4ChartContainer3.style.display = "none";
    user4ChartContainer4.style.display = "none";
    user4ChartContainer5.style.display = "none";
    user4ChartContainer6.style.display = "block";
    user4ChartContainer7.style.display = "none";
    user5ChartContainer1.style.display = "none";
    user5ChartContainer2.style.display = "none";
    user5ChartContainer3.style.display = "none";
    user5ChartContainer4.style.display = "none";
    user5ChartContainer5.style.display = "none";
    user5ChartContainer6.style.display = "block";
    user5ChartContainer7.style.display = "none";
    user6ChartContainer1.style.display = "none";
    user6ChartContainer2.style.display = "none";
    user6ChartContainer3.style.display = "none";
    user6ChartContainer4.style.display = "none";
    user6ChartContainer5.style.display = "none";
    user6ChartContainer6.style.display = "block";
    user6ChartContainer7.style.display = "none";
    user7ChartContainer1.style.display = "none";
    user7ChartContainer2.style.display = "none";
    user7ChartContainer3.style.display = "none";
    user7ChartContainer4.style.display = "none";
    user7ChartContainer5.style.display = "none";
    user7ChartContainer6.style.display = "block";
    user7ChartContainer7.style.display = "none";
    user8ChartContainer1.style.display = "none";
    user8ChartContainer2.style.display = "none";
    user8ChartContainer3.style.display = "none";
    user8ChartContainer4.style.display = "none";
    user8ChartContainer5.style.display = "none";
    user8ChartContainer6.style.display = "block";
    user8ChartContainer7.style.display = "none";
    user9ChartContainer1.style.display = "none";
    user9ChartContainer2.style.display = "none";
    user9ChartContainer3.style.display = "none";
    user9ChartContainer4.style.display = "none";
    user9ChartContainer5.style.display = "none";
    user9ChartContainer6.style.display = "block";
    user9ChartContainer7.style.display = "none";
  } else if (footprint.checked == true) {
    user1ChartContainer1.style.display = "none";
    user1ChartContainer2.style.display = "none";
    user1ChartContainer3.style.display = "none";
    user1ChartContainer4.style.display = "none";
    user1ChartContainer5.style.display = "none";
    user1ChartContainer6.style.display = "none";
    user1ChartContainer7.style.display = "block";
    user2ChartContainer1.style.display = "none";
    user2ChartContainer2.style.display = "none";
    user2ChartContainer3.style.display = "none";
    user2ChartContainer4.style.display = "none";
    user2ChartContainer5.style.display = "none";
    user2ChartContainer6.style.display = "none";
    user2ChartContainer7.style.display = "block";
    user3ChartContainer1.style.display = "none";
    user3ChartContainer2.style.display = "none";
    user3ChartContainer3.style.display = "none";
    user3ChartContainer4.style.display = "none";
    user3ChartContainer5.style.display = "none";
    user3ChartContainer6.style.display = "none";
    user3ChartContainer7.style.display = "block";
    user4ChartContainer1.style.display = "none";
    user4ChartContainer2.style.display = "none";
    user4ChartContainer3.style.display = "none";
    user4ChartContainer4.style.display = "none";
    user4ChartContainer5.style.display = "none";
    user4ChartContainer6.style.display = "none";
    user4ChartContainer7.style.display = "block";
    user5ChartContainer1.style.display = "none";
    user5ChartContainer2.style.display = "none";
    user5ChartContainer3.style.display = "none";
    user5ChartContainer4.style.display = "none";
    user5ChartContainer5.style.display = "none";
    user5ChartContainer6.style.display = "none";
    user5ChartContainer7.style.display = "block";
    user6ChartContainer1.style.display = "none";
    user6ChartContainer2.style.display = "none";
    user6ChartContainer3.style.display = "none";
    user6ChartContainer4.style.display = "none";
    user6ChartContainer5.style.display = "none";
    user6ChartContainer6.style.display = "none";
    user6ChartContainer7.style.display = "block";
    user7ChartContainer1.style.display = "none";
    user7ChartContainer2.style.display = "none";
    user7ChartContainer3.style.display = "none";
    user7ChartContainer4.style.display = "none";
    user7ChartContainer5.style.display = "none";
    user7ChartContainer6.style.display = "none";
    user7ChartContainer7.style.display = "block";
    user8ChartContainer1.style.display = "none";
    user8ChartContainer2.style.display = "none";
    user8ChartContainer3.style.display = "none";
    user8ChartContainer4.style.display = "none";
    user8ChartContainer5.style.display = "none";
    user8ChartContainer6.style.display = "none";
    user8ChartContainer7.style.display = "block";
    user9ChartContainer1.style.display = "none";
    user9ChartContainer2.style.display = "none";
    user9ChartContainer3.style.display = "none";
    user9ChartContainer4.style.display = "none";
    user9ChartContainer5.style.display = "none";
    user9ChartContainer6.style.display = "none";
    user9ChartContainer7.style.display = "block";
  } 
}
let user1 = document.querySelector("#user1");
let user2 = document.querySelector("#user2");
let user3 = document.querySelector("#user3");
let user4 = document.querySelector("#user4");
let user5 = document.querySelector("#user5");
let user6 = document.querySelector("#user6");
let user7 = document.querySelector("#user7");
let user8 = document.querySelector("#user8");
let user9 = document.querySelector("#user9");

let nj1 = document.querySelector("#nj1");
let nj2 = document.querySelector("#nj2");
let nj3 = document.querySelector("#nj3");
let nj4 = document.querySelector("#nj4");
let nj5 = document.querySelector("#nj5");
let nj6 = document.querySelector("#nj6");
let nj7 = document.querySelector("#nj7");
let nj8 = document.querySelector("#nj8");
let nj9 = document.querySelector("#nj9");

function displayUserChart() {
  if (nj1.checked == true) {
    user1.style.display = "block";
    user2.style.display = "none";
    user3.style.display = "none";
    user4.style.display = "none";
    user5.style.display = "none";
    user6.style.display = "none";
    user7.style.display = "none";
    user8.style.display = "none";
    user9.style.display = "none";
  } else if (nj2.checked == true) {
    user1.style.display = "none";
    user2.style.display = "block";
    user3.style.display = "none";
    user4.style.display = "none";
    user5.style.display = "none";
    user6.style.display = "none";
    user7.style.display = "none";
    user8.style.display = "none";
    user9.style.display = "none";
  } else if (nj3.checked == true) {
    user1.style.display = "none";
    user2.style.display = "none";
    user3.style.display = "block";
    user4.style.display = "none";
    user5.style.display = "none";
    user6.style.display = "none";
    user7.style.display = "none";
    user8.style.display = "none";
    user9.style.display = "none";
  } else if (nj4.checked == true) {
    user1.style.display = "none";
    user2.style.display = "none";
    user3.style.display = "none";
    user4.style.display = "block";
    user5.style.display = "none";
    user6.style.display = "none";
    user7.style.display = "none";
    user8.style.display = "none";
    user9.style.display = "none";
  } else if (nj5.checked == true) {
    user1.style.display = "none";
    user2.style.display = "none";
    user3.style.display = "none";
    user4.style.display = "none";
    user5.style.display = "block";
    user6.style.display = "none";
    user7.style.display = "none";
    user8.style.display = "none";
    user9.style.display = "none";
  } else if (nj6.checked == true) {
    user1.style.display = "none";
    user2.style.display = "none";
    user3.style.display = "none";
    user4.style.display = "none";
    user5.style.display = "none";
    user6.style.display = "block";
    user7.style.display = "none";
    user8.style.display = "none";
    user9.style.display = "none";
  } else if (nj7.checked == true) {
    user1.style.display = "none";
    user2.style.display = "none";
    user3.style.display = "none";
    user4.style.display = "none";
    user5.style.display = "none";
    user6.style.display = "none";
    user7.style.display = "block";
    user8.style.display = "none";
    user9.style.display = "none";
  } else if (nj8.checked == true) {
    user1.style.display = "none";
    user2.style.display = "none";
    user3.style.display = "none";
    user4.style.display = "none";
    user5.style.display = "none";
    user6.style.display = "none";
    user7.style.display = "none";
    user8.style.display = "block";
    user9.style.display = "none";
  } else if (nj9.checked == true) {
    user1.style.display = "none";
    user2.style.display = "none";
    user3.style.display = "none";
    user4.style.display = "none";
    user5.style.display = "none";
    user6.style.display = "none";
    user7.style.display = "none";
    user8.style.display = "none";
    user9.style.display = "block";
  }
}
let show = document.querySelector(".hide");
function selectOnlyThisFilter(id){
  let checkboxFilter = document.getElementsByName("checkboxFilter");
  Array.prototype.forEach.call(checkboxFilter,function(el){
  	el.checked = false;
  });
  id.checked = true;
  show.style.display = "block"
  displayChart()
}
function selectOnlyThisRegion(id){
  let checkboxRegion = document.getElementsByName("checkboxRegion");
  Array.prototype.forEach.call(checkboxRegion,function(el){
  	el.checked = false;
  });
  id.checked = true;
  show.style.display = "block"
  displayUserChart()
}

