## Hot Cold Guessing Game in React and Redux

### Tech Stack

* React
* Redux
* Babel
* Webpack
* Heroku

One of the main appeals using Redux is that all the states of your components
can be managed in one place which is the store.  In our [Hot Cold App](https://hotcold-redux.herokuapp.com/)
we are using Redux which is divided into different parts mainly consisting of actions,
reducers, react components and the store.

Actions are objects which contain a type and the action's payload.  In our app
there are two main actions, when the user clicks on the guess submit button, and
when the user clicks on the new game button. These two click events trigger
a number of things that happen in the game.

Our actions are then passed to the reducer which is responsible to modify
the state. Since states should not be mutated, we use the `Object.assign` method
which clones the action object and modifies the state without having to change
the original state object.

The react components are the ones rendering the different parts of our game into
the DOM. Once we have the basic structure of our app complete it's time to link
our work to to the Redux store.  First we wrap our root component in `App.js`
with the `Provider` component.  When the `Provider` is in place, components can
access parts of the store including the dispatch method.

In order for our components to have access to the current states, we use the
`mapStateToProps` function to turn our states into props which then can be
accessed by our components.

In the last part we added a server side to our app, which keeps track of which
user had the fewest amount of guesses. Our GET endpoint gets triggered when the
game first loads. The initial value for fewestGuesses is set to 99. When the
user's guess is lower than the current state of fewestGuesses, the POST request
sends a response to the front to save and update the current lowest number of
guesses.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
