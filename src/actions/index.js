//when new game starts
// export const newGame = () => {
//   return {
//     type: 'NEW_GAME'
//   }
// }

//events for when submit button is clicked
export const onSubmit = (userGuess) => {
  return {
    type: 'ON_SUBMIT',
    userGuess: userGuess
  }
}

// //feedback if user's guess is ice cold, cold, warm and hot
//  export const Feedback = (feedback) => {
//    return {
//      type: 'FEEDBACK',
//      feedback: feedback
//    }
//  }
//
// // show the numbers user has guessed so far
// export const showNumbers = (numbers) => {
//   return {
//     type: 'SHOW_NUMBERS',
//     numbers: numbers
//   }
// }
//
// //display success message when user guesses the correct secret number
// export const successMessage = (message) => {
//   return {
//     type: 'SUCCESS_MESSAGE',
//     message: message
//   }
// }
