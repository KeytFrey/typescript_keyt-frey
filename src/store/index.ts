import {combineReducers} from 'redux'
import { todoReducer } from './reducers/todo'
import { usersRedux } from './reducers/users'

export const rootReducer = combineReducers ({
   todo: todoReducer,
   user: usersRedux
})

export type RootStateType = ReturnType<typeof rootReducer>