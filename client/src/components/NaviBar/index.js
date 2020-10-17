import React, { useContext } from 'react';
import Logo from "../../assets/bones_higer_res.png";
import BrickWall from "../../assets/brick_wall_copy.jpg";
import FadeIn from 'react-fade-in';
import { Switch } from "react-router-dom";
// import UserContext from "../../App";
import UserContext from "../../utils/UserContext";

const bgStyle = {
    color: "white",
    backgroundImage: `url(${BrickWall})`,
    boxShadow: "3px 3px 8px rgb(50, 50, 50, 0.4)",
    height: `12rem`,
};
const style = {
    backgroundColor: `rgba(255, 255, 255, 0.7)`,
    boxShadow: "1px 1px 8px 2px rgb(255, 255, 255)",

};
const logoStyle = {
    position: `absolute`,
    top: `16px`,
    left: `45px`
}
export default function NaviBar() {
    const { admin, user } = useContext(UserContext);

    // const admin = false;
    // const user = false;

    return (<Switch>
        { admin ?
            (
                <FadeIn>
                    <div style={bgStyle}>
                        <ul style={style} className="nav justify-content-end pt-2" id="navItems">
                            <li className="nav-item">
                                <a className="nav-link text-body" href="/" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-body" href="/favorites">Favorites</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-body" href="/addevent">Add Event</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link text-body" href="/userprofile">User Profile</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link text-body" href="/logout">Logout</a>
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
                                <a className="nav-link text-body" href="/" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-body" href="/favorites">Favorites</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link text-body" href="/userprofile">User Profile</a>
                            </li>
                            <li className="nav-item mr-5">
                                <a className="nav-link text-body" href="/logout">Logout</a>
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
                                <a className="nav-link text-body" href="/" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-body" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-body" href="/signin">Signup</a>
                            </li>
                        </ul>
                        <img src={Logo} alt="bones_logo" style={logoStyle} />
                    </div>
                </FadeIn >
                )
            
        }

    </Switch>
    )

    // return (<FadeIn>
    //     <div style={bgStyle}>
    //         <ul style={style} className="nav justify-content-end pt-2" id="navItems">
    //             <li className="nav-item">
    //                 <a className="nav-link text-body" href="/" >Home</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link text-body" href="/login">Login</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link text-body" href="/signin">Signup</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link text-body" href="/favorites">Favorites</a>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link text-body" href="/addevent">Add Event</a>
    //             </li>
    //             <li className="nav-item mr-5">
    //                 <a className="nav-link text-body" href="/userprofile">User Profile</a>
    //             </li>
    //         </ul>
    //         <img src={Logo} alt="bones_logo" style={logoStyle} />
    //     </div>
    // </FadeIn >
    // )

}