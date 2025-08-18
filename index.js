let pointsHome = 0
let pointsGuest = 0

let countElh = document.getElementById("countel-home")
let countElg = document.getElementById("countel-guest")


function addpointsHome(number){
    pointsHome += number
    countElh.textContent = pointsHome
}

function addpointsGuest(number){
    pointsGuest += number
    countElg.textContent = pointsGuest
}

function minuspointHome(number){
    pointsHome -= number
    countElh.textContent = pointsHome
}

function minuspointGuest(number){
    pointsGuest -= number
    countElg.textContent = pointsGuest
}

function hardResetHome(){
    pointsHome = 0
    countElh.textContent = pointsHome
}

function hardResetGuest(){
    pointsGuest = 0
    countElg.textContent = pointsGuest
}

function gameReset(){
    pointsHome = 0
    countElh.textContent = pointsHome
    pointsGuest = 0
    countElg.textContent = pointsGuest
}

document.getElementById("home-plus1").addEventListener("click", () => addpointsHome(1))
document.getElementById("home-plus2").addEventListener("click", () => addpointsHome(2))
document.getElementById("home-plus3").addEventListener("click", () => addpointsHome(3))
document.getElementById("home-minus1").addEventListener("click", () => minuspointHome(1))
document.getElementById("hard-reset-home").addEventListener("click", hardResetHome)

document.getElementById("guest-plus1").addEventListener("click", () => addpointsGuest(1))
document.getElementById("guest-plus2").addEventListener("click", () => addpointsGuest(2))
document.getElementById("guest-plus3").addEventListener("click", () => addpointsGuest(3))
document.getElementById("guest-minus1").addEventListener("click", () => minuspointGuest(1))
document.getElementById("hard-reset-guest").addEventListener("click", hardResetGuest)

document.getElementById("game-reset").addEventListener("click", gameReset)
