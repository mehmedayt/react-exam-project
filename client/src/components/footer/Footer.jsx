import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faInstagram, faPinterest, faGoogle } from '@fortawesome/free-brands-svg-icons';


// import styles from '../../../public/styles/welcome.css'




const Footer = () => {


    return (
        <footer className='footer'>
            <div className={'footer-container'}>
                <div className='footer-content'>
                    <div className='footer-content-about'>
                        <Link to='/' className='logo'>
                            <img className='logo-image' src='/images/dream-cars-logo.webp' alt='logo.png' />
                        </Link>
                        <ul className='about-section' >
                            <li><Link className='about-section-item' to='/about'>About us</Link></li>
                            <li><Link className='about-section-item' to='/contact'>Contact</Link></li>
                            <li><Link className='about-section-item' to='/terms-and-condition'>Terms and Conditions</Link></li>
                        </ul>
                    </div>

                    <div className='social-media-wrap'>
                        <h4 className='footer-heading'>Follow us</h4>
                        <div className='social-media'>
                            <Link to='https://www.facebook.com' className='sm-link'><FontAwesomeIcon icon={faFacebookSquare} /></Link>
                            <Link to='https://twitter.com' className='sm-link'><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link to='https://www.instagram.com' className='sm-link'><FontAwesomeIcon icon={faInstagram} /></Link>
                            <Link to='https://www.pinterest.com' className='sm-link'><FontAwesomeIcon icon={faPinterest} /></Link>
                            <Link to='https://www.google.com' className='sm-link'><FontAwesomeIcon icon={faGoogle} /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-container'>
                <p className='end-paragraph'>&copy;Education purpose only! No rights reserved!</p>

            </div>
        </footer>


    );

};

export default Footer;