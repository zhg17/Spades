let startButton = document.querySelector("#start-game-button")
let addPoints1 = document.querySelector('#add-points-1')
let addPoints2 = document.querySelector('#add-points-2')
let addBags1 = document.querySelector('#add-bags-1')
let addBags2 = document.querySelector('#add-bags-2')
let name1 = document.querySelector('#name-input-1').value
let name2 = document.querySelector('#name-input-2').value
let restartButton = document.querySelector('#restart-button')

let score1 = 0
let score2 = 0
let bags1 = 0
let bags2 = 0
let endScore = 0


startButton.addEventListener('click', function(){
    document.querySelector('#landing').classList.add('active')
    document.querySelector('#game-area').classList.add('active')
    endScore = document.querySelector('#end-score-input').value
    name1 = document.querySelector('#name-input-1').value
    name2 = document.querySelector('#name-input-2').value
    document.querySelector('#name-1').innerHTML = name1
    document.querySelector('#name-2').innerHTML = name2
})


addPoints1.addEventListener('click', function() {
    let scoreToAdd = document.querySelector("#score-to-add-1").value
    score1 = score1 + parseInt(scoreToAdd)
    document.querySelector('#score-1').innerHTML = score1
    document.querySelector('#score-to-add-1').value = 0

    checkScore(score1, name1)
})


addPoints2.addEventListener('click', function() {
    let scoreToAdd2 = document.querySelector("#score-to-add-2").value
    score2 = score2 + parseInt(scoreToAdd2)
    document.querySelector('#score-2').innerHTML = score2
    document.querySelector('#score-to-add-2').value = 0

    checkScore(score2, name2)
})


addBags1.addEventListener('click', function(){
    bags1 = bags1 + parseInt(document.querySelector('#bags-to-add-1').value)
    document.querySelector('#bag-count-1').innerHTML = bags1
    document.querySelector('#bags-to-add-1').value = 0

    if (bags1 >= 10){
        fullBag(1)
    }

})

addBags2.addEventListener('click', function(){
    bags2 = bags2 + parseInt(document.querySelector('#bags-to-add-2').value)
    document.querySelector('#bag-count-2').innerHTML = bags2
    document.querySelector('#bags-to-add-2').value = 0

    if (bags2 >= 10){
        fullBag(2)
    }

})


function fullBag(id) {
    if (id == 1){
        bags1 = 0
        document.querySelector('#bag-count-1').innerHTML = bags1
        score1 -= 100
        document.querySelector('#score-1').innerHTML = score1
    } else if (id == 2) {
        bags2 = 0
        document.querySelector('#bag-count-2').innerHTML = bags2
        score2 -= 100
        document.querySelector('#score-2').innerHTML = score2
    }

}


function checkScore(score, name) {
    if (score >= endScore) {
        endGame(name)
    }
}


function endGame(name) {
    document.querySelector('#congrats-div').classList.add('active')
    document.querySelector('#game-area').classList.remove('active')
    document.querySelector('#winner-name').innerHTML = name
}

restartButton.addEventListener('click', function() {
    score1 = 0
    document.querySelector('#score-1').innerHTML = score1
    score2 = 0
    document.querySelector('#score-2').innerHTML = score2
    bags1 = 0
    document.querySelector('#bag-count-1').innerHTML = bags1
    bags2 = 0
    document.querySelector('#bag-count-2').innerHTML = bags2
    endScore = 0
    document.querySelector('#landing').classList.remove('active')
    document.querySelector('#congrats-div').classList.remove('active')
})