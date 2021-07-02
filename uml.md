//User Stories (Usecases)

As a user,I want to rent electric scooter,by downloading the electric scooter hire app
As a user,I want to get registered ,by entering the registration details.
As a user ,I want to check the availability of scooter ,by selecting location
As a user ,I want to rent the scooter ,by checking out from the charging station.
As a user ,I want to pay for the scooter, by entering card details.
As a user,I want to return the scooter ,by checking in at charging station.

//Class Diagram
class User{
username:STRING
password:STRING
age:INTEGER
location:STRING
paymentInfo:INTEGER
downloadApp()
getRegister()
updateUsername()
updatePassword()
payRentScooter()
rentScooter()
returnScooter()
reportBroken()
}


class Scooter{
serailNumber:INTEGER
charge:boolean
location:STRING
}


class ChargingStation{
serialId:INTEGER
name:STRING
location:STRING
scooter:ARRAY
addScooter()
removeScooter()
processPayment()
chargeScooter()
repairScooter()



