class Scooter {
    constructor(serialNumber,charge,location){
        this.serialNumber=serialNumber;
        this.charge=charge
        this.location=location
        
    }

    updateLocation(newlocation) {
        this.location=newlocation

    }

    async charge() {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

        console.log('Charge complete');   
    }

    rentScooter() {
        if (this.charge!=100) {
            console.log("Scooter needs to be charged.");
            this.charge();
        } else {
            console.log('Enjoy your trip');
        }
    }

    returnScooter() {
        this.charge = 0;
        console.log("Thanks for your service!");
    }
}

module.exports=Scooter;