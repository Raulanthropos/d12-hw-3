export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_LOADING = 'GET_JOBS_LOADING'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'

const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

//Action creator - a function which is returning our object
export const removeFromFavouriteAction = (company) => ({
        type: REMOVE_FROM_FAVOURITE,
        payload: company,
})

export const addToFavouriteAction = (company) => (
    {
        type: ADD_TO_FAVOURITE,
        payload: company,
      }
)

export const getJobsAction = (query) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseEndpoint + query + '&limit=20')
            if (response.ok) {
              const { data } = await response.json()
              console.log(data)
              dispatch({
                type: GET_JOBS,
                payload: data
              })

              setTimeout(() => {
                // this action will just turn false the isLoading variable in the jobs slice
                dispatch({
                  type: GET_JOBS_LOADING,
                  payload: false,
                })
              }, 100)
            } else {
              alert('Error fetching results')
              dispatch({
                type: GET_JOBS_LOADING,
                payload: false,
              })
      
              // this action will just turn true the isError variable in the jobs slice
              dispatch({
                type: GET_JOBS_ERROR,
                payload: true,
              })
            }
          } catch (error) {
            console.log(error)
            dispatch({
              type: GET_JOBS_LOADING,
              payload: false,
            })
    
            // this action will just turn true the isError variable in the jobs slice
            dispatch({
              type: GET_JOBS_ERROR,
              payload: true,
            })
          }
        }
    }
