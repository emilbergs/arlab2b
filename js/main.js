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
  const year1 = db.collection("year1");
  const year2 = db.collection("year2");
  const year3 = db.collection("year3");
  const year4 = db.collection("year4");
  const year5 = db.collection("year5");
  const year6 = db.collection("year6");









/* Bruger 1 */
let nj1Y1 = year1.doc("nj1@gmail.com")
let nj1Y2 = year2.doc("nj1@gmail.com")
let nj1Y3 = year3.doc("nj1@gmail.com")
let nj1Y4 = year4.doc("nj1@gmail.com")
let nj1Y5 = year5.doc("nj1@gmail.com")
let nj1Y6 = year6.doc("nj1@gmail.com")

let nj1Data = [];
console.log(nj1Data)

nj1Y1.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj1Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });
  

nj1Y2.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj1Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });

  nj1Y3.get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      let docData = doc.data();
      // Use a City instance method
      nj1Data.push(docData)

      
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });
  
  nj1Y4.get().then(function(doc) {
    if (doc.exists){
       // Convert to City object
       let docData = doc.data();
       // Use a City instance method
       nj1Data.push(docData)
        
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
       console.log("Error getting document:", error)
     });
  
     nj1Y5.get().then(function(doc) {
      if (doc.exists){
        // Convert to City object
        let docData = doc.data();
        // Use a City instance method
        nj1Data.push(docData)
        
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });
    
  





  /* Bruger 2 */
  let nj2Y1 = year1.doc("nj2@gmail.com")
  let nj2Y2 = year2.doc("nj2@gmail.com")
  let nj2Y3 = year3.doc("nj2@gmail.com")
  let nj2Y4 = year4.doc("nj2@gmail.com")
  let nj2Y5 = year5.doc("nj2@gmail.com")
  let nj2Y6 = year6.doc("nj2@gmail.com")
  
let nj2Data = [];
console.log(nj2Data)

nj2Y1.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj2Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });
  

nj2Y2.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj2Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });

  nj2Y3.get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      let docData = doc.data();
      // Use a City instance method
      nj2Data.push(docData)

      
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });
  
  nj2Y4.get().then(function(doc) {
    if (doc.exists){
       // Convert to City object
       let docData = doc.data();
       // Use a City instance method
       nj2Data.push(docData)
        
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
       console.log("Error getting document:", error)
     });
  
     nj2Y5.get().then(function(doc) {
      if (doc.exists){
        // Convert to City object
        let docData = doc.data();
        // Use a City instance method
        nj2Data.push(docData)
        
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });
    





  /* Bruger 3 */
  let nj3Y1 = year1.doc("nj3@gmail.com")
  let nj3Y2 = year2.doc("nj3@gmail.com")
  let nj3Y3 = year3.doc("nj3@gmail.com")
  let nj3Y4 = year4.doc("nj3@gmail.com")
  let nj3Y5 = year5.doc("nj3@gmail.com")
  let nj3Y6 = year6.doc("nj3@gmail.com")
  
let nj3Data = [];
console.log(nj3Data)

nj3Y1.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj3Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });
  

nj3Y2.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj3Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });

  nj3Y3.get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      let docData = doc.data();
      // Use a City instance method
      nj3Data.push(docData)

      
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });
  
  nj3Y4.get().then(function(doc) {
    if (doc.exists){
       // Convert to City object
       let docData = doc.data();
       // Use a City instance method
       nj3Data.push(docData)
        
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
       console.log("Error getting document:", error)
     });
  
     nj3Y5.get().then(function(doc) {
      if (doc.exists){
        // Convert to City object
        let docData = doc.data();
        // Use a City instance method
        nj3Data.push(docData)
        
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });
    






       /* Bruger 4 */
  let nj4Y1 = year1.doc("nj4@gmail.com")
  let nj4Y2 = year2.doc("nj4@gmail.com")
  let nj4Y3 = year3.doc("nj4@gmail.com")
  let nj4Y4 = year4.doc("nj4@gmail.com")
  let nj4Y5 = year5.doc("nj4@gmail.com")
  let nj4Y6 = year6.doc("nj4@gmail.com")
  
let nj4Data = [];
console.log(nj4Data)

nj4Y1.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj4Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });
  

nj4Y2.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj4Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });

  nj4Y3.get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      let docData = doc.data();
      // Use a City instance method
      nj4Data.push(docData)

      
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });
  
  nj4Y4.get().then(function(doc) {
    if (doc.exists){
       // Convert to City object
       let docData = doc.data();
       // Use a City instance method
       nj4Data.push(docData)
        
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
       console.log("Error getting document:", error)
     });
  
     nj4Y5.get().then(function(doc) {
      if (doc.exists){
        // Convert to City object
        let docData = doc.data();
        // Use a City instance method
        nj4Data.push(docData)
        
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });



       /* Bruger 5 */
  let nj5Y1 = year1.doc("nj5@gmail.com")
  let nj5Y2 = year2.doc("nj5@gmail.com")
  let nj5Y3 = year3.doc("nj5@gmail.com")
  let nj5Y4 = year4.doc("nj5@gmail.com")
  let nj5Y5 = year5.doc("nj5@gmail.com")
  let nj5Y6 = year6.doc("nj5@gmail.com")
  
let nj5Data = [];
console.log(nj5Data)

nj5Y1.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj5Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });
  

nj5Y2.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj5Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });

  nj5Y3.get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      let docData = doc.data();
      // Use a City instance method
      nj5Data.push(docData)

      
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });
  
  nj5Y4.get().then(function(doc) {
    if (doc.exists){
       // Convert to City object
       let docData = doc.data();
       // Use a City instance method
       nj5Data.push(docData)
        
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
       console.log("Error getting document:", error)
     });
  
     nj5Y5.get().then(function(doc) {
      if (doc.exists){
        // Convert to City object
        let docData = doc.data();
        // Use a City instance method
        nj5Data.push(docData)
        
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });



        /* Bruger 6 */
  let nj6Y1 = year1.doc("nj6@gmail.com")
  let nj6Y2 = year2.doc("nj6@gmail.com")
  let nj6Y3 = year3.doc("nj6@gmail.com")
  let nj6Y4 = year4.doc("nj6@gmail.com")
  let nj6Y5 = year5.doc("nj6@gmail.com")
  let nj6Y6 = year6.doc("nj6@gmail.com")
  
let nj6Data = [];
console.log(nj6Data)

nj6Y1.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj6Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });
  

nj6Y2.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj6Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });

  nj6Y3.get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      let docData = doc.data();
      // Use a City instance method
      nj6Data.push(docData)

      
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });
  
  nj6Y4.get().then(function(doc) {
    if (doc.exists){
       // Convert to City object
       let docData = doc.data();
       // Use a City instance method
       nj6Data.push(docData)
        
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
       console.log("Error getting document:", error)
     });
  
     nj6Y5.get().then(function(doc) {
      if (doc.exists){
        // Convert to City object
        let docData = doc.data();
        // Use a City instance method
        nj6Data.push(docData)
        
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });


              /* Bruger 7 */
  let nj7Y1 = year1.doc("nj6@gmail.com")
  let nj7Y2 = year2.doc("nj6@gmail.com")
  let nj7Y3 = year3.doc("nj6@gmail.com")
  let nj7Y4 = year4.doc("nj6@gmail.com")
  let nj7Y5 = year5.doc("nj6@gmail.com")
  let nj7Y6 = year6.doc("nj6@gmail.com")
  
let nj7Data = [];
console.log(nj7Data)

nj7Y1.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj7Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });
  

nj7Y2.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj7Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });

  nj7Y3.get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      let docData = doc.data();
      // Use a City instance method
      nj7Data.push(docData)

      
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });
  
  nj7Y4.get().then(function(doc) {
    if (doc.exists){
       // Convert to City object
       let docData = doc.data();
       // Use a City instance method
       nj7Data.push(docData)
        
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
       console.log("Error getting document:", error)
     });
  
     nj7Y5.get().then(function(doc) {
      if (doc.exists){
        // Convert to City object
        let docData = doc.data();
        // Use a City instance method
        nj7Data.push(docData)
        
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });
      

                    /* Bruger 8 */
  let nj8Y1 = year1.doc("nj8@gmail.com")
  let nj8Y2 = year2.doc("nj8@gmail.com")
  let nj8Y3 = year3.doc("nj8@gmail.com")
  let nj8Y4 = year4.doc("nj8@gmail.com")
  let nj8Y5 = year5.doc("nj8@gmail.com")
  let nj8Y6 = year6.doc("nj8@gmail.com")
  
let nj8Data = [];
console.log(nj8Data)

nj8Y1.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj8Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });
  

nj8Y2.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj8Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });

  nj8Y3.get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      let docData = doc.data();
      // Use a City instance method
      nj8Data.push(docData)

      
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });
  
  nj8Y4.get().then(function(doc) {
    if (doc.exists){
       // Convert to City object
       let docData = doc.data();
       // Use a City instance method
       nj8Data.push(docData)
        
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
       console.log("Error getting document:", error)
     });
  
     nj8Y5.get().then(function(doc) {
      if (doc.exists){
        // Convert to City object
        let docData = doc.data();
        // Use a City instance method
        nj8Data.push(docData)
        
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });


                          /* Bruger 9 */
  let nj9Y1 = year1.doc("nj9@gmail.com")
  let nj9Y2 = year2.doc("nj9@gmail.com")
  let nj9Y3 = year3.doc("nj9@gmail.com")
  let nj9Y4 = year4.doc("nj9@gmail.com")
  let nj9Y5 = year5.doc("nj9@gmail.com")
  let nj9Y6 = year6.doc("nj9@gmail.com")
  
let nj9Data = [];
console.log(nj9Data)

nj9Y1.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj9Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });
  

nj9Y2.get().then(function(doc) {
  if (doc.exists){
    // Convert to City object
    let docData = doc.data();
    // Use a City instance method
    nj9Data.push(docData)
    
  } else {
    console.log("No such document!")
  }}).catch(function(error) {
    console.log("Error getting document:", error)
  });

  nj9Y3.get().then(function(doc) {
    if (doc.exists){
      // Convert to City object
      let docData = doc.data();
      // Use a City instance method
      nj9Data.push(docData)

      
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
      console.log("Error getting document:", error)
    });
  
  nj9Y4.get().then(function(doc) {
    if (doc.exists){
       // Convert to City object
       let docData = doc.data();
       // Use a City instance method
       nj9Data.push(docData)
        
    } else {
      console.log("No such document!")
    }}).catch(function(error) {
       console.log("Error getting document:", error)
     });
  
     nj9Y5.get().then(function(doc) {
      if (doc.exists){
        // Convert to City object
        let docData = doc.data();
        // Use a City instance method
        nj9Data.push(docData)
        
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });
      
    



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
    console.log(user.email);
    year6.doc(user.email).set(newUser);
  });
}




let _datas = [];
year1.onSnapshot(function (snapshotData) {
  snapshotData.forEach(function (doc) {
    let dataOne = doc.data();
    dataOne.id = doc.id;
    _datas.push(dataOne)
  })
});
console.log(_datas)


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
function logout() {
  firebase.auth().signOut();
}

let dataPrYear = [{
    year: "2015",
    cows: 51,
    milk:10185.449,
    dryMatter:8139.350,
    diesel: 8284.000,
    kWh: 41640.000,
    selfFeed: 79.225,
    footprint: 504.462
  }, 
  {
    year: "2016",
    cows: 50,
    milk: 9075.765,
    dryMatter: 5568.238,
    diesel: 5880.060,
    kWh: 67654.000,
    selfFeed: 84.154,
    footprint: 445.563
  }, 
  {
    year: "2017",
    cows: 49,
    milk: 9927.232,
    dryMatter: 6465.915,
    diesel: 11475.330,
    kWh: 48613.000,
    selfFeed: 68.585,
    footprint: 464.516
  }, 
  {
    year: "2018",
    cows: 51,
    milk: 8830.039,
    dryMatter: 6083.323,
    diesel: 10353.000,
    kWh: 45564.000,
    selfFeed: 64.909,
    footprint: 399.700
  }, 
  {
    year: "2019",
    cows: 50,
    milk: 7830.036,
    dryMatter: 5469.291,
    diesel: 9873.000,
    kWh: 44975.000,
    selfFeed: 69.413,
    footprint: 370.858
  }
  ];
  // 2: prepare data for chart
  // seperating the objects to arrays: months and sales
  // why? that's how chart.js reads the data :)
  function prepareData(data) {
    // declaring two array to store the data 
    let years = [];
    let cows = [];
    let milk = [];
    let dryMatter = [];
    let diesel = [];
    let kWh = [];
    let selfFeed = [];
    let footprint = []
    // looping through the data array
    for (const object of data) {
      // adding the values to the different arrays
      years.push(object.year);
      cows.push(object.cows);
      milk.push(object.milk);
      dryMatter.push(object.dryMatter);
      diesel.push(object.diesel);
      kWh.push(object.kWh);
      selfFeed.push(object.selfFeed);
      footprint.push(object.footprint)
    }
    // returning the two arrays (months & sales) inside and object
    // we cannot return to values - that's why we have to do it inside an array
    return {
      years,
      cows,
      milk,
      dryMatter,
      diesel,
      kWh,
      selfFeed,
      footprint
    };
  }
  
  // 3: create and append the chart
  function appendCowChart(cowData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(cowData);
    //open the developer console to inspect the result
    let chartContainer1 = document.getElementById('user1ChartContainer1');
    let chart = new Chart(chartContainer1, {
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
  appendCowChart(dataPrYear);
  


  // 3: create and append the chart
  function appendMilkChart(milkData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(milkData);
    //open the developer console to inspect the result
    let chartContainer2 = document.getElementById('user1ChartContainer2');
    let chart = new Chart(chartContainer2, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.milk, // refering to the data object, holding data from prepareData()
          label: 'Milk pr cow each year',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: 'rgb(255, 99, 132)'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Milk'
        }
      }
  
    });
  }
  appendMilkChart(dataPrYear);
  

  // 3: create and append the chart
  function appendDieselChart(dieselData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(dieselData);
    //open the developer console to inspect the result
    let chartContainer3 = document.getElementById('user1ChartContainer3');
    let chart = new Chart(chartContainer3, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.diesel, // refering to the data object, holding data from prepareData()
          label: 'Diesel litre pr year',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: 'rgb(255, 99, 132)'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Diesel Litre'
        }
      }
  
    });
  }
  appendDieselChart(dataPrYear);
  

    // 3: create and append the chart
    function appendKWhChart(kWhData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(kWhData);
        //open the developer console to inspect the result
        let chartContainer4 = document.getElementById('user1ChartContainer4');
        let chart = new Chart(chartContainer4, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.kWh, // refering to the data object, holding data from prepareData()
              label: 'Elektricitet/kWh pr year',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: 'rgb(255, 99, 132)'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'kWh'
            }
          }
      
        });
      }

      appendKWhChart(dataPrYear);


    // 3: create and append the chart
    function appendDryChart(dryData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(dryData);
        //open the developer console to inspect the result
        let chartContainer5 = document.getElementById('user1ChartContainer5');
        let chart = new Chart(chartContainer5, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.dryMatter, // refering to the data object, holding data from prepareData()
              label: 'Kg dry matter pr year',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: 'rgb(255, 99, 132)'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Dry matter'
            }
          }
      
        });
      }

  appendDryChart(dataPrYear);
  
    // 3: create and append the chart
    function appendSelfFeedChart(selfFeedData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(selfFeedData);
        //open the developer console to inspect the result
        let chartContainer6 = document.getElementById('user1ChartContainer6');
        let chart = new Chart(chartContainer6, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.selfFeed, // refering to the data object, holding data from prepareData()
              label: '% Self-sufficiency in feed pr year',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: 'rgb(255, 99, 132)'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Self-sufficiency in feed'
            }
          }
      
        });
      }

      appendSelfFeedChart(dataPrYear);
  
  // 3: create and append the chart
  function appendFootprintChart(footPrintData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(footPrintData);
    //open the developer console to inspect the result
    let chartContainer7 = document.getElementById('user1ChartContainer7');
    let chart = new Chart(chartContainer7, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.footprint, // refering to the data object, holding data from prepareData()
          label: 'CO2 footprint pr year',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: 'rgb(255, 99, 132)'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'CO2 footprint pr year'
        }
      }
  
    });
  }

  appendFootprintChart(dataPrYear);

  