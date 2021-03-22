import { ADD_STUDENT, SETUID, SETUSER, GET_STUDENT, SETCOMPANY } from '../Types'
import database from '@react-native-firebase/database'


// ----- actions 


export const setUserID = (data) => {
    return (dispatch) => {
        dispatch({
            type: SETUID,
            payload: data
        })
    }
}

export const setUser = (data) => {
    return (dispatch) => {
        dispatch({
            type: SETUSER,
            payload: data
        })
    }
}

export const addStudent = (data) => {

    return (dispatch) => {
        dispatch({
            type: ADD_STUDENT,
            payload: data
        });
    }
}

export const getStudents = () => {
    return (dispatch) => {
        const arr = [];
        database().ref('/Students').on('child_added', (data) => {
            arr.push(data.val());
        })
        setTimeout(() => {
            dispatch({
                type: GET_STUDENT,
                payload: arr
            })
        }, 2000);
    }
}

export const getCompany = () => {
    return (dispatch) => {
        var array = [];
        database().ref('/Company').on('child_added', (snapshot) => {
            // array = [...array, snapshot.val()];
            array.push(snapshot.val());
        });
        setTimeout(()=>{
            dispatch({
                type: SETCOMPANY,
                payload: array
            });
            console.log(array)
        },1000)
    }
}



