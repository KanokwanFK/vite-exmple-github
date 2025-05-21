//import React from "react";
import { Link } from "react-router";
import styles from "../styles/Narbars.module.css"
//import Register from "../Register";

function Narbars(){
    return(
        <nav className={styles.navbar}>
            <Link className={styles.title} to="/"> Home</Link>
            <Link className={styles.title}  to="/About"> About </Link>
            <Link className={styles.title}  to="/Register"> Register </Link>
            <Link className={styles.title}  to="/Froms"> From </Link>
            <Link className={styles.title}  to="/TourismHome"> TourismHome </Link>
            <Link className={styles.title}  to="/Apipokemon"> Api </Link>
        </nav>
    )
}

export default Narbars;