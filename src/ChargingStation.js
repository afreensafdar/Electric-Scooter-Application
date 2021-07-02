class ChargingStation {
    constructor(serialId,name,location){
        this.serialId=serialId
        this.name=name
        this.location=location
        this.scooter=[]
    }

    addScooter(scooter){
        this.scooter.push(scooter);

    }

    removeScooter(username,scooter){
        this.scooter.pop(scooter)

    }

    processPayment() {
        if(this.addScooter()==true){
            return "Payment completed"
        }
        else {
            return "Do the payment"
        }
        
    }

    repairScooter() {

    }

    chargeScooter(){

    }

}
module.exports=ChargingStation;