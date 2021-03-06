import React from 'react'
import styles from './Navigation.module.css'
import { Link } from "react-router-dom";
import UserContext from '../../../utils/Context';

const Navigation = props => {
  
    const value = React.useContext(UserContext);

    const {logout } = props;
    
    return (
        <nav className={styles.navigation}>
            <ul>
                {value.loggedIn && <Link className={styles.link} to="/">Home</Link>}
                {<Link className={styles.link} to="/about">About</Link>}
                {<Link className={styles.link} to="/rules">Rules</Link>}
                {value.loggedIn && <Link className={styles.link} to={`/userprofile/${value.user.id}`}>Profile</Link>}
                {value.loggedIn && <Link className={styles.link} to="/create">Add Question</Link>}
                {value.loggedIn && <Link className={styles.link} to="/edit">Edit Question</Link>}
                {value.loggedIn && <button className={styles.button} onClick={logout}>Logout</button>}
                {!value.loggedIn && <Link className={styles.link} to="/register">Register</Link>}
                {!value.loggedIn && <Link className={styles.link} to="/login">Login</Link>}
            </ul>
        </nav>
    )
 }

export default Navigation;