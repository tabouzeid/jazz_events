import React, { useState } from "react";
import "./styles.css"
import API from "../../utils/API";
export default function LoginPage() {
    //set states for current user's username and password
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    // Set states for input fields so they can be cleared onSubmit
        //...there may be a better way to do this
        const [userInputValue, setUserInputValue] = useState();
        const [passInputValue, setPassInputValue] = useState();
    const handleSubmit = event => {
        event.preventDefault();
            console.log("The username = ", username, " and the password = ", password);
        // Validate form entries    
        validateSubmit();
        }   
    // Validate all form entries before querying the DB
    const validateSubmit = () => {
        console.log("Validating username: ", username, " password: ", password);
        if (username === "" || username === undefined || username.length < 2) {
        return alert("We don't recognize your username. Please enter a valid username");
        } else if (password === "" || password === undefined || password.length < 8) {
        return alert("Oops. Your password doesn't match. Please try again.")
        } else {
            console.log("Validation passed. Querying DB for username: ", username, " password: ", password);
            // If all conditions pass...
            // Query Mongo DB for the user's info using & passport(?)...
            API.getUser({
                username: username,
                password: password
            })
            .then(() => {
                console.log("The username = ", username, " and the password = ", password, " were queried");
            })
            .catch(error => {
                console.log("There was an error: ", error);
                alert("I'm sorry, we have encountered an error with your Login submission.");
            })
            // Clear input field values after post attempt
            setUserInputValue("");
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
                                placeholder="Enter password here." 
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