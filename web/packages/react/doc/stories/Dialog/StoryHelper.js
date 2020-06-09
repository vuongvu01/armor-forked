import React, { useState } from 'react';

export const StoryHelper = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [maxWidth, setMaxWidth] = useState('sm');
    const [wide, setWide] = useState(true);
    const onClose = () => setOpen(false);
    const [scrollType, setScrollType] = useState('dialog');

    return children({
        open,
        setOpen,
        maxWidth,
        setMaxWidth,
        wide,
        setWide,
        onClose,
        scrollType,
        setScrollType,
    });
};
