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

        appendCowChart1(nj1Data);
        appendMilkChart1(nj1Data); 
        appendDieselChart1(nj1Data);
        appendKWhChart1(nj1Data);
        appendDryChart1(nj1Data);
        appendSelfFeedChart1(nj1Data)
        appendFootprintChart1(nj1Data)
         
        
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

        appendCowChart2(nj2Data);
        appendMilkChart2(nj2Data);
        appendDieselChart2(nj2Data);
        appendKWhChart2(nj2Data);
        appendDryChart2(nj2Data);
        appendSelfFeedChart2(nj2Data)
        appendFootprintChart2(nj2Data) 
        
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
        appendCowChart3(nj3Data);
        appendMilkChart3(nj3Data);
        appendDieselChart3(nj3Data);
        appendKWhChart3(nj3Data);
        appendDryChart3(nj3Data);
        appendSelfFeedChart3(nj3Data)
        appendFootprintChart3(nj3Data)
        
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
        appendCowChart4(nj4Data)
        appendMilkChart4(nj4Data);
        appendDieselChart4(nj4Data);
        appendKWhChart4(nj4Data);
        appendDryChart4(nj4Data);
        appendSelfFeedChart4(nj4Data)
        appendFootprintChart4(nj4Data)
        
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
        appendCowChart5(nj5Data)
        appendMilkChart5(nj5Data);
        appendDieselChart5(nj5Data);
        appendKWhChart5(nj5Data);
        appendDryChart5(nj5Data);
        appendSelfFeedChart5(nj5Data)
        appendFootprintChart5(nj5Data)
        
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
        appendCowChart6(nj6Data)
        appendMilkChart6(nj6Data);
        appendDieselChart6(nj6Data);
        appendKWhChart6(nj6Data);
        appendDryChart6(nj6Data);
        appendSelfFeedChart6(nj6Data)
        appendFootprintChart6(nj6Data)
        
      } else {
        console.log("No such document!")
      }}).catch(function(error) {
        console.log("Error getting document:", error)
      });


              /* Bruger 7 */
  let nj7Y1 = year1.doc("nj7@gmail.com")
  let nj7Y2 = year2.doc("nj7@gmail.com")
  let nj7Y3 = year3.doc("nj7@gmail.com")
  let nj7Y4 = year4.doc("nj7@gmail.com")
  let nj7Y5 = year5.doc("nj7@gmail.com")
  let nj7Y6 = year6.doc("nj7@gmail.com")
  
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
        appendCowChart7(nj7Data)
        appendMilkChart7(nj7Data);
        appendDieselChart7(nj7Data);
        appendKWhChart7(nj7Data);
        appendDryChart7(nj7Data);
        appendSelfFeedChart7(nj7Data)
        appendFootprintChart7(nj7Data)
        
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
        appendCowChart8(nj8Data)
        appendMilkChart8(nj8Data);
        appendDieselChart8(nj8Data);
        appendKWhChart8(nj8Data);
        appendDryChart8(nj8Data);
        appendSelfFeedChart8(nj8Data)
        appendFootprintChart8(nj8Data)
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
        appendCowChart9(nj9Data);
        appendMilkChart9(nj9Data);
        appendDieselChart9(nj9Data);
        appendKWhChart9(nj9Data);
        appendDryChart9(nj9Data);
        appendSelfFeedChart9(nj9Data);
        appendFootprintChart9(nj9Data);
        
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
      year: "2020",
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
    console.log(user.email)
  } else { // if user is not logged in
    userNotAuthenticated();
  }
});



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
      cows.push(object.yearCows);
      milk.push(object.kgMilk);
      dryMatter.push(object.dryMatter);
      diesel.push(object.diesel);
      kWh.push(object.electricity);
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
  function appendCowChart1(cowData) {
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
          label: 'Antal køer',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Køer'
        }
      }
  
    });
  }

  function appendCowChart2(cowData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(cowData);
    //open the developer console to inspect the result
    let chartContainer1 = document.getElementById('user2ChartContainer1');
    let chart = new Chart(chartContainer1, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.cows, // refering to the data object, holding data from prepareData()
          label: 'Antal køer',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Køer'
        }
      }
  
    });
  }
  

  function appendCowChart3(cowData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(cowData);
    //open the developer console to inspect the result
    let chartContainer1 = document.getElementById('user3ChartContainer1');
    let chart = new Chart(chartContainer1, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.cows, // refering to the data object, holding data from prepareData()
          label: 'Antal køer',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Køer'
        }
      }
  
    });
  }
  function appendCowChart4(cowData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(cowData);
    //open the developer console to inspect the result
    let chartContainer1 = document.getElementById('user4ChartContainer1');
    let chart = new Chart(chartContainer1, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.cows, // refering to the data object, holding data from prepareData()
          label: 'Antal køer',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Køer'
        }
      }
  
    });
  }

  function appendCowChart5(cowData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(cowData);
    //open the developer console to inspect the result
    let chartContainer1 = document.getElementById('user5ChartContainer1');
    let chart = new Chart(chartContainer1, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.cows, // refering to the data object, holding data from prepareData()
          label: 'Antal køer',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Køer'
        }
      }
  
    });
  }

  function appendCowChart6(cowData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(cowData);
    //open the developer console to inspect the result
    let chartContainer1 = document.getElementById('user6ChartContainer1');
    let chart = new Chart(chartContainer1, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.cows, // refering to the data object, holding data from prepareData()
          label: 'Antal køer',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Køer'
        }
      }
  
    });
  }

  function appendCowChart7(cowData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(cowData);
    //open the developer console to inspect the result
    let chartContainer1 = document.getElementById('user7ChartContainer1');
    let chart = new Chart(chartContainer1, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.cows, // refering to the data object, holding data from prepareData()
          label: 'Antal køer',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Køer'
        }
      }
  
    });
  }

  function appendCowChart8(cowData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(cowData);
    //open the developer console to inspect the result
    let chartContainer1 = document.getElementById('user8ChartContainer1');
    let chart = new Chart(chartContainer1, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.cows, // refering to the data object, holding data from prepareData()
          label: 'Antal køer',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Køer'
        }
      }
  
    });
  }

  function appendCowChart9(cowData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(cowData);
    //open the developer console to inspect the result
    let chartContainer1 = document.getElementById('user9ChartContainer1');
    let chart = new Chart(chartContainer1, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.cows, // refering to the data object, holding data from prepareData()
          label: 'Antal køer',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Køer'
        }
      }
  
    });
  }
  // 3: create and append the chart
  function appendMilkChart1(milkData) {
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
          label: 'Mælk pr. ko',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Mælk'
        }
      }
  
    });
  }

  function appendMilkChart2(milkData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(milkData);
    //open the developer console to inspect the result
    let chartContainer2 = document.getElementById('user2ChartContainer2');
    let chart = new Chart(chartContainer2, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.milk, // refering to the data object, holding data from prepareData()
          label: 'Mælk pr. ko',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Mælk'
        }
      }
  
    });
  }
  function appendMilkChart3(milkData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(milkData);
    //open the developer console to inspect the result
    let chartContainer2 = document.getElementById('user3ChartContainer2');
    let chart = new Chart(chartContainer2, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.milk, // refering to the data object, holding data from prepareData()
          label: 'Mælk pr. ko',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Mælk'
        }
      }
  
    });
  }
  function appendMilkChart4(milkData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(milkData);
    //open the developer console to inspect the result
    let chartContainer2 = document.getElementById('user4ChartContainer2');
    let chart = new Chart(chartContainer2, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.milk, // refering to the data object, holding data from prepareData()
          label: 'Mælk pr. ko',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Mælk'
        }
      }
  
    });
  }
  function appendMilkChart5(milkData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(milkData);
    //open the developer console to inspect the result
    let chartContainer2 = document.getElementById('user5ChartContainer2');
    let chart = new Chart(chartContainer2, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.milk, // refering to the data object, holding data from prepareData()
          label: 'Mælk pr. ko',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Mælk'
        }
      }
  
    });
  }
  function appendMilkChart6(milkData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(milkData);
    //open the developer console to inspect the result
    let chartContainer2 = document.getElementById('user6ChartContainer2');
    let chart = new Chart(chartContainer2, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.milk, // refering to the data object, holding data from prepareData()
          label: 'Mælk pr. ko',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Mælk'
        }
      }
  
    });
  }
  function appendMilkChart7(milkData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(milkData);
    //open the developer console to inspect the result
    let chartContainer2 = document.getElementById('user7ChartContainer2');
    let chart = new Chart(chartContainer2, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.milk, // refering to the data object, holding data from prepareData()
          label: 'Mælk pr. ko',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Mælk'
        }
      }
  
    });
  }
  function appendMilkChart8(milkData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(milkData);
    //open the developer console to inspect the result
    let chartContainer2 = document.getElementById('user8ChartContainer2');
    let chart = new Chart(chartContainer2, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.milk, // refering to the data object, holding data from prepareData()
          label: 'Mælk pr. ko',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Mælk'
        }
      }
  
    });
  }
  function appendMilkChart9(milkData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(milkData);
    //open the developer console to inspect the result
    let chartContainer2 = document.getElementById('user9ChartContainer2');
    let chart = new Chart(chartContainer2, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.milk, // refering to the data object, holding data from prepareData()
          label: 'Mælk pr. ko',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Mælk'
        }
      }
  
    });
  }
  

  // 3: create and append the chart
  function appendDieselChart1(dieselData) {
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
          label: 'Liter diesel',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Diesel'
        }
      }
  
    });
  }
  function appendDieselChart2(dieselData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(dieselData);
    //open the developer console to inspect the result
    let chartContainer3 = document.getElementById('user2ChartContainer3');
    let chart = new Chart(chartContainer3, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.diesel, // refering to the data object, holding data from prepareData()
          label: 'Liter diesel',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Diesel'
        }
      }
  
    });
  }
  function appendDieselChart3(dieselData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(dieselData);
    //open the developer console to inspect the result
    let chartContainer3 = document.getElementById('user3ChartContainer3');
    let chart = new Chart(chartContainer3, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.diesel, // refering to the data object, holding data from prepareData()
          label: 'Liter diesel',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Diesel'
        }
      }
  
    });
  }
  function appendDieselChart4(dieselData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(dieselData);
    //open the developer console to inspect the result
    let chartContainer3 = document.getElementById('user4ChartContainer3');
    let chart = new Chart(chartContainer3, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.diesel, // refering to the data object, holding data from prepareData()
          label: 'Liter diesel',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Diesel'
        }
      }
  
    });
  }
  function appendDieselChart5(dieselData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(dieselData);
    //open the developer console to inspect the result
    let chartContainer3 = document.getElementById('user5ChartContainer3');
    let chart = new Chart(chartContainer3, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.diesel, // refering to the data object, holding data from prepareData()
          label: 'Liter diesel',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Diesel'
        }
      }
  
    });
  }
  function appendDieselChart6(dieselData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(dieselData);
    //open the developer console to inspect the result
    let chartContainer3 = document.getElementById('user6ChartContainer3');
    let chart = new Chart(chartContainer3, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.diesel, // refering to the data object, holding data from prepareData()
          label: 'Liter diesel',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Diesel'
        }
      }
  
    });
  }
  function appendDieselChart7(dieselData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(dieselData);
    //open the developer console to inspect the result
    let chartContainer3 = document.getElementById('user7ChartContainer3');
    let chart = new Chart(chartContainer3, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.diesel, // refering to the data object, holding data from prepareData()
          label: 'Liter diesel',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Diesel'
        }
      }
  
    });
  }
  function appendDieselChart8(dieselData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(dieselData);
    //open the developer console to inspect the result
    let chartContainer3 = document.getElementById('user8ChartContainer3');
    let chart = new Chart(chartContainer3, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.diesel, // refering to the data object, holding data from prepareData()
          label: 'Liter diesel',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Diesel'
        }
      }
  
    });
  }
  function appendDieselChart9(dieselData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(dieselData);
    //open the developer console to inspect the result
    let chartContainer3 = document.getElementById('user9ChartContainer3');
    let chart = new Chart(chartContainer3, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.diesel, // refering to the data object, holding data from prepareData()
          label: 'Liter diesel',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'Diesel'
        }
      }
  
    });
  }

    // 3: create and append the chart
    function appendKWhChart1(kWhData) {
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
              label: 'Elektricitet/kWh',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'El/kWh'
            }
          }
      
        });
      }
      function appendKWhChart2(kWhData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(kWhData);
        //open the developer console to inspect the result
        let chartContainer4 = document.getElementById('user2ChartContainer4');
        let chart = new Chart(chartContainer4, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.kWh, // refering to the data object, holding data from prepareData()
              label: 'Elektricitet/kWh',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'El/kWh'
            }
          }
      
        });
      }
      function appendKWhChart3(kWhData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(kWhData);
        //open the developer console to inspect the result
        let chartContainer4 = document.getElementById('user3ChartContainer4');
        let chart = new Chart(chartContainer4, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.kWh, // refering to the data object, holding data from prepareData()
              label: 'Elektricitet/kWh',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'El/kWh'
            }
          }
      
        });
      }
      function appendKWhChart4(kWhData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(kWhData);
        //open the developer console to inspect the result
        let chartContainer4 = document.getElementById('user4ChartContainer4');
        let chart = new Chart(chartContainer4, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.kWh, // refering to the data object, holding data from prepareData()
              label: 'Elektricitet/kWh',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'El/kWh'
            }
          }
      
        });
      }
      function appendKWhChart5(kWhData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(kWhData);
        //open the developer console to inspect the result
        let chartContainer4 = document.getElementById('user5ChartContainer4');
        let chart = new Chart(chartContainer4, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.kWh, // refering to the data object, holding data from prepareData()
              label: 'Elektricitet/kWh',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'El/kWh'
            }
          }
      
        });
      }
      function appendKWhChart6(kWhData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(kWhData);
        //open the developer console to inspect the result
        let chartContainer4 = document.getElementById('user6ChartContainer4');
        let chart = new Chart(chartContainer4, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.kWh, // refering to the data object, holding data from prepareData()
              label: 'Elektricitet/kWh',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'El/kWh'
            }
          }
      
        });
      }
      function appendKWhChart7(kWhData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(kWhData);
        //open the developer console to inspect the result
        let chartContainer4 = document.getElementById('user7ChartContainer4');
        let chart = new Chart(chartContainer4, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.kWh, // refering to the data object, holding data from prepareData()
              label: 'Elektricitet/kWh',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'El/kWh'
            }
          }
      
        });
      }
      function appendKWhChart8(kWhData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(kWhData);
        //open the developer console to inspect the result
        let chartContainer4 = document.getElementById('user8ChartContainer4');
        let chart = new Chart(chartContainer4, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.kWh, // refering to the data object, holding data from prepareData()
              label: 'Elektricitet/kWh',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'El/kWh'
            }
          }
      
        });
      }
      function appendKWhChart9(kWhData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(kWhData);
        //open the developer console to inspect the result
        let chartContainer4 = document.getElementById('user9ChartContainer4');
        let chart = new Chart(chartContainer4, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.kWh, // refering to the data object, holding data from prepareData()
              label: 'Elektricitet/kWh',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'El/kWh'
            }
          }
      
        });
      }
    


    // 3: create and append the chart
    function appendDryChart1(dryData) {
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
              label: 'Kg tørfoder',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Tørfoder'
            }
          }
      
        });
      }
      function appendDryChart2(dryData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(dryData);
        //open the developer console to inspect the result
        let chartContainer5 = document.getElementById('user2ChartContainer5');
        let chart = new Chart(chartContainer5, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.dryMatter, // refering to the data object, holding data from prepareData()
              label: 'Kg tørfoder',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Tørfoder'
            }
          }
      
        });
      }
      function appendDryChart3(dryData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(dryData);
        //open the developer console to inspect the result
        let chartContainer5 = document.getElementById('user3ChartContainer5');
        let chart = new Chart(chartContainer5, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.dryMatter, // refering to the data object, holding data from prepareData()
              label: 'Kg tørfoder',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Tørfoder'
            }
          }
      
        });
      }
      function appendDryChart4(dryData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(dryData);
        //open the developer console to inspect the result
        let chartContainer5 = document.getElementById('user4ChartContainer5');
        let chart = new Chart(chartContainer5, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.dryMatter, // refering to the data object, holding data from prepareData()
              label: 'Kg tørfoder',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Tørfoder'
            }
          }
      
        });
      }
      function appendDryChart5(dryData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(dryData);
        //open the developer console to inspect the result
        let chartContainer5 = document.getElementById('user5ChartContainer5');
        let chart = new Chart(chartContainer5, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.dryMatter, // refering to the data object, holding data from prepareData()
              label: 'Kg tørfoder',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Tørfoder'
            }
          }
      
        });
      }
      function appendDryChart6(dryData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(dryData);
        //open the developer console to inspect the result
        let chartContainer5 = document.getElementById('user6ChartContainer5');
        let chart = new Chart(chartContainer5, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.dryMatter, // refering to the data object, holding data from prepareData()
              label: 'Kg tørfoder',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Tørfoder'
            }
          }
      
        });
      }
      function appendDryChart7(dryData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(dryData);
        //open the developer console to inspect the result
        let chartContainer5 = document.getElementById('user7ChartContainer5');
        let chart = new Chart(chartContainer5, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.dryMatter, // refering to the data object, holding data from prepareData()
              label: 'Kg tørfoder',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Tørfoder'
            }
          }
      
        });
      }
      function appendDryChart8(dryData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(dryData);
        //open the developer console to inspect the result
        let chartContainer5 = document.getElementById('user8ChartContainer5');
        let chart = new Chart(chartContainer5, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.dryMatter, // refering to the data object, holding data from prepareData()
              label: 'Kg tørfoder',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Tørfoder'
            }
          }
      
        });
      }
      function appendDryChart9(dryData) {
        // using prepareData() to get the excact data we want
        let data = prepareData(dryData);
        //open the developer console to inspect the result
        let chartContainer5 = document.getElementById('user9ChartContainer5');
        let chart = new Chart(chartContainer5, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            labels: data.years, // refering to the data object, holding data from prepareData()
            datasets: [{
              data: data.dryMatter, // refering to the data object, holding data from prepareData()
              label: 'Kg tørfoder',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Tørfoder'
            }
          }
      
        });
      }
  
    // 3: create and append the chart
    function appendSelfFeedChart1(selfFeedData) {
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
              label: '% Selvforsyning af foder',
              backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
              borderColor: '#6A6747'
            }]
          },
          // Configuration options goes here
          // Go to the docs to find more: https://www.chartjs.org/docs/latest/
          options: {
            title: {
              display: true,
              text: 'Selvforsyning'
            }
          }
      
        });
      }
      // 3: create and append the chart
    function appendSelfFeedChart2(selfFeedData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(selfFeedData);
      //open the developer console to inspect the result
      let chartContainer6 = document.getElementById('user2ChartContainer6');
      let chart = new Chart(chartContainer6, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.selfFeed, // refering to the data object, holding data from prepareData()
            label: '% Selvforsyning af foder',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'Selvforsyning'
          }
        }
    
      });
    }
    // 3: create and append the chart
    function appendSelfFeedChart3(selfFeedData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(selfFeedData);
      //open the developer console to inspect the result
      let chartContainer6 = document.getElementById('user3ChartContainer6');
      let chart = new Chart(chartContainer6, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.selfFeed, // refering to the data object, holding data from prepareData()
            label: '% Selvforsyning af foder',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'Selvforsyning'
          }
        }
    
      });
    }
    // 3: create and append the chart
    function appendSelfFeedChart4(selfFeedData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(selfFeedData);
      //open the developer console to inspect the result
      let chartContainer6 = document.getElementById('user4ChartContainer6');
      let chart = new Chart(chartContainer6, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.selfFeed, // refering to the data object, holding data from prepareData()
            label: '% Selvforsyning af foder',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'Selvforsyning'
          }
        }
    
      });
    }
    // 3: create and append the chart
    function appendSelfFeedChart5(selfFeedData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(selfFeedData);
      //open the developer console to inspect the result
      let chartContainer6 = document.getElementById('user5ChartContainer6');
      let chart = new Chart(chartContainer6, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.selfFeed, // refering to the data object, holding data from prepareData()
            label: '% Selvforsyning af foder',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'Selvforsyning'
          }
        }
    
      });
    }
    // 3: create and append the chart
    function appendSelfFeedChart6(selfFeedData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(selfFeedData);
      //open the developer console to inspect the result
      let chartContainer6 = document.getElementById('user6ChartContainer6');
      let chart = new Chart(chartContainer6, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.selfFeed, // refering to the data object, holding data from prepareData()
            label: '% Selvforsyning af foder',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'Selvforsyning'
          }
        }
    
      });
    }
    // 3: create and append the chart
    function appendSelfFeedChart7(selfFeedData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(selfFeedData);
      //open the developer console to inspect the result
      let chartContainer6 = document.getElementById('user7ChartContainer6');
      let chart = new Chart(chartContainer6, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.selfFeed, // refering to the data object, holding data from prepareData()
            label: '% Selvforsyning af foder',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'Selvforsyning'
          }
        }
    
      });
    }
    // 3: create and append the chart
    function appendSelfFeedChart8(selfFeedData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(selfFeedData);
      //open the developer console to inspect the result
      let chartContainer6 = document.getElementById('user8ChartContainer6');
      let chart = new Chart(chartContainer6, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.selfFeed, // refering to the data object, holding data from prepareData()
            label: '% Selvforsyning af foder',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'Selvforsyning'
          }
        }
    
      });
    }
    // 3: create and append the chart
    function appendSelfFeedChart9(selfFeedData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(selfFeedData);
      //open the developer console to inspect the result
      let chartContainer6 = document.getElementById('user9ChartContainer6');
      let chart = new Chart(chartContainer6, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.selfFeed, // refering to the data object, holding data from prepareData()
            label: '% Selvforsyning af foder',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'Selvforsyning'
          }
        }
    
      });
    }










  
  // 3: create and append the chart
  function appendFootprintChart1(footPrintData) {
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
          label: 'CO2 udslip',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'CO2'
        }
      }
  
    });
  }

    // 3: create and append the chart
    function appendFootprintChart2(footPrintData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(footPrintData);
      //open the developer console to inspect the result
      let chartContainer7 = document.getElementById('user2ChartContainer7');
      let chart = new Chart(chartContainer7, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.footprint, // refering to the data object, holding data from prepareData()
            label: 'CO2 udslip',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'CO2'
          }
        }
    
      });
    }
      // 3: create and append the chart
  function appendFootprintChart3(footPrintData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(footPrintData);
    //open the developer console to inspect the result
    let chartContainer7 = document.getElementById('user3ChartContainer7');
    let chart = new Chart(chartContainer7, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.footprint, // refering to the data object, holding data from prepareData()
          label: 'CO2 udslip',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'CO2'
        }
      }
  
    });
  }
    // 3: create and append the chart
    function appendFootprintChart4(footPrintData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(footPrintData);
      //open the developer console to inspect the result
      let chartContainer7 = document.getElementById('user4ChartContainer7');
      let chart = new Chart(chartContainer7, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.footprint, // refering to the data object, holding data from prepareData()
            label: 'CO2 udslip',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'CO2'
          }
        }
    
      });
    }
      // 3: create and append the chart
  function appendFootprintChart5(footPrintData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(footPrintData);
    //open the developer console to inspect the result
    let chartContainer7 = document.getElementById('user5ChartContainer7');
    let chart = new Chart(chartContainer7, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.footprint, // refering to the data object, holding data from prepareData()
          label: 'CO2 udslip',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'CO2'
        }
      }
  
    });
  }
    // 3: create and append the chart
    function appendFootprintChart6(footPrintData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(footPrintData);
      //open the developer console to inspect the result
      let chartContainer7 = document.getElementById('user6ChartContainer7');
      let chart = new Chart(chartContainer7, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.footprint, // refering to the data object, holding data from prepareData()
            label: 'CO2 udslip',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'CO2'
          }
        }
    
      });
    }
      // 3: create and append the chart
  function appendFootprintChart7(footPrintData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(footPrintData);
    //open the developer console to inspect the result
    let chartContainer7 = document.getElementById('user7ChartContainer7');
    let chart = new Chart(chartContainer7, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.footprint, // refering to the data object, holding data from prepareData()
          label: 'CO2 udslip',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'CO2'
        }
      }
  
    });
  }
    // 3: create and append the chart
    function appendFootprintChart8(footPrintData) {
      // using prepareData() to get the excact data we want
      let data = prepareData(footPrintData);
      //open the developer console to inspect the result
      let chartContainer7 = document.getElementById('user8ChartContainer7');
      let chart = new Chart(chartContainer7, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: data.years, // refering to the data object, holding data from prepareData()
          datasets: [{
            data: data.footprint, // refering to the data object, holding data from prepareData()
            label: 'CO2 udslip',
            backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
            borderColor: '#6A6747'
          }]
        },
        // Configuration options goes here
        // Go to the docs to find more: https://www.chartjs.org/docs/latest/
        options: {
          title: {
            display: true,
            text: 'CO2'
          }
        }
    
      });
    }
      // 3: create and append the chart
  function appendFootprintChart9(footPrintData) {
    // using prepareData() to get the excact data we want
    let data = prepareData(footPrintData);
    //open the developer console to inspect the result
    let chartContainer7 = document.getElementById('user9ChartContainer7');
    let chart = new Chart(chartContainer7, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: data.years, // refering to the data object, holding data from prepareData()
        datasets: [{
          data: data.footprint, // refering to the data object, holding data from prepareData()
          label: 'CO2 udslip',
          backgroundColor: '#f1f1f1', // Customise the graf color etc. Go to the docs to find more: https://www.chartjs.org/docs/latest/
          borderColor: '#6A6747'
        }]
      },
      // Configuration options goes here
      // Go to the docs to find more: https://www.chartjs.org/docs/latest/
      options: {
        title: {
          display: true,
          text: 'CO2'
        }
      }
  
    });
  }

  

  

  

  


  