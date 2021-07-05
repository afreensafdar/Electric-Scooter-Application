class ChargingStation {
    constructor(serialId,name,location,range){
        this.serialId=serialId
        this.name=name
        this.location=location
        this.scooter=[]
        this.range=range
    }

    addScooter(scooter){
        this.scooter.push(scooter);

    }

    removeScooter(username,scooter){
        const index = this.scooter.indexOf(scooter);
            this.scooter.splice(index, 1);
        }


    processPayment() {
        if(this.addScooter()==true){
            return "Payment completed"
        }
        else {
            return "Do the payment"
        }
    }
    }


module.exports=ChargingStation;