/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export default function Header(){
  const { isAuthenticated } = useAuthContext();
    return(
        <header>
        <h1><Link className="home" to="/">React Project</Link></h1>
        <nav>
          <Link to="/catalogue">All games</Link>
          {isAuthenticated 
          ?<div id="user">
            <Link to="/create">Create Game</Link>
            <Link to="/logout">Logout</Link>
          </div>
          :<div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        }
          
          
        </nav>
      </header>
    );
}