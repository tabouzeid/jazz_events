import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserProfilePage() {
    const [user, setUser] = useState({});

    const updateSettings = (event) => {
        event.preventDefault();
        if (user.password !== user.reenterNewPassword) {
            alert('The password and re-entered password do not match');
        } else {
            let details = {
                name: user.name,
                email: user.email,
                currentPassword: user.currentPassword,
                password: user.password
            }
            console.log(details);
            axios.put("/api/user", details)
                .then((response) => {
                    alert("Your profile has been udpated");
                })
                .catch((err) => {
                    alert("There was an error while updating your profile");
                })
        }
    }

    const changeField = (event) => {
        user[event.target.name] = event.target.value;
        setUser(user);
    }

    useEffect(() => {
        axios.get("/api/user").then((res) => { setUser(res.data) })
    }, []);

    return (
        <div className="container">
            <div className="col-7 mx-auto">
                <form className="mb-5" onSubmit={updateSettings}>
                    <h1 className="text-center">User Settings</h1>
                    <div className="form-group">
                        <h3 className="mb-0 mt-5">Change Email</h3>
                        <label>New email:</label>
                        <input
                            type="email"
                            style={{
                                fontFamily: "'Raleway', sans-serif"
                            }}
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={changeField}
                            placeholder={user.email}
                        />
                    </div>
                    <div className="form-group">
                        <h3 className="mb-0 mt-5">Change Name</h3>
                        <label>New username:</label>
                        <input
                            type="text"
                            style={{
                                fontFamily: "'Raleway', sans-serif"
                            }}
                            className="form-control"
                            id="name"
                            name="name"
                            onChange={changeField}
                            placeholder={user.name}
                        />
                    </div>
                    <div className="form-group">
                        <h3 className="mb-0 mt-5">Change Password</h3>
                        <label>Current password:</label>
                        <input
                            type="password"
                            style={{
                                fontFamily: "'Raleway', sans-serif"
                            }}
                            className="form-control"
                            id="currentPassword"
                            name="currentPassword"
                            onChange={changeField}
                            placeholder="Enter current password"
                            minLength="8"
                        />
                        <span id="currentPasswordTest" ></span>
                        <div className="row">
                            <div className="col">
                                <label>New password:</label>
                                <input
                                    type="password"
                                    style={{
                                        fontFamily: "'Raleway', sans-serif"
                                    }}
                                    className="form-control"
                                    id="newPassword"
                                    name="password"
                                    onChange={changeField}
                                    placeholder="New password"
                                    minLength="8"
                                />
                            </div>
                            <div className="col">
                                <label >Confirm new password:</label>
                                <input
                                    type="password"
                                    style={{
                                        fontFamily: "'Raleway', sans-serif"
                                    }}
                                    className="form-control"
                                    id="reenterNewPassword"
                                    name="reenterNewPassword"
                                    onChange={changeField}
                                    placeholder="New password"
                                    minLength="8"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <button type="submit" className="btn text-white mx-auto" style={{ backgroundColor: "#1f60a8" }}>Submit</button>
                    </div>
                </form>
            </div>

        </div >
    );

}