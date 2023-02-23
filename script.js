function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase()
	//converts user input to lowercase

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

function game(playerSelection) {
	// Generating a random choice for the computer
	let computerSelection = getComputerChoice()

	roundResults = playRound(playerSelection, computerSelection)
	document.getElementById(
		'playerSelection'
	).innerText = `Player chose: ${playerSelection}`
	document.getElementById(
		'computerSelection'
	).innerText = `Computer chose: ${computerSelection}`
	document.getElementById('feedback').innerText = roundResults.message

	// To check who won the current round
	if (roundResults.result === 'W') {
		player++
	} else if (roundResults.result === 'L') {
		computer++
	}

	document.getElementById('playerScore').innerText = `Player Score: ${player}`
	document.getElementById(
		'computerScore'
	).innerText = `Computer Score: ${computer}`

	if (player === 5) {
		document.getElementById('endResult').innerText = 'Player Wins'
	} else if (computer === 5) {
		document.getElementById('endResult').innerText = 'Computer Wins'
	}
}

let player = 0,
	computer = 0
