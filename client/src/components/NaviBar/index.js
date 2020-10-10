import React from 'react';
import Logo from "../../assets/bones_final_large.png";
import BrickWall from "../../assets/brick_wall_copy.jpg";
import FadeIn from 'react-fade-in';
const mystyle = {
    color: "white",
    backgroundImage: `url(${BrickWall})`,
    boxShadow: "5px 10px 8px rgb(50, 50, 50, 0.2)"
};
export default function NaviBar() {
    return (<div>
                <ul className="nav justify-content-end" id="navItems">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signin">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/favorites">Favorites</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/addevent">Add Event</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/userprofile">User Profile</a>
                        </li>
                </ul>
                <FadeIn>
                    <nav className="navbar" style={mystyle}>
                        <img src={Logo} alt="bones_logo" className="my-2 ml-3" ></img>
                        <span className="navbar-brand mx-auto">Welcome</span>
                    </nav>
                </FadeIn >
            </div>
        )
    }

