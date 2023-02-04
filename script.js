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

function game() {
	let player = 0,
		computer = 0

	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt('Rock, Paper or Scissors?')
		// Taking user input through prompt
		let computerSelection = getComputerChoice()
		// Generating a random choice for the computer

		console.log('Computer choice:', computerSelection)
		console.log('Player choice:', playerSelection)

		roundResults = playRound(playerSelection, computerSelection)
		console.log(roundResults.message)

		if (roundResults.result === 'W') {
			player++
		} else if (roundResults.result === 'L') {
			computer++
		}
		// To check who won the current round

		roundResults = null
	}

	if (player > computer) {
		console.log('Player Wins the game!')
	} else if (computer > player) {
		console.log('Computer Wins the game!')
	} else {
		console.log('The Match is a tie')
	}
	// Logic to check who won the entire match
}

game()
