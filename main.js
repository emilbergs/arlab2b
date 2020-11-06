let firebaseConfig = {
    apiKey: "AIzaSyAaIaeGjKm9Qzl0P5HMFDQ3cP06ti2-m9M",
    authDomain: "arlab2b-43131.firebaseapp.com",
    databaseURL: "https://arlab2b-43131.firebaseio.com",
    projectId: "arlab2b-43131",
    storageBucket: "arlab2b-43131.appspot.com",
    messagingSenderId: "528388439338",
    appId: "1:528388439338:web:cd49acdb925f701612b253"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const year6Ref = db.collection("year6");

 


function createUser() {
  // references to the input fields
  let nrCowsInput = document.querySelector("#nrCows");

  console.log(nrCowsInput.value);
  

  let newUser = {
      yearCows: nrCowsInput.value,
  };
  year6Ref.add(newUser);
}
