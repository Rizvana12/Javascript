// console.log("script start");

// for(let i=1;i<100;i++){
//     console.log("i am inside for loop")
// }

// console.log("script end");

//Js is synchronus language which means it executes code line by line

//setTimeout

// console.log('script start');

// setTimeout(function(){
//     console.log("i am inside settimeout")
// },1000);

// console.log("script end")
// console.log("script start")
// setTimeout(function(){
//     console.log("i am inside settimeout")
// },0);

// console.log("script end")

//setTimeout returns an id

// console.log("script start")
// const id=setTimeout(function(){
//     console.log("i am inside settimeout")
// },0);
// console.log("settimeout id",id)
// console.log("script end")

//clearsetTimeout

console.log("script start")
const id =setTimeout(function(){
    console.log("i am inside settimeout")
},0);
console.log(id)
clearTimeout(id);
console.log("script end")