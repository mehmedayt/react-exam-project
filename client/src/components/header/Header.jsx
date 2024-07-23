/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
        <h1><Link className="home" to="/">React Project</Link></h1>
        <nav>
          <Link to="/catalogue">All games</Link>
          <div id="user">
            <Link to="/create">Create Game</Link>
            <Link to="/logout">Logout</Link>
          </div>
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </header>
    );
}