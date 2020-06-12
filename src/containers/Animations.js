import React, { useState, useEffect, useRef } from "react";

export const FadeInLeft = (props) => {

    const [isVisible, setIsVisible] = useState();
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => setIsVisible(entry.isIntersecting)));
        observer.observe(domRef.current);
    }, []);

    return (
        <div
            className={`fade-in-left-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export const FadeInRight = (props) => {
    const [isVisible, setIsVisible] = useState();
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => setIsVisible(entry.isIntersecting)));
        observer.observe(domRef.current);
    }, []);

    return (
        <div
            className={`fade-in-right-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};

export const BlurFadeIn = (props) => {
    const [isVisible, setIsVisible] = useState();
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => entries.forEach(entry => setIsVisible(entry.isIntersecting)));
        observer.observe(domRef.current);
    }, []);

    return (
        <div
            className={`blur-fade-in ${isVisible ? 'is-visible-blur' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
};