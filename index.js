let homeCount = 0
let guestCount = 0

let homeEl = document.getElementById("scores-home")
let guestEl = document.getElementById("scores-guest")


//Add home score by one.
function homeOne() {
    homeEl.textContent = homeCount +=1
}

//Add home score by two.
function homeTwo() {
    homeEl.textContent = homeCount +=2
}

//Add home score by three.
function homeThree() {
    homeEl.textContent = homeCount +=3
}

//Add guest score by one.
function guestOne() {
    guestEl.textContent = guestCount +=1
}

//Add guest score by two.
function guestTwo() {
    guestEl.textContent = guestCount +=2

}

//Add guest score by three
function guestThree() {
    guestEl.textContent = guestCount +=3
}

//Reset home score to 0
function homeReset() {
    homeEl.textContent = 0
    homeCount = 0
}

//Reset guest score to 0
function guestReset() {
    guestEl.textContent = 0
    guestCount = 0
}