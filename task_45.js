class Car{
    constructor(manufacturer, model, year, color,...optionalData){
      this.manufacturer = manufacturer;
      this.model = model;
      this.year = year;
      this.color = color;
      this.optionalData = optionalData
      
    }
    showData(){

        console.log(this.manufacturer)
        console.log(this.model)
        console.log(this.year)
        console.log(this.color)
    
        for (var i = 0; i < this.optionalData.length; i++) {
          console.log( this.optionalData[i]);
        }
        console.log("\n")

      }
    }


var car1 = new Car(manufacturer="Toyota", model="Camery", year=2022, color="white", reg="Karachi")
var car2 = new Car(manufacturer="Honda", model="Civic", year= 2021, color="Grey", reg="Lahore", body="Sedan")
var car3 = new Car(manufacturer="Toyota", model="Fortuner", year= 2022, color="Black", reg="Islamabad", body="SUV")


car1.showData()
car2.showData()
car3.showData()

