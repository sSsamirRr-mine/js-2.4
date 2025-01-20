'use strict';

let inpNum = document.getElementById("inp1")
let send = document.getElementById('send')
let h3 = document.querySelector("h3")



send.addEventListener("click", () => {
    h3.innerHTML = inpNum.value
})

let plus = document.querySelector("#plus")
let minus = document.querySelector("#min")

let plu = 0


plus.addEventListener("click", ()=>{
    plu++
    h3.innerHTML = plu
})

minus.addEventListener("click", ()=>{
    plu--
    h3.innerHTML = plu
})

let color = document.getElementById("color")

color.addEventListener("change", ()=>{
    h3.style.color = color.value

})


