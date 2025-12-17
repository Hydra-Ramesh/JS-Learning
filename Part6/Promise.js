// const promiseOne = new Promise((resolve, reject)=>{
//     //Do async task
//     //Ex DB Operation and Network Request and Cryptography
//     setTimeout(function(){
//         console.log("Async Task 1 Completed");
//         resolve();
//     }, 10000);
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task 2 Completed");
//         resolve();
//     }, 5000);
// }).then(function(){
//     console.log("Promise 2 Consumed");
// })

// const userPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName: "Anik", emailId: "anik@example.com"})
//     }, 3000);
// })

// userPromise.then(function(user){
//     console.log(user);
// })

// const anotherPomise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({userName: "Anik", emailId: "anik@example.com"})
//         }else{
//             reject("Error: Something went wrong");
//         }
//     }, 4000);
// })
// anotherPomise
// .then(function(user){
//     console.log(user);
//     return user.userName;
// })
// .then(function(userName){
//     console.log(userName);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("Execution Completed");
// })


// // Async Await
// async function consumerData(){
//     try{
//         const res = await anotherPomise;
//         console.log(res);
//     }catch(error){
//         console.log("Error: ", error);
//     }
// }
// consumerData();


async function getAllRepos(){
    try{
        const res = await fetch("https://api.github.com/users/Hydra-Ramesh/repos");
        const data = await res.json();
        console.log(data);
    }catch(error){
        console.log("Error: ", error);
    }
}

getAllRepos();