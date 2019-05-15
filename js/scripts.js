let numberOfAvailableGuesses = 10

function guessNumber() {
  if (numberOfAvailableGuesses  === 0 ) {
    return ('You are out of guess')
  }
  const generatedRandomNumber = Math.floor((Math.random() * 99) + 1)
  const guess = document.getElementById('guess').value

  if (guess < generatedRandomNumber) {
    document.getElementById('tooLowGuess').style.visibility = 'visible'
  }

  if (guess > generatedRandomNumber) {
    document.getElementById('tooHighGuess').style.visibility = 'visible'
  }

  if (guess === generatedRandomNumber) {
    document.getElementById('correctGuess').style.visibility = 'visible'
  }
  document.getElementById('guess').value = ''
  const remainingGuesses = document.getElementById('numberOfRemainingGuesses').innerHTML
  document.getElementById('numberOfRemainingGuesses').innerHTML = parseInt(remainingGuesses) - 1
  numberOfAvailableGuesses -= 1
}

function resetGame() {
  numberOfAvailableGuesses = 10
  document.getElementById('numberOfRemainingGuesses').innerHTML = 10
}