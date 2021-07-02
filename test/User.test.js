const User= require('../src/User');
const Scooter= require('../src/Scooter');
const ChargingStation=require('../src/ChargingStation')

describe('User Object',() => {

const user= new User('afreen@verizon.com','53GFD',28,'Dallas')
const user1= new User('bob@gmail.com','TF125',15,'Plano')
  //1-Data types test
    test ('User has username',()=>{
        expect(user.username).toBe('afreen@verizon.com');
        });

    test ('User has password',()=>{
        expect(user.password).toBe('53GFD');
        });

    test ('User has age',()=>{
        expect(user.age).toBe(28);
        });

    test ('User has location',()=>{
        expect(user.location).toBe('Dallas');
        });

    test('username is of type string', () => {
        expect(typeof user.username).toBe('string')
        })

    test('password is of type string', () => {
        expect(typeof user.password).toBe('string')
        })

  //make sure that the email is in the correct format @verizon.com
    test('make sure that the email is in the correct format', () => {
    const email = user.username // 'verizon123@verizon.com'
    // 0
    //[v,e,r,i,z,o,n,1,2,3,@,v,e,r,i,z,o,n,.,c,o,m]
    const indexOfAt = email.split('').indexOf('@') //10
    //slice method
        expect(email.slice(indexOfAt)).toBe('@verizon.com')
    })

    test('the changeUsername method changes the this.username property', () => {
    user.changeUsername('bob123@verizon.com')
        expect(user.username).toBe('bob123@verizon.com')
    })

    test('the changePassword method changes the this.password property', () => {
        user.changePassword('78143S')
            expect(user.password).toBe('78143S')
        })

      //Methods
    test ('User downloads scooter app',() => {
        expect(user.downloadApp()).tobeTruthy;

    })

    test ('User gets register',() => {
        expect(user.getRegistered()).toBe("Registered Successfully");
        expect(user1.getRegistered()).toBe("Must be 18 or older to get registered")

    })


})