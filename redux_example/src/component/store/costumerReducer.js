
const initialState = {
  costumers: []
}

const ADD_MANY_COSTUMER = 'ADD_MANY_COSTUMER';
const ADD_COSTUMER = 'ADD_COSTUMER';
const REMOVE_COSTUMER = 'REMOVE_COSTUMER'



export const costumerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MANY_COSTUMER: {
      return {...state, costumers: [...state.costumers, ...action.payload]}
    }

    case ADD_COSTUMER:
      return { ...state, costumers: [...state.costumers, action.payload]  }

    case REMOVE_COSTUMER:

      return { ...state, costumers: state.costumers.filter(costumer => costumer.id !== action.payload ) }

    default:
      return state
  }
}

export const addManyCostumerAction = (payload) => ({ type: ADD_MANY_COSTUMER, payload })
export const addCostumerAction = (payload) => ({ type: ADD_COSTUMER, payload })
export const removeCostumerAction = (payload) => ({ type: REMOVE_COSTUMER, payload })

