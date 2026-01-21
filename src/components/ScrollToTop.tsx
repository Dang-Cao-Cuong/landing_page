"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import clsx from "clsx";
import styles from "../styles/ScrollToTop.module.css";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={clsx(styles.scrollToTop, isVisible && styles.visible)}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp className={styles.icon} />
        </button>
    );
}
