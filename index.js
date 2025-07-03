let homeScore = 0
let guestScore = 0

function add1ToHome(){
    scoreElement = document.getElementById("home-score")
    homeScore = homeScore + 1
    scoreElement.textContent = homeScore  
    // console.log (score)
}

function add2ToHome(){
    scoreElement = document.getElementById("home-score")
    homeScore = homeScore + 2
    scoreElement.textContent = homeScore  
    // console.log (score)
}

function add3ToHome(){
    scoreElement = document.getElementById("home-score")
    homeScore = homeScore + 3
    scoreElement.textContent = homeScore  
    // console.log (score)
}

function resetHome(){
    scoreElement = document.getElementById("home-score")
    homeScore = 0
    scoreElement.textContent = homeScore  
    // console.log (score)
}





function add1ToGuest(){
    scoreElement = document.getElementById("guest-score")
    guestScore = guestScore + 1
    scoreElement.textContent = guestScore
    // console.log (score)
}

function add2ToGuest(){
    scoreElement = document.getElementById("guest-score")
    guestScore = guestScore + 2
    scoreElement.textContent = guestScore  
    // console.log (score)
}

function add3ToGuest(){
    scoreElement = document.getElementById("guest-score")
    guestScore = guestScore + 3
    scoreElement.textContent = guestScore  
    // console.log (score)
}

function resetGuest(){
    scoreElement = document.getElementById("guest-score")
    guestScore = 0
    scoreElement.textContent = guestScore  
    // console.log (score)
}