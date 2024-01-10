// PORJECT NAME: Car OO Challenge
// FILE: script.js
// DATE: 1/9/24
// MOD DATE:
// MOD CHANGES:
// MOD LINE:
// VERSION: 0.0.1
// PROGRAMER: Charles Matthew Milam Jr
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Constructor to initialize make, model, and year of the vehicle
class vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "BEEP";
  }
  revEngine() {
    return "VROOM";
  }
  toString() {
    return `Make: ${this.make} Model: ${this.model} Year: ${this.year}`;
  }
}

capacity = 2;

const listOfVehicle = [];

function addToGarage() {
  class Garage {
    constructor(capacity) {
      this.listOfVehicle = [];
      this.capacity = capacity;
    }
    add() {
      // Call the inputvalues function to gather user input for a new vehicle
      let addVehicle = inputvalues();
      return addVehicle;
    }
  }

  const addTo = new Garage();

  let added = addTo.add();
}

function inputvalues() {
  const type = document.querySelector("#type").value;
  const make = document.querySelector("#make").value;
  const model = document.querySelector("#model").value;
  const year = document.querySelector("#year").value;

  const enteredVehicle = new vehicle(make, model, year);
  listOfVehicle.push(enteredVehicle);
  // Define constants for vehicle types
  let motorcycle = "motorcycle";
  let car = "car";
  let vType = type;
  let empty = "empty";
  str = enteredVehicle.toString();
  Honk = enteredVehicle.honk();
  Rev = enteredVehicle.revEngine();
  // Check the vehicle type and display information accordingly
  if (vType.includes(empty)) {
    alert("Only vehicles are allowed in here");
  } else if (vType.includes(motorcycle)) {
    numWheels = 2;
    postVehicle().textContent = str;
    postVehicle().textContent = Rev;
    postVehicle().textContent = "Number of wheels" + numWheels;
  } else {
    numWheels = 4;
    postVehicle().textContent = str;
    postVehicle().textContent = Honk;
    postVehicle().textContent = "Number of wheels" + numWheels;
  }

  if (listOfVehicle.length > 5) {
    alert("Sorry, we're full.");
  }
}
// Function to create and append a new paragraph element for displaying vehicle information

function postVehicle() {
  let output = document.querySelector("#output");
  let div = document.createElement("div");
  div.className = "vBlock";
  output.appendChild(div);
  let p = document.createElement("p");
  div.appendChild(p);
  return p;
}

document.querySelector("#submitBtn").addEventListener("click", addToGarage);
