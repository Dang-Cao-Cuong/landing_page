"use client";

import { motion } from "framer-motion";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    bg?: "dark" | "light" | "qwaste" | "white" | "soft" | "cobalt" | "navy" | "aurora";
}

export function Section({ id, className, children, bg = "dark" }: SectionProps) {
    const bgStyles = {
        dark: { background: 'var(--color-dark-navy)', color: 'white' },
        light: { background: 'var(--color-bg-section-light)', color: '#18181b' },
        qwaste: { background: 'var(--color-dark-navy)', color: 'white' },
        white: { background: 'white', color: '#18181b' },
        soft: { background: 'var(--color-soft)', color: '#18181b' },
        cobalt: { background: 'var(--color-primary)', color: 'white' },
        navy: { background: 'var(--color-navy)', color: 'white' },
        aurora: { background: 'linear-gradient(135deg, #1e50e1 0%, #5678e8 100%)', color: '#18181b' },
    };

    const selectedBg = bgStyles[bg as keyof typeof bgStyles] || bgStyles.dark;

    return (
        <section
            id={id}
            style={{
                padding: '5rem 0',
                position: 'relative',
                overflow: 'hidden',
                ...selectedBg
            }}
            className={className}
        >
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1rem',
                zIndex: 10,
                position: 'relative'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {children}
                </motion.div>
            </div>

            <style jsx>{`
                @media (min-width: 768px) {
                    section {
                        padding: 8rem 0 !important;
                    }
                }
            `}</style>
        </section>
    );
}
