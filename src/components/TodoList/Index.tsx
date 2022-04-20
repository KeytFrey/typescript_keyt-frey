import { FC, ReactElement, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypeSelector } from "../../hoks/useTypeSelektor"
import { TodoActionTypes } from "../../store/reducers/todo"


export const TodosList: FC = (): ReactElement => {

    const dispatch = useDispatch()
    const {todos, error} = useTypeSelector((state) => state.todo)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then(async (res) =>{
            dispatch({
                type: TodoActionTypes.TODOS_LOAD,
                payload: await res.json()
            })
        }).catch(err => {
            dispatch({
                type: TodoActionTypes.TODOS_LOAD_ERROR,
                payload: err.message
            })
        })
    }, [])

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    {todo.title}
                </div>
            ))}
        </div>
    )
}