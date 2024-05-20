import * as yup from 'yup'; 

//create schema
export const LoginValid=yup.object().shape({
    //required check if empty or not 
    email: yup.string() .required("Email cannot be empty") .email("Email should be well formatted"), 
    password: yup.string() .required("Password cannot be empty") .min(6),
});