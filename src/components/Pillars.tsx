"use client";

import { Clock, Gauge, DollarSign, Trophy, TrendingUp } from "lucide-react";
import { Card } from "antd";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from '../styles/Pillars.module.css';

export function Pillars() {
    const t = useTranslations('Pillars');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.2 });

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as any
            }
        })
    };

    const pillars = [
        { icon: Clock, title: t('time'), desc: t('timeDesc') },
        { icon: Gauge, title: t('efficiency'), desc: t('efficiencyDesc') },
        { icon: DollarSign, title: t('cost'), desc: t('costDesc') },
        { icon: Trophy, title: t('competitiveness'), desc: t('competitivenessDesc') },
        { icon: TrendingUp, title: t('revenue'), desc: t('revenueDesc') }
    ];

    return (
        <section id="pillars" className={styles.pillarsSection} ref={ref}>
            <div className={styles.backgroundGrid} />

            <div className={styles.container}>
                <motion.div 
                    className={styles.header}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    <div className={styles.badge}>
                        {t('badge')}
                    </div>
                    <h2 className={styles.title}>
                        {t('title')}
                    </h2>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className={styles.contentWrapper}>
                    {/* Connecting line */}
                    <div className={styles.connectingLine} />

                    <motion.div 
                        className={styles.grid}
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {pillars.map((item, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.cardWrapper}
                                custom={index}
                                variants={cardVariants}
                            >
                                <Card
                                    hoverable
                                    variant="borderless"
                                    className={styles.card}
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
                                    <div className={styles.number}>
                                        0{index + 1}
                                    </div>

                                    {/* Icon container */}
                                    <div className={styles.iconContainer}>
                                        <item.icon className={styles.icon} />
                                    </div>

                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardTitle}>
                                            {item.title}
                                        </h3>
                                        <p className={styles.cardDesc}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
