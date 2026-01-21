"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Database, TrendingUp } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Button, Typography } from "antd";
import globalStyles from '@/styles/gradients.module.css';
import styles from '@/styles/hero.module.css';

const { Title, Paragraph } = Typography;

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className={`${styles.heroContainer} ${globalStyles.heroGradient}`}>
            {/* Blur decorations */}
            <div className={styles.blurDecoration1} />
            <div className={styles.blurDecoration2} />

            <div className={styles.contentWrapper}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.motionContainer}
                >
                    {/* Tagline Pill */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className={styles.taglineBadge}
                    >
                        <span className={styles.pingWrapper}>
                            <span className={styles.pingAnimation}></span>
                            <span className={styles.pingDot}></span>
                        </span>
                        <span>{t('tagline')}</span>
                    </motion.div>

                    {/* Title */}
                    <Title
                        level={1}
                        style={{
                            fontSize: 'clamp(2.25rem, 5vw, 8rem)',
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
                        className={styles.heroActionButtons}
                    >
                        <Button
                            type="primary"
                            size="large"
                            shape="round"
                            className={styles.heroPrimaryBtn}
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
                            className={styles.heroSecondaryBtn}
                        >
                            {t('contact')}
                        </Button>
                    </motion.div>
                </motion.div>


            </div>

            {/* Floating Icons/Elements - Moved outside contentWrapper for wider positioning */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`${styles.heroFloatingCard} ${styles.heroFloatingLeft}`}
            >
                <Clock style={{ width: '2rem', height: '2rem', color: 'var(--color-cobalt)', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.75rem', color: '#52525b' }}>{t('floatRealTimeLabel')}</div>
                <div style={{ fontWeight: 700, color: '#172554' }}>{t('floatRealTimeValue')}</div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`${styles.heroFloatingCard} ${styles.heroFloatingRight}`}
            >
                <TrendingUp style={{ width: '2rem', height: '2rem', color: '#16a34a', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.75rem', color: '#52525b' }}>{t('floatEfficiencyLabel')}</div>
                <div style={{ fontWeight: 700, color: '#172554' }}>{t('floatEfficiencyValue')}</div>
            </motion.div>

            {/* Decorative grid */}
            <div className={styles.gridPattern} />
        </section >
    );
}