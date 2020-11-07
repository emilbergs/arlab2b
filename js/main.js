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
  yearSix.doc("userID").set(newUser);
}


let _datas = [];
yearOne.onSnapshot(function (snapshotData) {
  snapshotData.forEach(function (doc) {
    let dataOne = doc.data();
    dataOne.id = doc.id;
    _datas.push(dataOne)
  })
});
console.log(_datas)




/*
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
*/

