import React, { useState } from 'react';
import { Redirect } from 'react-router'
import "./styles.css"
import API from "../../utils/API";

export default function SignInPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [created, setCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        validateSubmit();
    }

    const validateEmail = (email) => {
        
        const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(email);
    }

    const validateSubmit = () => {
        if (name === "" || name === undefined || name.length < 2) {
            return alert("Please enter a valid name.")
        } else if (email === "" || email === undefined || validateEmail(email) === false) {
            return alert("Please enter a valid email.")
        } else if (password === "" || password === undefined || password.length < 8) {
            return alert("Please enter a valid password of at least 8 characters.")
        } else {
            API.saveUser({
                name: name,
                email: email,
                password: password
            })
                .then(() => {
                    alert("Your new account was successfully created");
                    setCreated(true);
                })
                .catch(error => {
                    alert("I'm sorry, we have encountered an error with your Signup submission.");
                })
        }
    }

    if(created){
        return <Redirect to='/login' />;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label><h3>Name:</h3></label>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Enter your name."
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label><h3>Email:</h3></label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label><h3>Password:</h3></label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Enter password here. Minimum of 8 characters."
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
