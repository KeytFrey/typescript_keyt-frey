export enum UsersActionsType {
    USERS_LOAD = "USERS_LOAD",
    USERS_LOAD_ERROR = "USERS_LOAD_ERROR"
}

export interface IUsers {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

interface IUsersState {
    users: IUsers[]
    error: null | string
}

interface IUsersLoadAction {
    type: UsersActionsType.USERS_LOAD
    payload: IUsers[]
}

interface IUsersErrorAction {
    type: UsersActionsType.USERS_LOAD_ERROR
    payload: string
}

const UsersInicialState: IUsersState = {
    users: [],
    error: null
}

type UserActions = IUsersLoadAction | IUsersErrorAction

export const usersRedux = (state: IUsersState = UsersInicialState, action: UserActions): IUsersState => {
    switch (action.type) {
        case UsersActionsType.USERS_LOAD: {
            return {users: action.payload, error: null}
        }
        case UsersActionsType.USERS_LOAD_ERROR: {
            return {users: [], error: action.payload}
        }
        default:
            return state
    }
}