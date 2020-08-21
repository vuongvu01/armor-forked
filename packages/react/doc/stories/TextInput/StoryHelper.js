import React, { useState } from 'react';

export const StoryHelper = ({ children }) => {
    const [error, setError] = useState('');

    return children({
        error,
        setError,
    });
};
