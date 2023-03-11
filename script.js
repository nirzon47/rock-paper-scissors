function playRound(playerSelection, computerSelection) {
	// Converts user input to lowercase
	playerSelection = playerSelection.toLowerCase()

	// Game logic
	if (playerSelection === computerSelection) {
		let result = 'D'
		let message = 'Its a tie'
		return { result, message }
	} else if (playerSelection === 'rock') {
		if (computerSelection === 'paper') {
			let result = 'L'
			let message = 'You Lose! Paper beats Rock'
			return { result, message }
		} else if (computerSelection === 'scissors') {
			let result = 'W'
			let message = 'You Win! Rock beats Scissors'
			return { result, message }
		}
	} else if (playerSelection === 'paper') {
		if (computerSelection === 'rock') {
			let result = 'W'
			let message = 'You Win! Paper beats Rock'
			return { result, message }
		} else if (computerSelection === 'scissors') {
			let result = 'L'
			let message = 'You Lose! Scissors beats Paper'
			return { result, message }
		}
	} else {
		if (computerSelection === 'paper') {
			let result = 'W'
			let message = 'You Win! Scissors beats Paper'
			return { result, message }
		} else if (computerSelection === 'rock') {
			let result = 'L'
			let message = 'You Lose! Rock beats Scissors'
			return { result, message }
		}
	}
}

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors']
	return choices[Math.floor(Math.random() * 3)]
}

// Initializing counter variables
let player = 0,
	computer = 0

function game(playerSelection) {
	// Generating a random choice for the computer
	let computerSelection = getComputerChoice()

	// Calling playRound() with the player choice and random computer choice
	let roundResults = playRound(playerSelection, computerSelection)

	// Player Selection
	const playerSelectionDisplay = document.getElementById('playerSelection')
	playerSelectionDisplay.innerText = `${playerSelection}`

	const versus = document.getElementById('versus')
	versus.innerText = 'vs.'

	// Computer Selection
	const computerSelectionDisplay = document.getElementById('computerSelection')
	computerSelectionDisplay.innerText = `${computerSelection}`

	// Feedback
	const feedback = document.getElementById('feedback')
	feedback.innerText = roundResults.message

	// To check who won the current round
	if (roundResults.result === 'W') player++
	else if (roundResults.result === 'L') computer++

	// Shows player score
	const playerScore = document.getElementById('playerScore')
	playerScore.innerText = `Player Score: ${player}`

	// Shows computer score
	const computerScore = document.getElementById('computerScore')
	computerScore.innerText = `Computer Score: ${computer}`

	// End result checks
	const endResult = document.getElementById('endResult')

	// Selecting buttons
	const playButtons = document.getElementsByClassName('choice')

	if (player >= 5 || computer >= 5) {
		for (let i = 0; i < playButtons.length; i++) {
			playButtons[i].style.display = 'none'
		}
	}
	if (computer === 5) {
		endResult.innerText = 'Computer Wins'
	} else if (player === 5) {
		endResult.innerText = 'Player Wins'
	}
}

function refresh() {
	// Resets the scores
	player = 0
	computer = 0

	// Resets everything
	document.getElementById('computerSelection').innerText = ''
	document.getElementById('playerSelection').innerText = ''
	document.getElementById('feedback').innerText = ''
	document.getElementById('endResult').innerText = ''
	document.getElementById('playerScore').innerText = ''
	document.getElementById('computerScore').innerText = ''
	document.getElementById('versus').innerText = ''
	const playButtons = document.getElementsByClassName('choice')
	for (let i = 0; i < playButtons.length; i++) {
		playButtons[i].style.display = 'inline'
	}
}
