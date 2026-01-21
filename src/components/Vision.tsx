"use client";

import { Carousel, Card } from "antd";
import { CheckCircle2, Zap } from "lucide-react";
import { useTranslations } from 'next-intl';
import styles from '../styles/Vision.module.css';

export function Vision() {
    const t = useTranslations('Vision');

    const slides = [
        "/work_1.jpg",
        "/work_2.jpg",
        "/work_3.jpg"
    ];

    return (
        <section id="vision" className={styles.visionSection}>
            {/* Decorative backgrounds */}
            <div className={styles.decorativeCircle1} />
            <div className={styles.decorativeCircle2} />
            <div className={styles.decorativeGrid} />

            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.contentColumn}>
                        <div>
                            <div className={styles.badge}>
                                <span className={styles.pulseDot} />
                                {t('badge')}
                            </div>
                            <h2 className={styles.title}>
                                {t.rich('title', {
                                    accent: (chunks) => <span className={styles.accent}>{chunks}</span>
                                })}
                            </h2>
                        </div>

                        <div className={styles.descriptionWrapper}>
                            <p className={styles.description}>
                                {t('desc1')}
                            </p>
                            <p className={styles.description}>
                                {t.rich('desc2', {
                                    bold: (chunks) => <span className={styles.boldText}>{chunks}</span>
                                })}
                            </p>
                        </div>

                        {/* Glassmorphism Card */}
                        <Card
                            variant="borderless"
                            className={styles.glassCard}
                            styles={{ body: { padding: '2rem' } }}
                        >
                            <h3 className={styles.cardTitle}>
                                <Zap className={styles.icon} style={{ color: '#fde047', fill: '#fde047' }} /> {/* yellow-300 */}
                                {t('boxTitle')}
                            </h3>
                            <ul className={styles.cardList}>
                                {[
                                    t('list1'),
                                    t('list2'),
                                    t('list3'),
                                    t('list4')
                                ].map((item, i) => (
                                    <li key={i} className={styles.listItem}>
                                        <CheckCircle2 className={styles.icon} style={{ color: '#93c5fd' }} /> {/* blue-300 */}
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    <div className={styles.carouselGroup}>
                        {/* Glow effect */}
                        <div className={styles.carouselGlow} />

                        <div className={styles.carouselContainer}>
                            {/* Decorative header */}
                            <div className={styles.browserHeader}>
                                <div className={styles.dot} style={{ background: 'rgba(239, 68, 68, 0.8)' }} />
                                <div className={styles.dot} style={{ background: 'rgba(234, 179, 8, 0.8)' }} />
                                <div className={styles.dot} style={{ background: 'rgba(34, 197, 94, 0.8)' }} />
                            </div>

                            <Carousel autoplay autoplaySpeed={4000} effect="fade">
                                {slides.map((slide, idx) => (
                                    <div key={idx} className={styles.slideWrapper}>
                                        <img
                                            src={slide}
                                            alt={t('imageAlt')}
                                            className={styles.slideImage}
                                        />
                                        <div className={styles.slideOverlay} />

                                        <div className={styles.slideContent}>
                                            <div>
                                                <h3 className={styles.slideContentTitle}>{t('smartFactoryTitle')}</h3>
                                                <p className={styles.slideContentDesc}>{t('smartFactoryDesc')}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}