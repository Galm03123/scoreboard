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