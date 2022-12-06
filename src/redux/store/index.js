import { configureStore } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/index'
import { combineReducers } from '@reduxjs/toolkit'
import jobReducer from '../reducers/job'
import localStorage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'

const persistConfig = {
  key: 'root', // ???
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "some_key",
    }),
  ],
}

// process.env.REACT_APP_SECRET_KEY - this wouldn't work :( 

const bigReducer = combineReducers({
  job: jobReducer,
  index: favouriteReducer
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})





export const persistor = persistStore(store)
