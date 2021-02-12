import { INCREMENT, DECREMENT } from 'action/constans'
const initialState = 1

const counterFunc = (currState = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.payload + currState
    case DECREMENT:
      return action.payload  - currState
    default:
      return currState
  }
}

export default counterFunc