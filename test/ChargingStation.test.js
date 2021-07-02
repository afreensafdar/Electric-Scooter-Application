const ChargingStation=require('../src/ChargingStation')
const Scooter= require('../src/Scooter')

describe('Charging Station Object',()=>{
    const chargingStation=new ChargingStation(154,'Scooter Rental','Dallas')
    test ('charging station has a serialId',()=>{
        expect(chargingStation.serialId).toBe(154)
    });

    test ('charging station has a name',()=>{
        expect(chargingStation.name).toBe('Scooter Rental')
    });

    test ('charging station has a location',()=>{
        expect(chargingStation.location).toBe('Dallas')
    });




})