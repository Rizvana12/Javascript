//fetch
//fetch(URL) starts an HTTP request and immediately returns a Promise.
//That Promise is automatically resolved by the browser once the HTTP response is received.


// const URL = "https://jsonplaceholder.typicode.com/postss";

// fetch(URL)
//    .then(response =>{
//     return response.json()
//    })
//    .then(data =>{
//     console.log(data)
//    })
//    //here catch is not working in the case of any error
//    .catch((error)=>{
//        console.log("inside catch")
//        console.log(error)
//    })


// const URL = "https://jsonplaceholder.typicode.com/postss";

// fetch(URL)
//    .then(response =>{
//     if(response.ok){
//         return response.json()
//     }else{
//         throw new Error("something went wrong")
//     }
//    })
//    .then(data =>{
//     console.log(data)
//    })
//    .catch((error)=>{
//        console.log("inside catch")
//        console.log(error)
// })

//using try and catch

const URL = "https://jsonplaceholder.typicode.com/posts";

//async function always returns a promise
async function utility() {
    try {
        const output = await fetch(URL);
        if (!output.ok) {
            throw new Error(`HTTP error! status: ${output.status}`);
        }
        const response = await output.json();
        return response;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

utility().then(data => {
    if (data) {
        console.log(data);
    }
});


//we can make any function asynchronus by using async keyword
//we can't use await untill we are inside a async function