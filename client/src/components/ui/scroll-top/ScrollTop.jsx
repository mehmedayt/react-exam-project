import { useCallback, useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const ScrollTop = () => {
    const [showBtn, setShowBtn] = useState(false);

    const scrollHandler = useCallback(() => {
        if(window.scrollY > 100) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };

    }, [scrollHandler]);

    const scrollToTopHandler = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>

            {showBtn &&
                <div onClick={scrollToTopHandler} className='scroll-to-top'>
                    <FontAwesomeIcon icon={ faAnglesUp } className='scroll-btn-icon'/>
                </div>
            }
        </>
    );
};

export default ScrollTop;