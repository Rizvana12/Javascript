const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr)

// console.log(xhr.readyState)

//before open the readystate is 0

xhr.open("GET",URL);
// console.log(xhr.readyState)
//after open the readystate become 1
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState)
//     //untill the readyState become 4 , we don't get the response
//     if(xhr.readyState === 4){
//         // console.log(xhr.readyState)
//         const response = xhr.response;
//         // console.log(typeof response) //string
//         const data = JSON.parse(response);  //object
//         console.log(data)
//     }
// }

// xhr.send()


xhr.onload = function(){ //onload function tabhi call hota h jab readyState 4 hoti h
    // console.log(xhr.readyState)
    const response = xhr.response
    const data = JSON.parse(response);  //object
    console.log(data)
}

xhr.send();