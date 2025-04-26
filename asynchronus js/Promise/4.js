//Promise.resolve--->returns a Promise

//Promise chaining

// const myPromise = Promise.resolve(5);
// console.log(myPromise)

// Promise.resolve(5).then((value)=>{
//     console.log(value)
// })

//Promise chaining

//JavaScript promises are chainable. Each .then() returns a new Promise that resolves to whatever you return inside the previous .then()

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo")
    })
}
myPromise().then((value)=>{
    console.log(value);
    value +="bar";
    return value;
})
.then((modifiedValue)=>{
    console.log(modifiedValue);
    modifiedValue += "baaz";
    return modifiedValue
})
.then((finalValue)=>{
    console.log(finalValue)
})