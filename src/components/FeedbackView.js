import React from 'react'

//need to grab difference between user guess and secret random number



const Feedback = (difference) => {

  switch (difference)

    case 'difference > 50'

  	 $message.html("ice cold")

    case 'difference > 30 && difference < 50'

     $message.html("cold")

    case 'difference > 20 && difference < 30'

  	 $message.html("warm")

  	case 'difference > 10 && difference < 20'

  	 $message.html("hot")

  	case 'difference > 1 && difference < 10'

  	 $message.html("very hot")

  	case 'difference === 0'

  	 $message.html("Congrats, you guessed the right number!")

}
