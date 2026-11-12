   // function outer() {
   //   let x = 10;
   //   function inner() {
   //     x++;
   //     return x;
   //   }
   //   return inner;
   // }
   // const fn = outer();
   // console.log(fn()); 11
   // console.log(fn());  12


   // function makemul(n){
   //    let f = n
   //    function inner(x){
   //      let c = x * f
   //     return c
   //    }
   //    return inner
   // }

   //   const double = makemul(2);
   // const triple = makemul(3);
   // console.log(double(5));   // 10
   // console.log(triple(5));   // 15

// function counter(){
//    let count = 0
//    function counetb(){
//       count++
//       return count
//    }
//    return counetb
// }

// let a = counter()
// let b = counter()
// console.log(a())
// console.log(a())
// console.log(b())

// function  createAccount(balance){

// const user = {
//    deposit:function(x){
//      balance = x+balance
//     return balance
//    },
// withdraw:function(y){
//  balance = balance-y
// return  balance
// }
// }
// return user
// }

//   const account = createAccount(100);
//    console.log(account.deposit(50)); 
//    console.log(account.withdraw(30))
//    console.log(account.deposit(40))
//    console.log((account.withdraw(100)))




// // let y = 5;

// // function showY() {
// //   console.log(y);
// // }

// // y = 50;
// // showY()

// // 50 ayga because function scope access kr skta h bhar vairable ko

// // for (let i = 0; i < 3; i++) {
// //   setTimeout(() => console.log(i), 0);
// // }

// //  0 1 2 beacuse let ki har bar value change hoti h var mai nhi hota h  wo sirf ek barr pura chlta h isliya 333 aaya th last time

// function createAccount(balance){
//    const user = {
//       deposit:function(dep){
//          balance+=dep
//          return balance
//       },
//       withdraw:function(amount){
//       if(balance>=amount){
//       balance = balance-amount
//       return balance
//       }else{
//          return ("Insufficient balance")
//       }
      
//     },
//     getBalance:function(){
//      return balance
//     }
    
//    }
//    return user
// }








// const account = createAccount(100);

// console.log(account.deposit(50));
// console.log(account.withdraw(500));   // "Insufficient balance"
// console.log(account.getBalance());    // 150
// console.log(account.balance);         // undefined


function createcounter(){
   let count = 0
let obj ={
     increment: function(){
      count++
      return count
     },
     decrement: function(){
      count--
      return count 
   },
    reset: function(){
       count = 0
       return count
    },
    getcount:function(){
      return count
    }

}
return obj

}
const counter = createcounter()
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.increment())
