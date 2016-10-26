/*ES6*/
//random number generator
export const randomNumber = () => {
  return {
    type: 'RANDOM_NUMBER'
  }
}
//counter for how many guesses user has done so far
export const guessCounter = () => {
  return {
    type: 'GUESS_COUNTER'
  }
}

//user guess actions
export const userGuess = (guess) => {
  return {
    type: 'USER_GUESS'
    guess: guess
  }
}

//difference between user guess and actual number
export const differenceCalculator = () => {
  return {
    type: 'DIFFERENCE_CALCULATOR'

  }
}

//feedback if user's guess is ice cold, cold, warm and hot
export const appFeedback = (feedback) => {
  return {
    type: 'APP_FEEDBACK',
    feedback: feedback
  }
}

// show the numbers user has guessed so far
export const showNumbers = (numbers) => {
  return {
    type: 'SHOW_NUMBERS',
    numbers: numbers
  }
}

//display success message when user guesses the correct secret number
export const successMessage = (message) => {
  return {
    type: 'SUCCESS_MESSAGE',
    message: message
  }
}
