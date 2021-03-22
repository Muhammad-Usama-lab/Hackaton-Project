// ------ All reducers


//internal imports 
import {combineReducers} from 'redux';
import Student from './Student.js';
import User from './User.js';
import Company from './Company.js';


const Reducers= combineReducers({
    student:Student,
    user:User,
    company:Company
})
export default Reducers;


