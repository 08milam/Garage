

/** Type of vehicle */
const form = document.querySelector('#form')

form.addEventListener('submit', function(event){

  make = document.querySelector('#make').value
  model = document.querySelector('#model').value
  year = document.querySelector('#year').value


  class vehicle{

   constructor(make, model, year){
       this.make = make
       this.model = model;
       this.year = year;
   }
   
   honk(){
       return 'Beep'
   }
   toString(){
       return `${this.make} ${this.model} ${this.year}`
   }
   
}

console.log(vehicle.honk())
// MFV = My First Vehicle
let MFV = new vehicle (make, model, year);
vehicle.toString() + vehicle.honk();

  event.preventDefault()

console.log(MFV)
})



add(newVehicle) {
  if (!(newVehicle instanceof Vehicle)) {
    return "Only vehicles are allowed in here!";
  }
  if (this.vehicles.length >= this.capacity) {
    return "Sorry, we're full.";
  }
  this.vehicles.push(newVehicle);
  return "Vehicle added!";
}




// const output = document.querySelector('#output')
// statment.innerText = 'Your Make is ' + make + ', model ' + model + ' and year is ' + year
// output.appendChild(statment)
