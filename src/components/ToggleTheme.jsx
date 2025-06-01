import React, { useState } from 'react';
import '../styles/toggletheme.css';

const ToggleTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleClick = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
            <button
                className={`toggle-button ${isDarkMode ? 'green' : 'red'}`}
                onClick={handleClick}
            >
                Toggle Theme
            </button>

            <section className="content">
                <h1>
                    Welcome to <br />
                    my app
                </h1>
            </section>
        </div>
    );
};

export default ToggleTheme;
