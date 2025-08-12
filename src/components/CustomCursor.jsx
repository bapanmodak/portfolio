import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] animate-[cursorPulse_1.5s_ease-in-out_infinite]"
            style={{
                transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
                border: '2px solid rgba(0,0,0,0.4)',
                backdropFilter: 'blur(2px)',
            }}
        />
    );
};

export default CustomCursor;
