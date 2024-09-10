import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { PERSIST, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import todosSlice from './features/todosSlice'

const reducers = combineReducers({
	todos: todosSlice
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['todos']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [PERSIST]
			}
		})
})
const persistor = persistStore(store)

export { persistor, store }
