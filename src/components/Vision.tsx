"use client";

import { Carousel, Card } from "antd";
import { CheckCircle2, Zap } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Vision() {
    const t = useTranslations('Vision');

    const slides = [
        "/work_1.jpg",
        "/work_2.jpg",
        "/work_3.jpg"
    ];

    return (
        <section id="vision" style={{
            position: 'relative',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            background: 'var(--color-royal-blue)',
            overflow: 'hidden'
        }}>
            {/* Decorative backgrounds */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '500px',
                height: '500px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                filter: 'blur(100px)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '500px',
                height: '500px',
                background: 'rgba(96, 165, 250, 0.1)',
                borderRadius: '50%',
                filter: 'blur(120px)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("/grid-pattern.svg")',
                opacity: 0.2,
                pointerEvents: 'none',
                mixBlendMode: 'overlay'
            }} />

            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1rem',
                position: 'relative',
                zIndex: 10
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }} className="vision-grid">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '9999px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                marginBottom: '1rem'
                            }}>
                                <span className="pulse-animation" style={{
                                    width: '0.5rem',
                                    height: '0.5rem',
                                    borderRadius: '50%',
                                    background: 'white'
                                }} />
                                Future Ready
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(1.875rem, 5vw, 3rem)',
                                fontWeight: 700,
                                color: 'white',
                                lineHeight: 1.25
                            }}>
                                {t.rich('title', {
                                    accent: (chunks) => <span style={{ color: '#bfdbfe', filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))' }}>{chunks}</span>
                                })}
                            </h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <p style={{
                                color: 'rgba(219, 234, 254, 0.9)',
                                fontSize: '1.125rem',
                                lineHeight: 1.625,
                                fontWeight: 300
                            }}>
                                {t('desc1')}
                            </p>
                            <p style={{
                                color: 'rgba(219, 234, 254, 0.9)',
                                fontSize: '1.125rem',
                                lineHeight: 1.625,
                                fontWeight: 300
                            }}>
                                {t.rich('desc2', {
                                    bold: (chunks) => <span style={{ color: 'white', fontWeight: 500 }}>{chunks}</span>
                                })}
                            </p>
                        </div>

                        {/* Glassmorphism Card */}
                        <Card
                            variant="borderless"
                            className="vision-glass-card"
                            styles={{ body: { padding: '2rem' } }}
                        >
                            <h3 style={{
                                fontWeight: 700,
                                color: '#1e40af',
                                fontSize: '1.25rem',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <Zap style={{ width: '1.25rem', height: '1.25rem', color: '#1e50e1', fill: '#1e50e1' }} />
                                {t('boxTitle')}
                            </h3>
                            <ul style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '1rem'
                            }} className="vision-list">
                                {[
                                    t('list1'),
                                    t('list2'),
                                    t('list3'),
                                    t('list4')
                                ].map((item, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.75rem',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        color: '#334155'
                                    }}>
                                        <CheckCircle2 style={{
                                            width: '1.25rem',
                                            height: '1.25rem',
                                            color: '#1e50e1',
                                            flexShrink: 0,
                                            marginTop: '0.125rem'
                                        }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    <div style={{ position: 'relative', width: '100%' }} className="carousel-wrapper">
                        {/* Glow effect */}
                        <div className="carousel-glow" />

                        <div style={{
                            position: 'relative',
                            background: 'var(--color-royal-blue-dark)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            maxWidth: '100%',
                            width: '100%'
                        }}>
                            {/* Decorative header */}
                            <div style={{
                                height: '2rem',
                                background: 'rgba(0, 0, 0, 0.2)',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 1rem',
                                gap: '0.5rem'
                            }}>
                                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.8)' }} />
                                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'rgba(234, 179, 8, 0.8)' }} />
                                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.8)' }} />
                            </div>

                            <Carousel autoplay autoplaySpeed={4000} effect="fade" style={{ width: '100%' }}>
                                {slides.map((slide, idx) => (
                                    <div key={idx} className="carousel-slide">
                                        <img
                                            src={slide}
                                            alt="Smart Production"
                                            className="carousel-image"
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top, var(--color-royal-blue), transparent, transparent)',
                                            opacity: 0.9
                                        }} />

                                        <div style={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            padding: '2rem 2rem 5rem 2rem',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            justifyContent: 'space-between'
                                        }}>
                                            <div>
                                                <h3 style={{
                                                    fontWeight: 700,
                                                    fontSize: '1.25rem',
                                                    color: 'white',
                                                    marginBottom: '0.25rem'
                                                }}>{t('smartFactoryTitle')}</h3>
                                                <p style={{
                                                    fontSize: '0.875rem',
                                                    color: 'rgba(219, 234, 254, 0.8)',
                                                    maxWidth: '20rem'
                                                }}>{t('smartFactoryDesc')}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                .pulse-animation {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                .vision-glass-card {
                    background: rgba(0, 0, 0, 0.2) !important;
                    backdrop-filter: blur(12px) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    border-radius: 1rem !important;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2) !important;
                }

                .carousel-wrapper {
                    position: relative;
                    max-width: 100%;
                    overflow: hidden;
                }

                .carousel-wrapper :global(.ant-carousel) {
                    aspect-ratio: 4 / 3;
                    width: 100%;
                }

                .carousel-wrapper :global(.ant-carousel),
                .carousel-wrapper :global(.slick-slider),
                .carousel-wrapper :global(.slick-list),
                .carousel-wrapper :global(.slick-track) {
                    max-width: 100% !important;
                    width: 100% !important;
                }

                .carousel-wrapper :global(.slick-slider),
                .carousel-wrapper :global(.slick-list),
                .carousel-wrapper :global(.slick-track) {
                    height: 100% !important;
                }

                /* Fix for fade effect: force slides to overlap instead of stacking vertically */
                .carousel-wrapper :global(.slick-slide) {
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100% !important;
                    height: 100% !important;
                }

                .carousel-wrapper :global(.slick-track) {
                    position: relative !important;
                }

                .carousel-wrapper :global(.slick-list) {
                    overflow: hidden !important;
                }

                .carousel-wrapper:hover .carousel-glow {
                    opacity: 0.5;
                }

                .carousel-glow {
                    position: absolute;
                    inset: -0.25rem;
                    background: rgba(255, 255, 255, 0.2);
                    opacity: 0.3;
                    filter: blur(2rem);
                    border-radius: 2rem;
                    transition: opacity 0.7s ease;
                }

                .carousel-slide {
                    position: relative;
                    width: 100%;
                }

                .carousel-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.7s ease;
                }

                .carousel-slide:hover .carousel-image {
                    transform: scale(1.05);
                }

                @media (min-width: 1024px) {
                    .vision-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }

                    .vision-list {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }

                    .carousel-wrapper :global(.ant-carousel) {
                        aspect-ratio: 16 / 9;
                    }
                }
            `}</style>
        </section>
    );
}