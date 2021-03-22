import { SETUID, SETUSER } from '../Types';
const initialState = {
    // ----- demo data 
    UserID: 'KEY',
    User: ''
};


const User = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {

        case SETUID:
            return {
                ...state,
                UserID: payload
            }

        case SETUSER:
            return {
                ...state,
                User: payload
            }

        default:
            return state

    }

}



export default User;