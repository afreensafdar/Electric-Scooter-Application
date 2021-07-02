
class User{
    constructor(username,password,age,location){
        this.username=username
        this.password=password
        this.age=age
        this.location=location
        this.downloadApp

    }

    changeUsername(updatedName) {
        this.username = updatedName
    }

    changePassword(updatePassword) {
        this.password=updatePassword
    }

    downloadApp() {
        return this.downloadApp=true;
    }


    getRegistered() {
        if(this.age>=18 && this.username !== null && this.password !== null){
            return "Registered Successfully";

            } else {
                return "Must be 18 or older to get registered"
            }
    }

    rentScooter(){

    }

    returnScooter() {

    }


    
    
}
module.exports=User;