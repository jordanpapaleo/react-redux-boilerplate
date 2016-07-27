export const GET_ASYNC = 'GET_ASYNC'

export function getTwo () {
  return {
    type: GET_SYNC,
    payload: { blar: 'plop' }
  }
}
