// function done() {
//   console.log("Done");
// }

// function run(callback) {
//   callback();
// }

// run(done);

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// // console.log("C");

// function calcul(a,b,callback){
//    return callback(a,b)

// }
// console.log(calcul(4,5,(x,y)=> x + y))



// const students = [
//   { name: "Amit", marks: 80 },
//   { name: "Riya", marks: 92 },
// ];
// function processStudents(students,callback){
//   for(let i = 0; i <students.length;i++){
//     callback(students[i])
//   }
// }

// processStudents(students, (student) => {
//   console.log(student.marks);
// });
// // Amit
// // Riya`

// function done() {
//   console.log("Done");
// }

// function run(callback) {
//   callback();
// }

// run(done());

// isma aayga callback a not a fubnction because done fun nicha call ho rha h toh run fun mai argument k tor pr function nhi j p rha h toh isma simple run mai done fun as a argument pass knra h n ki call krna

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");

// isam  a c b because b wala mai setimeout fun lagaya tobh wo asynchronous work kraga and async mai jab sara code chl jata h tab wo run krta h

// function greet(callback) {
//     console.log("Hello");
// }

// function sayBye() {
//     console.log("Good Bye");
// }

// greet(sayBye);

function payment(amount, callback,callback2) {
if( typeof amount =="number"){
  return callback()
}else{
  return callback2()
}


}

function paymentSuccess() {
    return "Payment Successful";
}

function paymentFailed() {
    return "Payment Failed";
}

console.log(payment(1000, paymentSuccess, paymentFailed));