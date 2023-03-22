import React, { useEffect } from 'react';
import '../stylesheets/NavigationBar.scss';
import { logout } from "../authentication/emailAndPassword";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from 'react-router';
import { auth } from "../libraries/firebase"
import {Link} from 'react-router-dom'



export const NavigationBar = (props) => {
    const [user] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (!user) return history.replace("/login");
      }, [user]);
    return (
        <div className="navigation_bar">
            <div className="navigation_bar_links">
                <Link to="/">
                <div className="navbar_logo">
                    <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1603986512881x847913222560032400%2Fshipfair%2520core%2520logo%25201-02.png?w=128&h=128&auto=compress&fit=crop&dpr=2" alt="Shipfair" />
                </div>
                </Link>
                <div className="navbar_links">
                    <ul>
                        <Link to ="/Dashboard">
                        <li>HOME</li>
                        </Link>
                        <Link to='/allpackages'>
                        <li>PACKAGES</li>
                        </Link>
                        <Link to='/alltrips'>
                        <li>TRIPS</li>
                        </Link>
                        <Link to='/contact'>
                        <li>CONTACT</li>
                        </Link>
                        <li onClick={logout}>LOG OUT</li>
                    </ul>
                </div>
            </div>
            <div className="navigation_bar_content">{props.greeting}</div>
        </div>
    )
}
