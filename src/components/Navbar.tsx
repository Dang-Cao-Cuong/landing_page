"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
    const t = useTranslations('Navbar');
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/#vision", label: t('vision') },
        { href: "/#solution", label: t('solution') },
        { href: "/#impact", label: t('impact') },
    ];

    return (
        <header
            className={clsx(
                "navbar-header",
                scrolled && "navbar-scrolled"
            )}
        >
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Link href="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none'
                }}>
                    <div style={{
                        position: 'relative',
                        width: '3rem',
                        height: '3rem'
                    }}>
                        <Image
                            src="/LogoIIC.svg"
                            alt="QWaste Logo"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <span className="navbar-brand-desktop">
                        QWaste <span style={{ color: '#18181b' }}>Digital Factory</span>
                    </span>
                    <span className="navbar-brand-mobile">
                        QWaste
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="navbar-desktop">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="navbar-link"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <LanguageSwitcher />

                    <Link href="/#contact">
                        <Button
                            type="primary"
                            size="large"
                            shape="round"
                            className="navbar-cta-button"
                        >
                            {t('getStarted')}
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <div className="navbar-mobile-toggle">
                    <LanguageSwitcher />
                    <button
                        style={{
                            color: 'var(--color-cobalt)',
                            padding: '0.5rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            <Drawer
                title={
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <div style={{
                            position: 'relative',
                            width: '2rem',
                            height: '2rem'
                        }}>
                            <Image
                                src="/LogoIIC.svg"
                                alt="QWaste Logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <span style={{
                            color: 'var(--color-cobalt)',
                            fontWeight: 700
                        }}>QWaste</span>
                    </div>
                }
                placement="right"
                onClose={() => setIsOpen(false)}
                open={isOpen}
                styles={{
                    mask: { backdropFilter: 'blur(4px)' },
                    body: { padding: 0 },
                    wrapper: { width: 280 }
                }}
                className="navbar-drawer"
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="navbar-drawer-link"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div style={{ padding: '1.5rem' }}>
                        <Link href="/#contact" onClick={() => setIsOpen(false)}>
                            <Button
                                type="primary"
                                block
                                size="large"
                                shape="round"
                                style={{
                                    fontWeight: 700,
                                    height: '3rem',
                                    fontSize: '1.125rem',
                                    boxShadow: '0 10px 15px -3px rgba(30, 80, 225, 0.2)'
                                }}
                            >
                                {t('getStarted')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </Drawer>

            <style jsx global>{`
                .navbar-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    transition: all 0.3s ease;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(12px);
                    padding: 1rem 0;
                }

                .navbar-scrolled {
                    padding: 0.75rem 0;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                }

                .navbar-brand-desktop {
                    color: var(--color-cobalt);
                    font-weight: 700;
                    font-size: 1.25rem;
                    letter-spacing: -0.025em;
                    display: none;
                }

                .navbar-brand-mobile {
                    color: var(--color-cobalt);
                    font-weight: 700;
                    font-size: 1.25rem;
                    letter-spacing: -0.025em;
                    display: block;
                }

                .navbar-desktop {
                    display: none;
                    align-items: center;
                    gap: 2rem;
                    flex: 1;
                    justify-content: flex-end;
                }

                .navbar-link {
                    color: var(--color-zinc-600);
                    font-weight: 500;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .navbar-link:hover {
                    color: var(--color-cobalt);
                }

                .navbar-cta-button {
                    font-weight: 700 !important;
                    height: auto !important;
                    padding: 0.5rem 1.5rem !important;
                    box-shadow: 0 10px 15px -3px rgba(30, 80, 225, 0.2) !important;
                    transition: transform 0.3s ease !important;
                }

                .navbar-cta-button:hover {
                    transform: scale(1.05) !important;
                }

                .navbar-mobile-toggle {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .navbar-drawer :global(.ant-drawer-content) {
                    background: rgba(255, 255, 255, 0.9) !important;
                    backdrop-filter: blur(40px) !important;
                }

                .navbar-drawer-link {
                    color: var(--color-zinc-600);
                    padding: 1rem 1.5rem;
                    border-bottom: 1px solid #f4f4f5;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: block;
                    font-size: 1.125rem;
                }

                .navbar-drawer-link:hover {
                    color: var(--color-cobalt);
                    background: rgba(239, 246, 255, 0.5);
                }

                @media (min-width: 640px) {
                    .navbar-brand-desktop {
                        display: block;
                    }

                    .navbar-brand-mobile {
                        display: none;
                    }
                }

                @media (min-width: 768px) {
                    .navbar-desktop {
                        display: flex;
                    }

                    .navbar-mobile-toggle {
                        display: none;
                    }
                }
            `}</style>
        </header>
    );
}
