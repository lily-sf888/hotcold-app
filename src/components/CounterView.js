import React from 'react'

const Counter = ({ count, guessCounter }) => (
  <div>
      <p>Guess #<span id="count">{ count }</span>!</p>
  </div>
)

export default Counter
