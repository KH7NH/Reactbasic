

const initState = {
    users: [
        { id: '1', name: 'Khanh' },
        { id: '2', name: 'Khanh2' }
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log(action)

            let userA = state.users
            userA = userA.filter(item => item.id != action.payload.id)
            console.log(userA)
            return {
                ...state,
                users:userA
            }
        case 'CREATE_USER':
let id = Math.floor(Math.random() * 1001)
let users = {
    id: id,
    name: `random -  ${id}`
}
return {
    ...state, users: [...state.users, users]
}

        default:
return state

            }

    }
export default rootReducer