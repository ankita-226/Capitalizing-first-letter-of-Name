const form = document.getElementById("form")
let button = document.getElementById("button")
let userName = document.getElementById("userName")
const result = document.getElementById("blankContainer")

button.addEventListener("click",capitalize = () =>{
 event.preventDefault()
    let firstLetter = userName.value
    let modifiedName = firstLetter.charAt(0).toUpperCase()+firstLetter.slice(1)
 result.innerText =`Your good name is ${modifiedName}!`; 


})