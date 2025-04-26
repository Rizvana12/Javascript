//function returning promise

function ricePromise(){
    const bucket = ['coffee','chips','vegetables','salt','rice']
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice") ){
            resolve("friedRice")
        }else{
            reject("could not do it")
        }
    })
}

ricePromise().then((myFriedRice)=>{console.log("let's eat",myFriedRice)}).catch((error)=>{console.log(error)})