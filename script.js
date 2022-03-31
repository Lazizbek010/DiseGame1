// BUTTONS
let btnNew = document.querySelector(".btn--new")
let btnRoll = document.querySelector(".btn--roll")
let btnHold = document.querySelector(".btn--hold")
// IMG
let dice  = document.querySelector(".dice")
dice.style.display = 'none'
// 
let currentScore = 0
let activePlayer = 0
let totalScore = [0, 0]
let gameOver = false

btnRoll.addEventListener('click', ()=>{
    if(!gameOver){
        dice.style.display = 'block'
        let randomNumber = Math.floor(Math.random()*6 + 1)
        dice.src = `dice-${randomNumber}.png`
        currentScore += randomNumber
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        if(randomNumber == 1){
        addscore()
        }   
    }
})

btnHold.addEventListener('click', ()=>{
    if(!gameOver){
        totalScore[`${activePlayer}`] += currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = totalScore[`${activePlayer}`]
        if(totalScore[`${activePlayer}`] >= 20){
            gameOver = true
            document.querySelector(`.player--0`).classList.remove('player--active')
            document.querySelector(`.player--1`).classList.remove('player--active')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        }else{
            addscore()
        }
    }
})


function addscore(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer == 0 ? 1 : 0
    currentScore  = 0
    document.querySelector(`.player--0`).classList.toggle('player--active')
    document.querySelector(`.player--1`).classList.toggle('player--active')
}



btnNew.addEventListener('click', ()=>{
    currentScore = 0
    activePlayer = 0
    totalScore = [0, 0]
    gameOver = false
    dice.style.display = 'none'
    document.querySelector(`.player--0`).classList.remove('player--active', 'player--winner')    
    document.querySelector(`.player--1`).classList.remove('player--active', 'player--winner')
    document.querySelector(`.player--0`).classList.add('player--active')    
    document.querySelector(`#score--0`).textContent = 0
    document.querySelector(`#current--0`).textContent = 0
    document.querySelector(`#score--1`).textContent = 0
    document.querySelector(`#current--1`).textContent = 0
})













