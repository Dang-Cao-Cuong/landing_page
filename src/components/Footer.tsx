"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import styles from '../styles/Footer.module.css';

export function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandColumn}>
                    <div className={styles.brandWrapper}>
                        <div className={styles.logoContainer}>
                            <Image
                                src="/iic4.0.svg"
                                alt="IIC 4.0 Logo"
                                fill
                                className={styles.logoImage}
                            />
                        </div>
                        <span>QWaste</span>
                    </div>
                    <p className={styles.tagline}>
                        {t.rich('tagline')}
                    </p>
                </div>

                <div>
                    <h3 className={styles.columnHeading}>{t('solution')}</h3>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="#" className={styles.link}>Digital Factory</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>Smart Monitoring</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>OEE Optimization</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className={styles.columnHeading}>{t('company')}</h3>
                    <ul className={styles.linkList}>
                        <li>
                            <a href="#" className={styles.link}>{t('about')}</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>{t('contact')}</a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>{t('careers')}</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className={styles.columnHeading}>{t('contact')}</h3>
                    <ul className={styles.linkList}>
                        <li>info@qwaste.com</li>
                        <li>(+84) 123 456 789</li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                {t('rights', { year: new Date().getFullYear() })}
            </div>
        </footer>
    );
}
