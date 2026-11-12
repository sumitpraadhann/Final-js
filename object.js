// const student = {
//     name:"Sumit",
//     age:18,
//     marks:[10,20,30,40]
// }


// console.log(student.name)
// console.log(student["age"])

// student.city = "delhi"

// let sum = 0
// for (let i = 0; i< student.marks.length; i++){
//     sum+=student.marks[i]

// }
// const average = sum/student.marks.length
// console.log(average)

// student.average = average
// console.log(student)

// const students = [
//   { name: "Amit", marks: 80 },
//   { name: "Riya", marks: 92 },
//   { name: "Sumit", marks: 65 },
// ];

// for(let i = 0; i < students.length; i++){
//   console.log(students[i].name)
// }

// let sum = 0
// for(let  i = 0; i<students.length; i++){
//   sum+=students[i].marks
// }
// const average = sum/students.length
// console.log(average)

// let topepr = students[0]
// for(let i = 1; i<students.length; i++){
//   if(topepr.marks<students[i].marks){
//      topepr=students[i]
//   }
// }

// console.log(topepr.name)

// const passed = students.filter((student)=>student.marks>70)
// console.log(passed)


// const students = [
//   { name: "Amit", marks: 80 },
//   { name: "Riya", marks: 92 },
//   { name: "Sumit", marks: 65 },
// ];

// const names = students.map((allname)=>allname.name)
// console.log(names)

// const obj = students.find((n)=>n.name==="Sumit")
// console.log(obj)

// const totalnum = students.reduce((sum,num,)=> sum+num.marks,0)
// console.log(totalnum)

// const average  = totalnum/students.length

// console.log(average)
// const pass = students.map((student)=>({
//   name: student.name,
//   result:student.marks>70?"pass": "fail"
// }))
// console.log(pass)

// const marks = students.filter((student)=> student.marks>70)
// console.log(marks)
// const  passesstudent = marks.map((studentname)=>studentname.name)
// console.log(passesstudent)
// const total = marks.reduce((sum,num)=>sum + num.marks,0)
// console.log(total)

// const names = students.find((name) => name.name === "Rahul")

// if (names) {
//   console.log("student mil gaya")
// } else {
//   console.log("student nhi mila")
// }



// const students = [
//   { name: "Amit", marks: 80 },
//   { name: "Riya", marks: 92 },
//   { name: "Sumit", marks: 65 },
// ];


const students = [
  { name: "Amit", marks: 80 },
  { name: "Riya", marks: 92 },
  { name: "Sumit", marks: 65 },
];

const passedname = 
students.filter((student)=>student.marks>70)
.map((student)=>student.name)
console.log(passedname)

// const total =students.filter((student) => student.marks >= 70)
//   .reduce((sum, student) => sum + student.marks, 0);
//   console.log(total)


//   function grademark(grade){
//     if(grade>=90){
//       console.log("A")
//     }else if(grade>=75){
//       console.log("B")
//     }else if(grade>=60){
//       console.log("C")
//     }else{
//       console.log("Fail")
//     }
//   }
//   grademark(75)


// function gettoper (student){
// let topper = student[0]
// for(let i = 1; i < student.length; i++){
//   if(topper.marks<student[i].marks){
//     topper = student[i]
//   }
// }
// return topper.name
// }
// console.log(gettoper(students))
// const isPass = (marks) => marks >= 70;

// console.log(isPass(80)); // true
// console.log(isPass(65)); // false

//  function getgrade(marks){
// if(marks>=90) return "A"
// if(marks>=75) return "B"
// if(marks>=60) return "C"
// return "fail"   
// }

// const result = students.map((student)=>({
//   student:student.name,
//   grade:getgrade(student.marks)

// }))
// console.log(result)

function getAverage (avg){
  let sum = 0
  for(let i = 0; i<avg.length; i++){
    sum+=avg[i]
  }
  return sum/avg.length
}

console.log(getAverage([10, 20, 30, 40]))
