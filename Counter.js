/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({ value, user, onIncrement, onDecrement, onIncrementAsync, onDecrementAsync, onGitHubUserRequest }) =>
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
        <button onClick={onDecrementAsync}>
          Decrement Acync
        </button>
        <button onClick={onGitHubUserRequest}>
          Alert github user Acync
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
        <hr />
        <div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired
}

export default Counter
