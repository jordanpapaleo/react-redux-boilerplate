import { GET_SYNC, GET_ASYNC } from 'actions/actionSample'

export default function (previousState = [], action) {
  switch (action.type) {
    case GET_SYNC:
      return [...action.payload]
    case GET_ASYNC:
      return
    default:
      return previousState
  }
}
