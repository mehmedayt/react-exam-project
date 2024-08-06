/* eslint-disable react/jsx-no-undef */

import { Link } from "react-router-dom";
import '../../../../public/styles/not-found.css';


export default function NotFound() {
    return (
        <div className="not-found-page">
            <div className="scene">
                <div className="planet">
                    <div className="crater"></div>
                    <div className="crater"></div>
                    <div className="crater"></div>
                    <div className="crater"></div>
                    <div className="crater"></div>
                    <div className="flag">404</div>
                    <div className="rover">
                        <div className="body"></div>
                        <div className="wheels"></div>
                        <div className="trace"></div>
                    </div>
                </div>
            </div>
            <div className="message">
                <p>
                    There is no life, try to find{' '}
                    <Link to="/">something else</Link>
                </p>
            </div>
        </div>
    );
}
