import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import FadeIn from 'react-fade-in';
import Logo from "../../assets/bones_higer_res.png";
import BrickWall from "../../assets/brick_wall_copy.jpg";
import UserContext from "../../utils/UserContext";
const bgStyle = {
    backgroundImage: `url(${BrickWall})`,
    boxShadow: "3px 3px 8px rgb(50, 50, 50, 0.4)",
    height: `8rem`,
};
// white bar css
const style = {
    backgroundColor: `rgba(255, 255, 255, 0.7)`,
    boxShadow: "1px 1px 8px 2px rgb(255, 255, 255)"
};
// logo css
const logoStyle = {
    position: `absolute`,
    top: `16px`,
    left: `45px`
}
export default function NaviBar(props) {
    const { admin, user } = useContext(UserContext);
    const history = useHistory();

    const handleLogout = (event) => {
        console.log("logout");
        axios.get("/logout")
            .then((response) => {
                history.push("/");
                window.location.reload(false);
            }).catch((error) => {
                alert("An error occurred while logging out.");
            })
    }

    return (
        <FadeIn>
            <nav style={bgStyle}>
                <ul style={style} className="nav justify-content-end pt-2 pr-4" id="navItems">
                    <li className="nav-item">
                        <a className="nav-link text-body" href="/" >Events</a>
                    </li>
                    {admin ?
                        (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user"></i> <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0" alt="avatar" height="35" />
                                </a>

                                <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4" style={{ zIndex: "0" }}>
                                    <a className="nav-link text-body" href="/userprofile">My Account</a>
                                    <a className="nav-link text-body" href="/addevent">Add Event</a>
                                    <a className="nav-link text-body" href="/favorites">Favorites</a>
                                    <a className="nav-link text-body" href="#" onClick={handleLogout}>Logout</a>
                                </div>
                            </li>
                        ) :
                        user ? (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user"></i> <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" className="rounded-circle z-depth-0" alt="avatar" height="35" />
                                </a>

                                <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                                    <a className="nav-link text-body" href="/userprofile">My Account</a>
                                    <a className="nav-link text-body" href="/favorites">Favorites</a>
                                    <a className="nav-link text-body" href="#" onClick={handleLogout}>Logout</a>
                                </div>
                            </li>
                        ) : (
                                <li className="nav-item">
                                    <a className="nav-link text-body" href="/login">Login</a>
                                </li>
                            )
                    }
                </ul>
                <img src={Logo} alt="bones_logo" style={logoStyle} />
            </nav>
        </FadeIn >

    )
}