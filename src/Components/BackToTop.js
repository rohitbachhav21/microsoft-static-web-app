import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            id="back-to-top"
            className={`fixed bottom-5 right-5 p-2 mx-4 flex bg-gray-200 hover:bg-white text-black text-center rounded-sm shadow-md ${isVisible ? 'block' : 'hidden'
                }`}
            onClick={scrollToTop}
        >
            <ArrowUpwardIcon className='mx-1' />
            Back To Top
        </button>
    );
};

export default BackToTopButton;
