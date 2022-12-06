import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions"

const initialState = {
  // favourite: { In the store reducer - index.js, with the big reducer, we are accessing the key-value pair already, so we need to remove this object from existence :)
    list: [],
  // },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        // favourite: { The commented lines are not needed anymore, since we are accessing the list directly :)
          ...state,
          list: [...state.list, action.payload],
        // },
      }
    case REMOVE_FROM_FAVOURITE:
      return {
        // favourite: { The commented lines are not needed anymore, since we are accessing the list directly :)
          ...state,
          list: state.list.filter((fav) => fav !== action.payload),
        // },
      }
    default:
      return state
  }
}

export default mainReducer
