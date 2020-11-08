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
  const yearSix = db.collection("yearTwo");
  


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
    firebase.auth().onAuthStateChanged(function (user) {
    console.log(user.uid);
    yearSix.doc(user.uid).set(newUser);
  });
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
let _firebaseUI;

// ========== FIREBASE AUTH ========== //
// Listen on authentication state change
firebase.auth().onAuthStateChanged(function (user) {
  console.log(user);
  if (user) { // if user exists and is authenticated
    userAuthenticated(user);
  } else { // if user is not logged in
    userNotAuthenticated();
  }
});

function userAuthenticated(user) {
  appendUserData(user);
  hideTabbar(false);
  showLoader(false);
}

function userNotAuthenticated() {
  showPage("home");

  // Firebase UI configuration
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '#side1'
  };
  // Init Firebase UI Authentication
  if (!_firebaseUI) {
    _firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
  } 
  _firebaseUI.start('#firebaseui-auth-container', uiConfig);
  showLoader(false);
}







/*

let _firebaseUI;

// ========== FIREBASE AUTH ========== //
// Listen on authentication state change
firebase.auth().onAuthStateChanged(function (user) {
  if (user) { // if user exists and is authenticated
    userAuthenticated(user);
  } else { // if user is not logged in
    userNotAuthenticated();
  }
});

function userAuthenticated(user) {
  appendUserData(user);
}

function userNotAuthenticated() {
  showPage("login");

  // Firebase UI configuration
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '#side1'
  };
  // Init Firebase UI Authentication
  if (!_firebaseUI) {
    _firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
  } 
  _firebaseUI.start('#firebaseui-auth-container', uiConfig);
  
}

// show and hide tabbar
function hideTabbar(hide) {
  let tabbar = document.querySelector('#tabbar');
  if (hide) {
    tabbar.classList.add("hide");
  } else {
    tabbar.classList.remove("hide");
  }
}


// sign out user
function logout() {
  firebase.auth().signOut();
}

function appendUserData(user) {
  document.querySelector('#profile').innerHTML += `
    <h3>${user.displayName}</h3>
    <p>${user.email}</p>
  `;
}
*/