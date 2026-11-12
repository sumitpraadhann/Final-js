// const promises = new Promise((res,rej)=>{
//     let age = 18
//     if(age>=18){
//         res("Allowed")
//     }else{
//         rej( "Not allowed")
//     }
// })

// promises.then((resu)=>{
//     console.log(resu)
// })
// .catch((err)=>{
    // console.log(err)
// })

// function delay(ms){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Sumit")
//         },ms)
//     })
// }



// delay(1000).then((msg) => console.log(msg));   // 1 second baad "Done"

// const  p = new Promise((res,rej)=>{
//     res("Solve ho gaya"),
//     rej("error ayga")
// })

// p
// .then((val)=> console.log(val))
// .catch((val)=> console.log(val))

    // function checkage(age){
    //     return new Promise((res,rej)=>{
    // if(age>=18){
    // res=("Allowed")
    // }else{
    //     rej("Not allowed")
    // }
    //     })

    // }

    // checkage(20).then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
    // checkage(18).then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))
    // checkage(15).then((msg)=>console.log(msg)).catch((msg)=>console.log(msg))


    // function delay(ms){
    // return new Promise((res,rej)=>{
    //     setTimeout(()=>{
    //         res("Done")
    //     },ms)
    // })
    // }
    // delay(1000).then((val)=> console.log(val))



    // Promise chaing

//         Promise.resolve(3)
//     .then((n) => n * 2)
//     .then((n) => n + 1)
//     .then((n) => console.log(n));

// console.log("Hello");

//     Promise.resolve(10)
//     .then((n) => {
//         console.log(n);
//     })
//     .then((n) => {
//         console.log(n);
//     });
 

