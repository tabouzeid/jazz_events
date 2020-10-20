import React, { useState, useEffect } from 'react';
import "./styles.css";
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FilesUploadComponent from '../Files-upload-component';

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
    console.log(user);
    return (
        <div className="container">
            <div className="row">
                <div className="col ">
                <FilesUploadComponent user={user} />
                {/* <img src={user.profileImg} className="rounded-circle z-depth-0 mx-auto d-block" alt="image" height="200"/> */}
                    <form onSubmit={updateSettings}>
                        <h1>User Settings</h1>
                        <div className="form-group">
                            <h3 className="heading">Change Email</h3>
                            <label>New email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                onChange={changeField}
                                placeholder={user.email}
                            />
                        </div>
                        <div className="form-group">
                            <h3 className="heading">Change Name</h3>
                            <label>New username:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                onChange={changeField}
                                placeholder={user.name}
                            />
                        </div>
                        <div className="form-group">
                            <h3 className="heading">Change Password</h3>
                            <label>Current password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="currentPassword"
                                name="currentPassword"
                                onChange={changeField}
                                placeholder="Enter current password"
                                minLength="8"
                            />
                            <span id="currentPasswordTest" ></span>
                            <label>New password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="newPassword"
                                name="password"
                                onChange={changeField}
                                placeholder="Enter new password"
                                minLength="8"
                            />
                            <label>Reenter new password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="reenterNewPassword"
                                name="reenterNewPassword"
                                onChange={changeField}
                                placeholder="Reenter new password"
                                minLength="8"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );

}