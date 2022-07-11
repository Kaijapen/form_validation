import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email};
        console.log("Welcome", newUser);
    };

    const validateFirstName = (e) => {
        if (e.target.value.length === 0){
            setFirstNameError("");
            setFirstName("");
        }else if (e.target.value.length <= 2 ){
            setFirstNameError("First name must be at least 3 characters.");
            setFirstName("");
        } else {
            setFirstNameError("");
            setFirstName(e.target.value);
        }
    }

    const validateLastName = (e) => {
        if (e.target.value.length === 0){
            setLastNameError("");
            setLastName("");
        }else if (e.target.value.length <= 2 ){
            setLastNameError("Last name must be at least 3 characters.");
            setLastName("");
        } else {
            setLastNameError("");
            setLastName(e.target.value);
        }
    }

    const validateEmail = (e) => {
        if (e.target.value.length === 0){
            setEmailError("");
            setEmail("");
        }else if (e.target.value.length <= 4 ){
            setEmailError("Email must be at least 5 characters.");
            setEmail("");
        }else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
            setEmailError("Please enter a valid email address?!?!");
            setEmail("");
        }else {
            setEmailError("");
            setEmail(e.target.value);
        }
    }

    return(
        <>
            <form onSubmit={ createUser }>
                <h4>Enter your info pls :)</h4>
                <div>
                    <label >First Name: </label> 
                    <input type="text" onChange={ validateFirstName } />
                    {
                        firstNameError ?
                        <p>{firstNameError}</p>:''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ validateLastName } />
                    {
                        lastNameError ?
                        <p>{lastNameError}</p>:''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ validateEmail } />
                    {
                        emailError ?
                        <p>{emailError}</p>:''
                    }
                </div>
            </form>
            <div>
                <h4>Your Form Data:</h4>
                <p>Name: {firstName} {lastName}</p>
                <p>Email: {email}</p>
            </div>
        </>
    );
};
    
export default UserForm;