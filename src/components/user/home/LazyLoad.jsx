    import React, { useEffect, useRef, useState } from 'react';

    const LazyLoad = ({ children }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

   /* This `useEffect` checks when the component becomes visible on the screen.
    * Once it is 10% visible, it sets `isVisible` to `true` and stops checking.
    * The observer is removed when the component is no longer in use. */

    useEffect(() => {
       /* The code snippet you provided is creating a new `IntersectionObserver` instance that observes
       the target element referenced by `ref.current`. The observer is configured with a threshold
       of 0.1, meaning that the callback function provided will be triggered when at least 10% of
       the target element is visible in the viewport. */
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

        /* The line `if (ref.current) {` is a conditional check that ensures the `ref.current` value is
        not `null` or `undefined` before attempting to use it. In this context, it is checking if
        the `ref` object has a `current` property that is not `null` or `undefined` before calling
        the `observer.observe(ref.current)` method. */
        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
        observer.disconnect();
        };
    }, []);

    /* The `return` statement of the `LazyLoad` component:
    * - Returns a `div` with a reference (`ref={ref}`).
    * - Applies a `fade-in` class and conditionally adds `visible` when `isVisible` is `true`.
    * - Renders the `children` inside the `div`. */

    return (
        <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
        {children}
        </div>
    );
    };

    export default LazyLoad;