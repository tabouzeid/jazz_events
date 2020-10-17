import React, { useContext } from 'react';
import Logo from "../../assets/bones_higer_res.png";
import BrickWall from "../../assets/brick_wall_copy.jpg";
import FadeIn from 'react-fade-in';
import { Switch } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const bgStyle = {
    color: "white",
    backgroundImage: `url(${BrickWall})`,
    boxShadow: "3px 3px 8px rgb(50, 50, 50, 0.4)",
    height: `8rem`,
};
const style = {
    backgroundColor: `rgba(255, 255, 255, 0.7)`,
    boxShadow: "1px 1px 8px 2px rgb(255, 255, 255)"
};
const logoStyle = {
    position: `absolute`,
    top: `16px`,
    left: `45px`,
    zIndex: "6"
}
export default function NaviBar(props) {
    const { admin, user } = useContext(UserContext);
    const history = useHistory();

    const handleLogout = (event) => {
        axios.get("/logout")
            .then((response) => {
                history.push("/");
            }).catch((error) => {
                alert("An error occurred while logging out.");
            })
    }
    // const admin = false;
    // const user = false;

    return (<Switch>
        { admin ?
            (
                <FadeIn>
                    <div style={bgStyle}>
                        <ul style={style} className="nav justify-content-end pt-2" id="navItems">
                            <li className="nav-item">
                                <a className="nav-link text-body" href="/" >Events</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user"></i> <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0" alt="avatar" height="35" />
                                </a>

                                <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                                    <a className="nav-link text-body" href="/userprofile">My Account</a>
                                    <a className="nav-link text-body" href="/addevent">Add Event</a>
                                    <a className="nav-link text-body" href="/favorites">Favorites</a>
                                    <a className="nav-link text-body" onClick={handleLogout}>Logout</a>
                                </div>
                            </li>
                        </ul>
                        <img src={Logo} alt="bones_logo" style={logoStyle} />
                    </div>
                </FadeIn >
            ) :
            user ? (
                <FadeIn>
                    <div style={bgStyle}>
                        <ul style={style} className="nav justify-content-end pt-2" id="navItems">
                            <li className="nav-item">
                                <a className="nav-link text-body" href="/" >Events</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user"></i> <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0" alt="avatar" height="35" />
                                </a>

                                <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                                    <a className="nav-link text-body" href="/userprofile">My Account</a>
                                    <a className="nav-link text-body" href="/favorites">Favorites</a>
                                    <a className="nav-link text-body" onClick={handleLogout}>Logout</a>
                                </div>
                            </li>
                        </ul>
                        <img src={Logo} alt="bones_logo" style={logoStyle} />
                    </div>
                </FadeIn >
            ) : (
                    <FadeIn>
                        <div style={bgStyle}>
                            <ul style={style} className="nav justify-content-end pt-2" id="navItems">
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="/" >Events</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="/login">Login</a>
                                </li>
                            </ul>
                            <img src={Logo} alt="bones_logo" style={logoStyle} />
                        </div>
                    </FadeIn >
                )

        }

    </Switch>
    )
}