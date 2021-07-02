class Scooter {
    constructor(serialNumber,charge,location){
        this.serialNumber=serialNumber;
        this.charge=charge
        this.location=location
        
    }

    updateLocation(newlocation){
        this.location=newlocation

    }

    async charge() {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

        console.log('Charge complete');   
    }
}

module.exports=Scooter;