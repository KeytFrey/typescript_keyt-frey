export enum TodoActionTypes {
    TODOS_LOAD = 'TODOS_LOAD',
    TODOS_LOAD_ERROR = 'TODOS_LOAD_ERROR'
}

export interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
}

interface ITodoState {
    todos: any[]
    error: null | string
}

interface ITodoLoadAction {
    type: TodoActionTypes.TODOS_LOAD
    payload: ITodo[]
}
interface ITodoErrorAction {
    type: TodoActionTypes.TODOS_LOAD_ERROR
    payload: string
}

type TodoAction = ITodoLoadAction | ITodoErrorAction

const todoInitialState: ITodoState = {
    todos: [],
    error: null
}

export const todoReducer = (state: ITodoState = todoInitialState, action: TodoAction) => {
    switch(action.type) {
        case TodoActionTypes.TODOS_LOAD: {
            return {todos: action.payload, error: null}
        }
        case TodoActionTypes.TODOS_LOAD_ERROR: {
            return {todos: [], error: action.payload}
        }
        default:
            return state
    }
}