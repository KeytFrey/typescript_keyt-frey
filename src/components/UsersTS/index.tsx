import { FC, ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hoks/useTypeSelektor";
import { UsersActionsType } from "../../store/reducers/users";

export const UsersTS: FC = (): ReactElement => {
    const dispatch = useDispatch()
    const {users, error} = useTypeSelector((state) => state.user)

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(async (res) => {
            dispatch({
                type: UsersActionsType.USERS_LOAD,
                payload: await res.json()
            })
        }).catch(err => {
            dispatch({
                type: UsersActionsType.USERS_LOAD_ERROR,
                payload: err.message
            })
        })
    }, [])
    return (
        <>
           {users.map(user => (
                <div key={user.id}>
                    <strong>
                        {user.name},
                        {user.email},
                        {user.company.name}
                </strong>
                </div>
            ))}
        </>
    )
}