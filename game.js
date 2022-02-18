 const selectBtn = document.querySelectorAll('[data-selection]');

 const finalColumn = document.querySelector('[data-final-column]');
 const computerScore = document.querySelector('[data-computer-score]');
 const myScore = document.querySelector('[data-my-score]');

const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '🤚',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
    }
]



selectBtn.forEach(selectBtn => {
    selectBtn.addEventListener('click', e => {
        const nameSelect = selectBtn.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === nameSelect)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const imWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, imWinner)

    if(imWinner) incrementScore(myScore)
    if(computerWinner) incrementScore(computerScore)
}

function incrementScore(scoreGet) {
    scoreGet.innerText = parseInt(scoreGet.innerText) + 1
}


function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji ;
    div.classList.add('result-selection');
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}


function randomSelection() {
    const randomIndex = Math.floor(Math.random( ) * SELECTIONS.length);
    return SELECTIONS[randomIndex]
}