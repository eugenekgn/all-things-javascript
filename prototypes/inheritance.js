(function () {
    'use strict';

    function Vehicle(miles) {
        this.miles = miles || 1000;
    }

    Vehicle.prototype.drive = function () {
        let totalMiles = this.miles;
        console.log(`${totalMiles} miles`);
    }

    function Bus(brand, seats) {
        Vehicle.call(this, 100);
        this.brand = brand;
        this.seats = seats;
    }

    Bus.prototype = Object.create(Vehicle.prototype);
    Bus.prototype.constructor = Bus;

    let mercedes = new Bus('Mercedes', 48);
    mercedes.drive();
    
    //es6 way
    
    class Plane {
        constructor(distance) {
            this.distance = distance;
        }

        showDistance() {
            let distance = this.distance;
            console.log(`${distance} miles traved`)
        }
    }

    class Boeing extends Plane {
        constructor(name, color) {
            super(1000);
            this.name = name || '787';
            this.color = color || 'white';
        }
    }
    
    let bigBoeing = new Boeing('787', 'red');
    bigBoeing.showDistance();
})();
