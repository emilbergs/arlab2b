/*
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
    let chartContainer1 = document.getElementById('chartContainer1');
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
    let chartContainer2 = document.getElementById('chartContainer2');
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
    let chartContainer3 = document.getElementById('chartContainer3');
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
        let chartContainer4 = document.getElementById('chartContainer4');
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
        let chartContainer5 = document.getElementById('chartContainer5');
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
        let chartContainer6 = document.getElementById('chartContainer6');
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
    let chartContainer7 = document.getElementById('chartContainer7');
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
 */