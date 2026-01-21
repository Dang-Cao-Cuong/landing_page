"use client";

import { Check } from "lucide-react";
import { Table, Card } from "antd";
import { ConsultationForm } from "./ConsultationForm";
import { useTranslations } from 'next-intl';
import styles from '../styles/Impact.module.css';

export function Impact() {
    const t = useTranslations('Impact');
    const data = [
        { factor: t('row1Factor'), direct: t('row1Direct'), impact: t('row1Impact') },
        { factor: t('row2Factor'), direct: t('row2Direct'), impact: t('row2Impact') },
        { factor: t('row3Factor'), direct: t('row3Direct'), impact: t('row3Impact') },
        { factor: t('row4Factor'), direct: t('row4Direct'), impact: t('row4Impact') },
        { factor: t('row5Factor'), direct: t('row5Direct'), impact: t('row5Impact') },
    ];

    return (
        <section id="impact" className={styles.section}>
            {/* Noise/Grid Pattern Overlay */}
            <div className={styles.gridPattern} />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        {t.rich('title', {
                            accent: (chunks) => <span style={{ color: 'var(--color-cobalt)' }}>{chunks}</span>
                        })}
                    </h2>
                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>
                </div>

                {/* Desktop Table */}
                <div className={styles.desktopTable}>
                    <Table
                        dataSource={data}
                        pagination={false}
                        rowKey="factor"
                        className={styles.tableWrapper}
                        columns={[
                            {
                                title: t('headerFactor'),
                                dataIndex: 'factor',
                                key: 'factor',
                                className: styles.factorCell,
                            },
                            {
                                title: t('headerDirect'),
                                dataIndex: 'direct',
                                key: 'direct',
                                className: styles.directCell,
                            },
                            {
                                title: t('headerImpact'),
                                key: 'impact',
                                render: (_: any, record: { impact: string }) => (
                                    <div className={styles.impactWrapper}>
                                        <div className={styles.checkIconWrapper}>
                                            <Check className={styles.checkIcon} />
                                        </div>
                                        <span className={styles.impactText}>{record.impact}</span>
                                    </div>
                                ),
                                className: styles.impactCell
                            },
                        ]}
                    />
                </div>

                {/* Mobile Cards */}
                <div className={styles.mobileCards}>
                    {data.map((row, idx) => (
                        <div key={idx} className={styles.mobileCardWrapper}>
                            <Card
                                className={styles.mobileCard}
                                styles={{ body: { padding: '1.5rem' } }}
                            >
                                <div className={styles.mobileCardHeader}>
                                    <h3 className={styles.mobileCardTitle}>{row.factor}</h3>
                                    <div className={styles.checkIconWrapper} style={{ width: '2rem', height: '2rem', background: 'var(--color-blue-50)' }}>
                                        <Check className={styles.checkIcon} />
                                    </div>
                                </div>
                                <div className={styles.mobileCardContent}>
                                    <div>
                                        <div className={styles.mobileLabel}>{t('headerDirect')}</div>
                                        <div className={styles.mobileDirectValue}>{row.direct}</div>
                                    </div>
                                    <div>
                                        <div className={styles.mobileLabelGreen}>{t('headerImpact')}</div>
                                        <div className={styles.mobileImpactValue}>{row.impact}</div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaSection}>
                    <div className={styles.ctaGradient} />
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>
                            {t.rich('quote')}
                        </h3>
                        <p className={styles.ctaDesc}>
                            {t.rich('quoteDesc', {
                                bold: (chunks) => <span style={{ color: 'var(--color-cobalt)', fontWeight: 700 }}>{chunks}</span>
                            })}
                        </p>
                        <div id="consultation-form" className={styles.contactGrid}>
                            <div className={styles.mapContainer}>
                                <iframe
                                    src="https://maps.google.com/maps?q=Tr%C6%B0%E1%BB%9Dng%20Qu%E1%BB%91c%20t%E1%BA%BF%20Mi%E1%BB%81n%20%C4%90%C3%B4ng&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className={styles.mapIframe}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div className={styles.mapOverlay}>
                                    <p className={styles.addressText}>
                                        {t('address')}
                                    </p>
                                </div>
                            </div>

                            <div className={styles.formContainer}>
                                <ConsultationForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
