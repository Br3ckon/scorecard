let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

let countOne = 0
let countTwo = 0

homeScore.innerText = countOne
awayScore.innerText = countTwo

function onePointHome() {


    homeScore.innerText = countOne += 1
   
    
}

function twoPointHome() {


    homeScore.innerText = countOne += 2
   
    
}

function threePointHome() {


    homeScore.innerText = countOne += 3
   
    
}



function onePointAway() {


    awayScore.innerText = countTwo += 1
   
    
}

function twoPointAway() {


    
    awayScore.innerText = countTwo += + 2
   
    
}

function threePointAway() {


    
    awayScore.innerText = countTwo += 3
   
    
}

function reset() {

    awayScore.innerText = countTwo = 0
    homeScore.innerText = countOne = 0 


}