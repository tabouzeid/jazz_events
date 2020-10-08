import React, { useState } from 'react';

export default function LoginPage(props) {
    console.log("The props = ", props);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleClick = event => {
        event.preventDefault();
        }   

    return (<div>
        <form>
            <label>Username:</label>
            <input type="text" name="username" onSubmit={event => {setUsername(event.target.value)}}/>
            <label>Password:</label>
            <input type="password" name="password" onSubmit={event => {setPassword(event.target.value)}}/>
            <button type="submit" onClick={handleClick}>Submit</button>
        </form>
    </div>)
 }