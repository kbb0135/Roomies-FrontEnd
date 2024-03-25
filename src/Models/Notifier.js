import React, { useState, useEffect } from 'react';

export const Notifier = ({ message }) => {
    const [notification, setNotification] = useState(false);

    useEffect(() => {
        if (message) {
            setNotification(true);
            const timer = setTimeout(() => {
                setNotification(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <span className={`notification ${notification ? 'show' : ''}`}>
            {message}
        </span>
    );
};
