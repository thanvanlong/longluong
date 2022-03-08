import { useStore } from 'react-redux'
import { createStore } from 'redux'
import { foodReducer } from '../store/Module.reducer'

export const store = createStore(foodReducer);