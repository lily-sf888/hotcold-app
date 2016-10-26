import React from 'react'
import { Button } from 'react-bootstrap'

const Counter = ({ count, guessCounter }) => (
  <div>
    <Button bsStyle="success" onClick={ guessCounter }>Click me</Button>
    <p>Count is: { count } </p>
  </div>
)

export default Counter
