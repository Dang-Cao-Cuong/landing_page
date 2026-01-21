"use client";

import { Check, Layers, Database, BarChart3, Settings, ShieldCheck, Zap } from "lucide-react";
import { Tooltip } from 'antd';
import { useTranslations } from 'next-intl';
import styles from '../styles/Solution.module.css';

export function Solution() {
    const t = useTranslations('Solution');

    const goals = [
        t('goal1'),
        t('goal2'),
        t('goal3'),
        t('goal4'),
        t('goal5')
    ];

    const modules = [
        { icon: Layers, name: t('modCollection'), desc: t('modDescCollection') },
        { icon: BarChart3, name: t('modMonitoring'), desc: t('modDescMonitoring') },
        { icon: Database, name: t('modAnalytics'), desc: t('modDescAnalytics') },
        { icon: Settings, name: t('modOptimization'), desc: t('modDescOptimization') },
        { icon: ShieldCheck, name: t('modMaintenance'), desc: t('modDescMaintenance') },
        { icon: Zap, name: t('modEnergy'), desc: t('modDescEnergy') },
        { icon: Layers, name: t('modReporting'), desc: t('modDescReporting') },
    ];

    return (
        <section id="solution" className={styles.solutionSection}>
            <div className={styles.decorativeGrid} />
            <div className={styles.decorativeCircle} />

            <div className={styles.container}>
                {/* Goals & Framework Grid */}
                <div className={styles.mainGrid}>
                    {/* Left Column: Goals */}
                    <div>
                        <div className={styles.badge}>
                            <span className={styles.pulseDot} />
                            {t('approachBadge')}
                        </div>
                        <h2 className={styles.goalsTitle}>
                            {t('goalsTitle')}
                        </h2>
                        <div className={styles.goalsList}>
                            {goals.map((goal, idx) => (
                                <div key={idx} className={styles.goalCard}>
                                    <div className={styles.checkIconWrapper}>
                                        <Check className={styles.checkIcon} />
                                    </div>
                                    <span className={styles.goalText}>{goal}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Framework Card */}
                    <div className={styles.frameworkCard}>
                        <div className={styles.frameworkGradient} />

                        <h3 className={styles.frameworkHeader}>
                            {t('frameworkTitle')}
                            <div className={styles.headerLine} />
                        </h3>

                        <div className={styles.frameworkContent}>
                            <dl className={styles.frameworkItem}>
                                <dt className={styles.itemLabel}>{t('fwConnectivity')}</dt>
                                <dd className={styles.itemValue}>{t('fwConnectivityValue')}</dd>
                            </dl>
                            <dl className={styles.frameworkItem}>
                                <dt className={styles.itemLabel}>{t('fwDataHub')}</dt>
                                <dd className={styles.itemValue}>{t('fwDataHubValue')}</dd>
                            </dl>
                            <dl className={styles.frameworkItem}>
                                <dt className={styles.itemLabel}>{t('fwPlatform')}</dt>
                                <dd className={styles.itemValue}>{t('fwPlatformValue')}</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Modules Grid */}
                <div className={styles.modulesSection}>
                    <div className={styles.modulesHeader}>
                        <h2 className={styles.modulesTitle}>
                            {t('modulesTitle')}
                        </h2>
                        <p className={styles.modulesDesc}>
                            {t('modulesDesc')}
                        </p>
                    </div>

                    <div className={styles.modulesGrid}>
                        {modules.map((mod, idx) => (
                            <Tooltip
                                key={idx}
                                title={mod.desc}
                                color="var(--color-royal-blue-dark)"
                                trigger={["hover", "click"]}
                                styles={{
                                    container: {
                                        padding: '0.75rem',
                                        fontSize: '0.85rem'
                                    }
                                }}
                            >
                                <div className={styles.moduleCard}>
                                    <div className={styles.moduleIconWrapper}>
                                        <mod.icon className={styles.moduleIcon} />
                                    </div>
                                    <span className={styles.moduleText}>
                                        {mod.name}
                                    </span>
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
