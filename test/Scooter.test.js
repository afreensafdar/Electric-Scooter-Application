const Scooter= require('../src/Scooter');
describe ("Scooter",()=>{
    const scooter=new Scooter(123,100,'Dallas')

    test('scooter has serialNumber',()=>{
        expect(scooter.serialNumber).toBe(123)
        })

    test('scooter has charge',()=>{
        expect(scooter.charge).toBe(100)
        })

    test('scooter has location',()=>{
        expect(scooter.location).toBe('Dallas')
        })

//SerialNumbers - first 5 are letters, the rest are numbers 10
    // const firstFiveletters=scooter.serialNumber.
    // slice(0,5).join('');
    // const lastFiveNum=pareseInt(scooter.serialNumber.slice(5).join(''))
    // const Number=firstFiveletters.join(lastFiveNum)
    

    test('scooter location updated to new location',()=>{
        const testScooter=new Scooter(354,100,'Dallas')
        testScooter.updateLocation('Irving')
        expect(testScooter.location).toBe('Irving')
       // expect(scooter.updateLocation('Irving')).toBe('Irving')
    })

    

    test("charge scooter", async () => {
        const scooter = new Scooter();
        await scooter.charge(); // we need to wait for the charge!
        console.log("Test complete");
    });

    test('scooter to be rented',()=> {
        expect(scooter.rentScooter()).toBeTruthy
        expect(scooter.rentScooter()).toBeFalsy
    })

    test("scooter to be returned",()=>{
        expect(scooter.returnScooter()).toBeFalsy
    })
})