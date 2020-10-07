import React from 'react';
import Logo from "../../assets/bones_final_large.png";
import BrickWall from "../../assets/brick_wall_copy.jpg";
import FadeIn from 'react-fade-in';

export default class NaviBar extends React.Component {
    

    render() {
        const mystyle = {
            color: "white",
            backgroundImage: `url(${BrickWall})`,
            boxShadow: "5px 10px 8px rgb(50, 50, 50, 0.2)"
        };

        return (
            <div>
                <ul class="nav justify-content-end" id="navItems">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/signin">Signup</a>
                        </li>
                    </ul>
                <FadeIn>
                    <nav className="navbar" style={mystyle}>
                        <img src={Logo} alt="bones_logo" className="my-2 ml-3" ></img>
                        <span className="navbar-brand mx-auto">Welcome</span>
                    </nav>
                </FadeIn >
            </div>
        );
    }
}



