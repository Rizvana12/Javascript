//Promise

console.log("script start")
const bucket = ['coffee','chips','vegetables','salt','rice']


const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice") ){
        resolve("friedRice")
    }else{
        reject("could not do it")
    }
})

//consume
//how to consume

friedRicePromise.then(
    (myFriedRice)=>{
        console.log("let's eat",myFriedRice)
    }
).catch((error)=>{
    console.log(error)
})

setTimeout(()=>{
    console.log("hello from settimeout")
},1000)

for(let i=1;i<=100;i++){
    console.log(Math.random(), i)
}

console.log("script end");


//The Promise execution happens as part of the microtask queue processing phase.

//When you have a setTimeout function callback scheduled, that function is added to the event loop's macrotask queue and executed when the last running code in the main execution context stack is finished

//It doesn't matter if you have the setTimeout callback scheduled at 0 milisecond. The priority is such that before the tasks in the macrotask queue is de-queued for processing in the next tick of the event loop, the microtask queue will be processed before that.
