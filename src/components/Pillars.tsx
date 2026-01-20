"use client";

import { Clock, Gauge, DollarSign, Trophy, TrendingUp } from "lucide-react";
import { Card } from "antd";
import { useTranslations } from 'next-intl';
import styles from '@/styles/gradients.module.css';

export function Pillars() {
    const t = useTranslations('Pillars');

    const pillars = [
        { icon: Clock, title: t('time'), desc: t('timeDesc') },
        { icon: Gauge, title: t('efficiency'), desc: t('efficiencyDesc') },
        { icon: DollarSign, title: t('cost'), desc: t('costDesc') },
        { icon: Trophy, title: t('competitiveness'), desc: t('competitivenessDesc') },
        { icon: TrendingUp, title: t('revenue'), desc: t('revenueDesc') }
    ];

    return (
        <section id="pillars" style={{
            position: 'relative',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            overflow: 'hidden'
        }} className={styles.pillarsGradient}>
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("/grid-pattern.svg")',
                opacity: 0.03,
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1rem',
                position: 'relative',
                zIndex: 10
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        background: 'rgba(30, 80, 225, 0.1)',
                        border: '1px solid rgba(30, 80, 225, 0.2)',
                        color: 'var(--color-primary)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.5rem',
                        alignSelf: 'center'
                    }}>
                        {t('badge')}
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(1.875rem, 5vw, 3rem)',
                        fontWeight: 700,
                        color: 'var(--color-dark-navy)'
                    }}>
                        {t('title')}
                    </h2>
                    <p style={{
                        maxWidth: '42rem',
                        margin: '0 auto',
                        color: 'var(--color-slate-600)',
                        fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                        fontWeight: 300,
                        lineHeight: 1.625
                    }}>
                        {t('subtitle')}
                    </p>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Connecting line */}
                    <div style={{
                        display: 'none',
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'linear-gradient(to right, transparent, rgba(30, 80, 225, 0.3), transparent)',
                        transform: 'translateY(-50%)',
                        zIndex: 0
                    }} className="md-line" />

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(1, 1fr)',
                        gap: '1.5rem'
                    }} className="pillars-grid">
                        {pillars.map((item, index) => (
                            <div key={index} style={{ position: 'relative' }} className="pillar-card-wrapper">
                                <Card
                                    hoverable
                                    variant="borderless"
                                    className="pillar-card"
                                    styles={{
                                        body: {
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            padding: '2rem 1.5rem',
                                        }
                                    }}
                                >
                                    {/* Number badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '0.5rem',
                                        right: '1rem',
                                        fontSize: '3rem',
                                        fontWeight: 900,
                                        color: 'var(--color-blue-50)',
                                        zIndex: 0,
                                        userSelect: 'none'
                                    }} className="pillar-number">
                                        0{index + 1}
                                    </div>

                                    {/* Icon container */}
                                    <div className="pillar-icon-container">
                                        <item.icon className="pillar-icon" style={{ width: '2rem', height: '2rem' }} />
                                    </div>

                                    <div style={{
                                        position: 'relative',
                                        zIndex: 10,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.75rem'
                                    }}>
                                        <h3 className="pillar-title">
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '0.9375rem',
                                            color: 'var(--color-slate-600)',
                                            lineHeight: 1.625
                                        }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (min-width: 768px) {
                    .md-line {
                        display: block !important;
                    }
                    .pillars-grid {
                        grid-template-columns: repeat(5, 1fr) !important;
                    }
                }

                .pillar-card {
                    height: 100%;
                    background: var(--color-white);
                    border: 1px solid var(--color-blue-100);
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                    transition: all 0.5s ease;
                }

                .pillar-card-wrapper:hover .pillar-card {
                    transform: translateY(-0.5rem);
                    border-color: var(--color-primary);
                    box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.1), 0 10px 10px -5px rgba(37, 99, 235, 0.04);
                }

                .pillar-card-wrapper:hover .pillar-number {
                    color: var(--color-blue-100);
                }

                .pillar-icon-container {
                    position: relative;
                    z-index: 10;
                    width: 4rem;
                    height: 4rem;
                    border-radius: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                    transition: all 0.5s ease;
                    background: var(--color-bg-surface);
                }

                .pillar-card-wrapper:hover .pillar-icon-container {
                    background: var(--color-primary);
                    transform: scale(1.1);
                    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
                }

                .pillar-icon {
                    transition: color 0.3s ease;
                    color: var(--color-primary);
                }

                .pillar-card-wrapper:hover .pillar-icon {
                    color: var(--color-white);
                }

                .pillar-title {
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: var(--color-dark-navy);
                    transition: color 0.3s ease;
                }

                .pillar-card-wrapper:hover .pillar-title {
                    color: var(--color-primary);
                }
            `}</style>
        </section>
    );
}