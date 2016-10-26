import React from 'react'
import { Button } from 'react-bootstrap'

const Random = ({ randomnumber, randomNumber }) => (
  <div>
    <Button bsStyle="success" onClick={ randomNumber }>Click me</Button>
    <p>Random number is: { randomnumber } </p>
  </div>
)

export default Random
