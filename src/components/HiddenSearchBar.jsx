import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/hiddensearchbar.css';

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgColor] = useState('white');
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setShowInput(false);
                setBgColor('white');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleIconClick = () => {
        setShowInput(true);
        setBgColor('black');
    };

    return (
        <section
            ref={containerRef}
            className="container"
            style={{ backgroundColor: bgColor }}
        >
            {showInput ? (
                <input type="text" placeholder="Search" autoFocus />
            ) : (
                <FaSearch size={25} onClick={handleIconClick} />
            )}
        </section>
    );
};

export default HiddenSearchBar;
