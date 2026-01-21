"use client";

import { Clock, Gauge, DollarSign, Trophy, TrendingUp } from "lucide-react";
import { Card } from "antd";
import { useTranslations } from 'next-intl';
import styles from '../styles/Pillars.module.css';

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
        <section id="pillars" className={styles.pillarsSection}>
            <div className={styles.backgroundGrid} />

            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>
                        {t('badge')}
                    </div>
                    <h2 className={styles.title}>
                        {t('title')}
                    </h2>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>
                </div>

                <div className={styles.contentWrapper}>
                    {/* Connecting line */}
                    <div className={styles.connectingLine} />

                    <div className={styles.grid}>
                        {pillars.map((item, index) => (
                            <div key={index} className={styles.cardWrapper}>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
