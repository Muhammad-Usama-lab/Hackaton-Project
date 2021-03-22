import { SETCOMPANY} from '../Types';
const initialState = {
    // ----- demo data 
    Company:[{name:'Usama Industries',
            address:'R-232 Block-A Gulshan-e-Millat Karachi',
            email:'UsamaInd@gmail.com'}],

};


const Company = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case SETCOMPANY:
            return {
                ...state,
                Company: payload
            }

        default:
            return state
    }
}

export default Company;