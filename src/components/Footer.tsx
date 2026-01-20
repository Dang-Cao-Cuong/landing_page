"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer style={{
            background: 'var(--color-slate-900)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '3rem 0 4rem',
            textAlign: 'center',
            color: 'var(--color-zinc-400)'
        }} className="footer-main">
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1rem',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem'
            }} className="footer-grid">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1.25rem'
                    }} className="footer-brand">
                        <div style={{
                            position: 'relative',
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src="/iic4.0.svg"
                                alt="IIC 4.0 Logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <span>QWaste</span>
                    </div>
                    <p style={{
                        color: 'var(--color-zinc-400)',
                        fontSize: '0.875rem',
                        lineHeight: 1.625
                    }}>
                        {t.rich('tagline')}
                    </p>
                </div>

                <div>
                    <h3 style={{
                        color: 'white',
                        fontWeight: 600,
                        marginBottom: '1rem'
                    }}>{t('solution')}</h3>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        color: 'var(--color-zinc-400)',
                        fontSize: '0.875rem',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li>
                            <a href="#" className="footer-link">Digital Factory</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Smart Monitoring</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">OEE Optimization</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 style={{
                        color: 'white',
                        fontWeight: 600,
                        marginBottom: '1rem'
                    }}>{t('company')}</h3>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        color: 'var(--color-zinc-400)',
                        fontSize: '0.875rem',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li>
                            <a href="#" className="footer-link">{t('about')}</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">{t('contact')}</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">{t('careers')}</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 style={{
                        color: 'white',
                        fontWeight: 600,
                        marginBottom: '1rem'
                    }}>{t('contact')}</h3>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        color: 'var(--color-zinc-400)',
                        fontSize: '0.875rem',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li>info@qwaste.com</li>
                        <li>(+84) 123 456 789</li>
                    </ul>
                </div>
            </div>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1rem',
                marginTop: '3rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                paddingTop: '2rem',
                textAlign: 'center',
                color: 'var(--color-zinc-500)',
                fontSize: '0.875rem'
            }}>
                {t('rights', { year: new Date().getFullYear() })}
            </div>

            <style jsx global>{`
                .footer-link {
                    color: inherit;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .footer-link:hover {
                    color: var(--color-cobalt);
                }

                @media (min-width: 768px) {
                    .footer-main {
                        text-align: left !important;
                    }

                    .footer-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                    }

                    .footer-brand {
                        justify-content: flex-start !important;
                    }
                }
            `}</style>
        </footer>
    );
}
