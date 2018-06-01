export default function counter(state = {val: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        val: state.val + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        val: state.val - 1
      }
    case 'LOG_USER':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
