import React, { useState } from 'react';
import "./styles.css"
import API from "../../utils/API";

export default function SignInPage() {
    // Set states for username, email, and password
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // Set states for input fields so they can be cleared onSubmit
        //...there may be a better way to do this
    const [userInputValue, setUserInputValue] = useState();
    const [emailInputValue, setEmailInputValue] = useState();
    const [passInputValue, setPassInputValue] = useState();

    const handleSubmit = event => {
        event.preventDefault();
            console.log("The username = ", username, " email = ", email, " and the password = ", password);
        
        // Validate form entries
        validateSubmit();
        }

    // Validate user email
    const validateEmail = (email)  => {
        const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(email);
    }

    // Validate all form entries before posting to the DB
    const validateSubmit = () => {
        console.log("Validating username: ", username, " email: ", email, " password: ", password);

        if (username === "" || username === undefined || username.length < 3) {
           return alert("Username is required. Please enter a username with at least three characters.");
        } else if (email === "" || email === undefined || validateEmail(email) === false){
           return alert("Please enter a valid email.")
        } else if (password === "" || password === undefined || password.length < 8) {
           return alert("Please enter a valid password of at least 8 characters.")
        } else {
            console.log("Validation passed. Posting to DB username: ", username, " email: ", email, " password: ", password);
            // If all conditions pass...
            // Post the new user's info to the Mongo DB...
            API.saveUser({
                username: username,
                email: email, 
                password: password
            })
            .then(() => {
                console.log("The username = ", username, " email = ", email,  " and the password = ", password, " were saved");
            })
            .catch(error => {
                console.log("There was an error: ", error);
                alert("I'm sorry, we have encountered an error with your Signup submission.");
            })

            // Clear input field values after post attempt
            setUserInputValue("");
            setEmailInputValue("");
            setPassInputValue("");
        }
    }

    return (
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <label>Username:</label>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    name="username" 
                                    placeholder="Enter username here." 
                                    value={userInputValue}
                                    onChange={event => {
                                    setUsername(event.target.value);
                                    setUserInputValue(event.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Email:</label>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="your@email.com" 
                                    value={emailInputValue}
                                    onChange={event => {
                                    setEmail(event.target.value);
                                    setEmailInputValue(event.target.value);
                                    }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password:</label>
                            </td>
                            <td>
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Enter password here. Minimum of 8 characters." 
                                    value={passInputValue}
                                    onChange={event => {
                                    setPassword(event.target.value);
                                    setPassInputValue(event.target.value);
                                    }}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div>
                        <button 
                            type="submit" 
                            onClick={handleSubmit}
                        >
                            Submit
                         </button>
                    </div>
                </form>
         )
    }