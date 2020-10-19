import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router'
import axios from 'axios'
import API from "../../utils/API";
import "./styles.css"

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        axios.get('/authenticated-only')
            .then((response) => {
                setIsAuthenticated(response.data.success);
            })
            .catch((response) => {
                setIsAuthenticated(false);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        validateSubmit();
        event.target.reset();
    }

    const validateEmail = (email) => {
        const re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return re.test(email);
    }

    const validateSubmit = () => {
        if (email === "" || email === undefined || validateEmail(email) === false) {
            return alert("Please enter a valid email.")
        } else if (password === "" || password === undefined || password.length < 8) {
            return alert("Oops. Your password doesn't match. Please try again.")
        } else {
            API.login({
                email: email,
                password: password
            })
                .then((response) => {
                    setIsAuthenticated(response.data.success);
                    window.location.reload(false);
                })
                .catch(error => {
                    setIsAuthenticated(false);
                    alert("I'm sorry, we have encountered an error with your Login submission.");
                })
        }
    }

    if (isAuthenticated) {
        return <Redirect to='/' />;
    }

    return (
        <div >
            <div className="container">
                <form onSubmit={handleSubmit} className="mx-auto col-8">
                    <div className="form-group ">
                        <label><h3>Email:</h3></label>
                        <input
                            className="form-control "
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
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
                    <button type="submit" className="btn text-white" style={{ backgroundColor: "#1f60a8" }}>Submit</button>
                </form>
            </div>


            <div className="col text-center mx-auto">
                <p className="mb-5"><a href="/signup">Sign Up</a> for a new account!</p>
            </div>
        </div>
    )
}
