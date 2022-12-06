import { GET_JOBS } from "../actions"

const initialState = {
    // favourite: { In the store reducer - index.js, with the big reducer, we are accessing the key-value pair already, so we need to remove this object from existence :)
      result: [],
      isLoading: true
    // },
  }
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_JOBS:
        return {
          ...state,
          result: action.payload
        }

      default:
        return state
    }
  }
  
  export default jobReducer