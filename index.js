// tamrin polymorphism
class Vehicle {
constructor(make, model,year){
this.make = make;
this.model = model;
this.year = year;
}
move(){
console.log(`vehicle is moving`);
}
}
//tarif class car
class Car extends Vehicle{
    //tamrin private class
    #enginStatus;
    constructor(make,model,year) {
       super(make, model, year);
        this.#enginStatus = "off";//first value
    }
    
    get engineStatus(){
        return this.#enginStatus
    }
    
    set engineStatus(state){
        if(state === 'on'){
        this.#enginStatus = state
        console.log(`your cars is${state}`)
        }else {
        console.log(`your cars is ${state}`)
        }
    }
        
    startEngine(){
    console.log(`Car ${this.model}, is starting`)
    }
    
    move(){
        console.log(`car is moving`)
    }
    
}
let newcar = new Car('BMW','X6','2022');
newcar.startEngine();
newcar.engineStatus = 'off'
newcar.move()

//tarif bike
class Bike extends Vehicle{
    constructor(make, model, year){
    super(make, model, year)
    }
    move(){
    console.log(`Bike is moving`)
    }
}

let newBike = new Bike('sherr', 'superr', '2000')
newBike.move()

// tarif inheritance 
class ElectricCar extends Car{
    constructor(make,model,year, batteryLevel= 100) {
       super(make, model, year);
       this.batteryLevel = batteryLevel
    }
    chargeBattery(item){
    this.batteryLevel += item;
    if (this.batteryLevel > 100 )
    {
    this.batteryLevel = 100
    console.log('your battery is full')
    }else {console.log(`your batter is${this.batteryLevel}`)}
    }
    
    startEngine(){
    console.log(`your battery level is${this.batteryLevel}`)
    }
}
let newElectricCar = new ElectricCar("benz","S200","2015",40)
newElectricCar.chargeBattery(20)
newElectricCar.startEngine()

// tarif drive class
class Driver {  
   drive(vehicle) {  
        if (typeof vehicle.startEngine === 'function') {  
            vehicle.startEngine();  
            vehicle.move();  
        } else {  
            console.log("This vehicle cannot be driven.");  
        }  
    }  
}  

 
let driver = new Driver();  
driver.drive(newcar);               
driver.drive(newElectricCar);
