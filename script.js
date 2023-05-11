const form = document.getElementById("form")
let button = document.getElementById("button")
let userName = document.getElementById("userName")
const result = document.getElementById("blankContainer")

button.addEventListener("click",capitalize = () =>{
 event.preventDefault()
    let Username = userName.value
    const words = Username.split(" ") ;
    for(let i=0; i<words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()  
    }
    let modifiedName = words.join(" ")
 result.innerText =`Your good name is ${modifiedName}!`; 


})