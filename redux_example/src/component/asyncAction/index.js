import { addManyCostumerAction } from '../store/costumerReducer'

export const fetchCostumers = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addManyCostumerAction(json)))
  }
} 