"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Database, TrendingUp } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Button, Typography } from "antd";
import styles from '@/styles/gradients.module.css';

const { Title, Paragraph } = Typography;

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingTop: '80px'
        }} className={styles.heroGradient}>
            {/* Blur decorations */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '800px',
                height: '600px',
                background: 'rgba(30, 80, 225, 0.3)',
                borderRadius: '50%',
                filter: 'blur(120px)',
                pointerEvents: 'none',
                mixBlendMode: 'multiply'
            }} />
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '600px',
                height: '500px',
                background: 'rgba(86, 120, 232, 0.25)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                pointerEvents: 'none',
                mixBlendMode: 'multiply'
            }} />

            <div style={{
                maxWidth: '1280px',
                position: 'relative',
                zIndex: 10,
                padding: '0 1rem',
                textAlign: 'center',
                paddingTop: '5rem',
                margin: '0 auto',
                width: '100%'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                >
                    {/* Tagline Pill */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.375rem 1rem',
                            borderRadius: '9999px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            border: '1px solid rgba(30, 80, 225, 0.2)',
                            fontSize: '0.875rem',
                            color: 'var(--color-cobalt)',
                            backdropFilter: 'blur(4px)',
                            boxShadow: '0 1px 2px 0 rgba(30, 58, 138, 0.05)',
                            alignSelf: 'center'
                        }}
                    >
                        <span style={{ position: 'relative', display: 'flex', height: '0.5rem', width: '0.5rem' }}>
                            <span className="ping-animation" style={{
                                position: 'absolute',
                                display: 'inline-flex',
                                height: '100%',
                                width: '100%',
                                borderRadius: '50%',
                                background: '#0ea5e9',
                                opacity: 0.75
                            }}></span>
                            <span style={{
                                position: 'relative',
                                display: 'inline-flex',
                                borderRadius: '50%',
                                height: '0.5rem',
                                width: '0.5rem',
                                background: 'var(--color-cobalt)'
                            }}></span>
                        </span>
                        <span>{t('tagline')}</span>
                    </motion.div>

                    {/* Title */}
                    <Title
                        level={1}
                        style={{
                            fontSize: 'clamp(2.25rem, 6vw, 8rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.025em',
                            color: '#1e3a8a',
                            paddingBottom: '0.5rem',
                            marginBottom: 0,
                            lineHeight: 1.1,
                            filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))'
                        }}
                    >
                        {t.rich('title', {
                            accent: (chunks) => <span style={{ color: '#172554' }}>{chunks}</span>
                        })}
                    </Title>

                    <Paragraph
                        style={{
                            maxWidth: '48rem',
                            margin: '0 auto',
                            fontSize: 'clamp(1.125rem, 2.0vw, 2.5rem)',
                            color: 'rgba(23, 37, 84, 0.8)',
                            lineHeight: 1.6,
                            fontWeight: 300
                        }}
                    >
                        {t.rich('subtitle', {
                            bold: (chunks) => <span style={{ color: '#172554', fontWeight: 500 }}>{chunks}</span>
                        })}
                    </Paragraph>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                            paddingTop: '2rem',
                            width: '100%'
                        }}
                        className="hero-buttons"
                    >
                        <Button
                            type="primary"
                            size="large"
                            shape="round"
                            className="hero-primary-btn"
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {t('explore')}
                                <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
                            </span>
                        </Button>
                        <Button
                            size="large"
                            shape="round"
                            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hero-secondary-btn"
                        >
                            {t('contact')}
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Floating Icons/Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="hero-floating-card hero-floating-left"
                >
                    <Clock style={{ width: '2rem', height: '2rem', color: 'var(--color-cobalt)', marginBottom: '0.5rem' }} />
                    <div style={{ fontSize: '0.75rem', color: '#52525b' }}>Real-time</div>
                    <div style={{ fontWeight: 700, color: '#172554' }}>Monitoring</div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="hero-floating-card hero-floating-right"
                >
                    <TrendingUp style={{ width: '2rem', height: '2rem', color: '#16a34a', marginBottom: '0.5rem' }} />
                    <div style={{ fontSize: '0.75rem', color: '#52525b' }}>Increase</div>
                    <div style={{ fontWeight: 700, color: '#172554' }}>Efficiency</div>
                </motion.div>
            </div>

            {/* Decorative grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("/grid-pattern.svg")',
                backgroundPosition: 'center',
                opacity: 0.4,
                maskImage: 'radial-gradient(ellipse at center, black, transparent)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent)',
                pointerEvents: 'none'
            }} />

            <style jsx>{`
                @keyframes ping {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }

                .ping-animation {
                    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
                }

                .hero-primary-btn {
                    height: auto !important;
                    padding: 1rem 2rem !important;
                    font-size: 1.125rem !important;
                    font-weight: 700 !important;
                    background: var(--color-primary) !important;
                    box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4), 0 10px 10px -5px rgba(37, 99, 235, 0.15) !important;
                    transition: all 0.3s ease !important;
                }

                .hero-primary-btn:hover {
                    background: var(--color-primary-hover) !important;
                    box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.6) !important;
                    transform: scale(1.05) !important;
                }

                .hero-secondary-btn {
                    height: auto !important;
                    padding: 1rem 2rem !important;
                    background: rgba(255, 255, 255, 0.7) !important;
                    border-color: rgba(30, 80, 225, 0.3) !important;
                    color: var(--color-cobalt) !important;
                    font-weight: 600 !important;
                    font-size: 1.125rem !important;
                    backdrop-filter: blur(12px) !important;
                    box-shadow: 0 4px 6px -1px rgba(30, 58, 138, 0.05) !important;
                }

                .hero-secondary-btn:hover {
                    background: rgba(255, 255, 255, 0.9) !important;
                }

                :global(.hero-floating-card) {
                    display: none;
                    padding: 1rem;
                    border-radius: 1rem;
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(12px);
                    box-shadow: 0 20px 25px -5px rgba(30, 58, 138, 0.1), 0 10px 10px -5px rgba(30, 58, 138, 0.04);
                }

                :global(.hero-floating-left) {
                    position: absolute;
                    top: 5rem;
                    left: 2.5rem;
                }

                :global(.hero-floating-right) {
                    position: absolute;
                    bottom: 10rem;
                    right: 2.5rem;
                }

                @media (min-width: 1024px) {
                    :global(.hero-floating-card) {
                        display: block;
                    }
                }

                @media (min-width: 640px) {
                    .hero-buttons {
                        flex-direction: row !important;
                    }
                }
            `}</style>
        </section>
    );
}