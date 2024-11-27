    import React, { useEffect, useRef, useState } from 'react';

    const LazyLoad = ({ children }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); 
            }
        },
        {
            threshold: 0.1, 
        }
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
        observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
        {children}
        </div>
    );
    };

    export default LazyLoad;