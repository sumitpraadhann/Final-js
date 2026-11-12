const button = document.getElementById("btn")
const uname  = document.getElementById("input")

button.addEventListener("click", ()=>{
    const value = uname.value
    localStorage.setItem("name",value)
} )