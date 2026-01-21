"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from '../styles/Navbar.module.css';

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
        { href: "/#news", label: t('news') },
        { href: "/#impact", label: t('impact') },
    ];

    return (
        <header
            className={clsx(
                styles.header,
                scrolled && styles.scrolled
            )}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.brandLink}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/LogoIIC.svg"
                            alt="QWaste Logo"
                            fill
                            className={styles.logoImage}
                        />
                    </div>
                    <span className={styles.brandTextDesktop}>
                        QWaste <span style={{ color: '#18181b' }}>Digital Factory</span>
                    </span>
                    <span className={styles.brandTextMobile}>
                        QWaste
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
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
                            className={styles.ctaButton}
                        >
                            {t('getStarted')}
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <div className={styles.mobileToggle}>
                    <LanguageSwitcher />
                    <button
                        className={styles.toggleButton}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            <Drawer
                title={
                    <div className={styles.drawerTitleWrapper}>
                        <div className={styles.drawerLogoWrapper}>
                            <Image
                                src="/LogoIIC.svg"
                                alt="QWaste Logo"
                                fill
                                className={styles.logoImage}
                            />
                        </div>
                        <span className={styles.drawerBrandText}>QWaste</span>
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
                className={styles.drawer}
            >
                <div className={styles.drawerContent}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={styles.drawerLink}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className={styles.drawerCtaContainer}>
                        <Link href="/#contact" onClick={() => setIsOpen(false)}>
                            <Button
                                type="primary"
                                block
                                size="large"
                                shape="round"
                                className={styles.drawerCtaButton}
                            >
                                {t('getStarted')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </Drawer>
        </header>
    );
}
