// map


// const arr  = [1,2,3,4,5]

// const result = arr.map((i)=> i *2)

// console.log(result)

// const nums = [5, 12, 8, 130, 44, 3, 17];
// const result = nums.filter((num)=> num > 10)
// console.log(result)

// const users = [
//   { id: 1, name: "Aman", age: 22 },
//   { id: 2, name: "Riya", age: 17 },
//   { id: 3, name: "Karan", age: 30 },
// ];

// const result = users
//   .filter(user => user.age >= 18)
//   .map(user => user.name);
//   console.log(result)

// const prices = [250, 100, 450, 200];

// const finalprice = prices.reduce((total,num)=>total + num )
// console.log(finalprice)

// const cart = [
//   { id: 1, name: "Keyboard", price: 1500, qty: 2 },
//   { id: 2, name: "Mouse", price: 600, qty: 1 },
//   { id: 3, name: "Monitor", price: 8000, qty: 1 },
//   { id: 4, name: "USB Cable", price: 200, qty: 3 },
// ];

// const m = cart.map((total)=>total.price*total.qty)
// const finaltotal = m.reduce((final,num)=> final + num)
// console.log(finaltotal)

// const cart = [
//   { id: 1, name: "Keyboard", price: 1500, qty: 2, inStock: true },
//   { id: 2, name: "Mouse", price: 600, qty: 1, inStock: false },
//   { id: 3, name: "Monitor", price: 8000, qty: 1, inStock: true },
//   { id: 4, name: "USB Cable", price: 200, qty: 3, inStock: true },
// ];

// let stockqty = cart.filter((product)=> product.inStock === true)

// let  finalstock = stockqty.map((item) => `${item.name} x${item.qty} -${item.price* item.qty}`)
// console.log(finalstock)

// const orders = [
//   { id: 101, customer: "Aman", amount: 2500, status: "delivered" },
//   { id: 102, customer: "Riya", amount: 1200, status: "pending" },
//   { id: 103, customer: "Karan", amount: 4800, status: "delivered" },
//   { id: 104, customer: "Neha", amount: 900, status: "cancelled" },
//   { id: 105, customer: "Sahil", amount: 3100, status: "delivered" },
// ];

// const deliver = orders.filter((items)=> items.status === "delivered")
// const finaldeliver = deliver.reduce((num,index)=>{
//  return num + index.amount
// },0)
// console.log(finaldeliver)

// const customers = deliver.sort((a,b)=>b.amount - a.amount)
// const finalcustomername = customers.map((names)=>names.customer)
// console.log(finalcustomername)

// const orders = [
//   { id: 1, status: "delivered" },
//   { id: 2, status: "pending" },
//   { id: 3, status: "delivered" },
//   { id: 4, status: "cancelled" },
//   { id: 5, status: "delivered" },
//   { id: 6, status: "pending" },
// ];


// const counts = orders.reduce((acc, order) => {
//   acc[order.status] = (acc[order.status] || 0) + 1;
//   return acc;
// }, {});

// console.log(counts);

// const orders = [
//   { name: "Aman", amount: 2000, status: "delivered" },
//   { name: "Riya", amount: 3000, status: "pending" },
//   { name: "Karan", amount: 5000, status: "delivered" },
//   { name: "Sumit", amount: 1500, status: "delivered" }
// ];

// const f = orders.filter((items)=>items.status === "delivered")

// const result = f.reduce((a, b) => {

//   return {
//     totalRevenue: a.totalRevenue + b.amount,
//     totalOrders: a.totalOrders + 1
//   };

// }, {
//   totalRevenue: 0,
//   totalOrders: 0
// });
// console.log(result)
// const expenses = [
//   { id: 1, title: "Pizza", category: "food", amount: 300 },
//   { id: 2, title: "Bus pass", category: "travel", amount: 500 },
//   { id: 3, title: "Burger", category: "food", amount: 200 },
//   { id: 4, title: "Movie", category: "fun", amount: 400 },
//   { id: 5, title: "Auto", category: "travel", amount: 150 },
// ];

//  const result = expenses.reduce((a,b)=>{
// a[b.category] = (a[b.category] || 0) + b.amount;
//  return a
//  },{})

//  console.log(result)

// const expenses = [
//   { id: 1, title: "Pizza", category: "food", amount: 300 },
//   { id: 2, title: "Bus pass", category: "travel", amount: 500 },
//   { id: 3, title: "Burger", category: "food", amount: 200 },
//   { id: 4, title: "Movie", category: "fun", amount: 400 },
//   { id: 5, title: "Auto", category: "travel", amount: 150 },
// ];

// const result = expenses.reduce((a, b) => {

//   a[b.category] = a[b.category] || {
//     totalAmount: 0,
//     count: 0
//   };

//   a[b.category].totalAmount += b.amount;

//   a[b.category].count += 1;

//   return a;

// }, {});

// console.log(result);
// const products = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Laptop", price: 50000 },
//   { name: "Monitor", price: 12000 }
// ];

// const res = products.reduce((a,b)=>{
// if (b.price < a.price) {
//     return b;
//   }

// return a
// },)

// console.log(res)


// let arr = [1, 2, 3, 4, 5, 6]
// let res = arr.filter((item)=>item%2 === 0)
//       .map((double)=>double*2)
//       console.log(res)

// function reversestring(str){
//   let res  = ""
// for(let i= str.length-1; i >= 0; i--){
//   res+=str[i]
// }
// return res
// }
// console.log(reversestring("Sumit"))

// function sumton(num){
//   let sum = 0
//   for(let i = 1; i<=num; i++){
//     sum+=i
//   }
//   return sum
// }

// console.log(sumton(10))

// function findmax(arr){
//   let max = arr[0]
// for(let i = 0; i <arr.length; i++){
//   if(max<arr[i]){
//     max =arr[i]
//   }
// }
// return max
// }
// console.log(findmax([2,3,7,9]))

// function findmax(str){
// let max =str[0]
// for(let i = 0; i < str.length; i++){
//   if(str[i]>max){
//     max=str[i]
//   }
// }
// return max
// }
// console.log(findmax([-5, -2, -9]))

  // function counteven(str){
  //   let countnum = 0
  //   for(let i = 0; i <str.length; i++){
  //     if(str[i]%2 === 0){
  //       countnum++
  //     }
  //   }
  //   return countnum

  // }
  // console.log(counteven([1, 2, 3, 4, 6]))

  // function countvowel(str){
  //   let count = 0
  //   for(let i = 0; i<str.length; i++){
  //     if("aeiou".includes(str[i])){
  //       count++
  //     }
  //   }
  //   return count
  // }
  // console.log(countvowel("java"))
  

  // function sumeven(arr){
  //   let sum = 0
  //  for(let i=0; i < arr.length; i++){
  //   if(arr[i]%2===0){
  //     sum+=arr[i]
  //   }
  //  }
  //  return sum
  // }
  // console.log(sumeven([1, 2, 3, 4, 6]))

//   function countgreater(arr,n){
//     let greater = 0
// for(let i = 0; i <arr.length; i++){
//   if(arr[i]>n){
//     greater++
//   }
// }
// return greater
//   }
//  console.log( countgreater([5, 12, 8, 20], 10))

// function countvowel(str){
//     let count = 0
//     for(let i = 0; i<str.length; i++){
//       if("aeiou".includes(str[i])){
//         count++
//       }
//     }
//     return count
//   }
//   console.log(countvowel("java"))


//   function sumarray(arr){
// let sum = 0
// for(let i = 0; i <arr.length; i++ ){
//   sum+=arr[i]
// }
// return sum
//   }

//   console.log(sumarray([10, 20, 30,20]))

function countChar(str, ch){
let count = 0
for(let  i = 0; i <str.length; i++){
  if(ch === str[i]){
    count++
  }
}
return count
}


console.log(countChar("bananansansaa","a"))