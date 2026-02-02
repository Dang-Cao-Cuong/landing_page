"use client";

import { Carousel, Card } from "antd";
import { CheckCircle2, Zap } from "lucide-react";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from '../styles/Vision.module.css';

export function Vision() {
    const t = useTranslations('Vision');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.2 });

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const slides = [
        "/work_1.jpg",
        "/work_2.jpg",
        "/work_3.jpg"
    ];

    return (
        <section id="vision" className={styles.visionSection} ref={ref}>
            {/* Decorative backgrounds */}
            <div className={styles.decorativeCircle1} />
            <div className={styles.decorativeCircle2} />
            <div className={styles.decorativeGrid} />

            <div className={styles.container}>
                <motion.div 
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div 
                        className={styles.contentColumn}
                        variants={fadeInLeft}
                    >
                        <motion.div variants={fadeInUp}>
                            <div className={styles.badge}>
                                <span className={styles.pulseDot} />
                                {t('badge')}
                            </div>
                            <h2 className={styles.title}>
                                {t.rich('title', {
                                    accent: (chunks) => <span className={styles.accent}>{chunks}</span>
                                })}
                            </h2>
                        </motion.div>

                        <motion.div 
                            className={styles.descriptionWrapper}
                            variants={fadeInUp}
                        >
                            <p className={styles.description}>
                                {t('desc1')}
                            </p>
                            <p className={styles.description}>
                                {t.rich('desc2', {
                                    bold: (chunks) => <span className={styles.boldText}>{chunks}</span>
                                })}
                            </p>
                        </motion.div>

                        {/* Glassmorphism Card */}
                        <motion.div variants={scaleIn}>
                            <Card
                                variant="borderless"
                                className={styles.glassCard}
                                styles={{ body: { padding: '2rem' } }}
                            >
                                <h3 className={styles.cardTitle}>
                                    <Zap className={styles.icon} style={{ color: '#fde047', fill: '#fde047' }} />
                                    {t('boxTitle')}
                                </h3>
                                <ul className={styles.cardList}>
                                    {[
                                        t('list1'),
                                        t('list2'),
                                        t('list3'),
                                        t('list4')
                                    ].map((item, i) => (
                                        <motion.li 
                                            key={i} 
                                            className={styles.listItem}
                                            custom={i}
                                            variants={listItemVariants}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                        >
                                            <CheckCircle2 className={styles.icon} style={{ color: '#93c5fd' }} />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className={styles.carouselGroup}
                        variants={fadeInRight}
                    >
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
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}