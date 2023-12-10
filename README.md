# React Redux

React Redux is a state management library that works seamlessly with React to manage the state of a React application in a predictable and efficient way. Redux is often used in large-scale React applications to handle complex state logic and to make state changes more maintainable.

## Table of Contents

- [Redux Concepts](#redux-concepts)
  - [Actions](#actions)
  - [Reducers](#reducers)
  - [Store](#store)


## Redux Concepts

### Actions

Actions are defined in `src/actions/index.js`. They describe the intention to change the state and include a `type` property along with optional payload data.

Example actions:

```javascript
// src/actions.js
export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

export const setCounter = (value) => ({
  type: 'SET_COUNTER',
  payload: value,
});
```

### Reducers
Reducers are defined in src/reducers/index.js. They specify how the application state changes in response to actions. Reducers are pure functions that take the current state and an action, returning the new state.

```js
// src/reducers.js
const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'SET_COUNTER':
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
```

### Store
The Redux store is created in src/store/index.js. It holds the application state, allows access via getState, and updates the state via dispatch.
```js
// src/store.js
import { createStore } from 'redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

export default store;
```