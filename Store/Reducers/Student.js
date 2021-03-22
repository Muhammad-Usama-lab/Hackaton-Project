import React from 'react'
import { ADD_STUDENT,GET_STUDENT } from '../Types/';


const initialState = {
    // ----- demo data 
    students: [{
        name: 'Muhammad',
        cnic: '42201-9989898-3',
        address: 'SFC',
        faculty: 'BSCS',
        gender: 'Male',
        shiftTime: 'Morning',
        emailAddress: 'abc@gmail.com',
        Grade: 'A+'
    }],
    Uid: ''

};


const Student = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, payload]
            }

        case 'SETUID':
            return {
                ...state,
                Uid: payload
            }
        case GET_STUDENT:
            return {
                ...state,
                students: payload
            }

        default:
            return state

    }

}



export default Student;