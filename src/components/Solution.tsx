"use client";

import { Check, Layers, Database, BarChart3, Settings, ShieldCheck, Zap } from "lucide-react";
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from '../styles/Solution.module.css';

export function Solution() {
    const t = useTranslations('Solution');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.2 });
    
    // For infinite scroll
    const x = useMotionValue(0);
    const [isDragging, setIsDragging] = useState(false);
    
    // Auto-scroll animation
    useAnimationFrame((time, delta) => {
        if (!isDragging && isInView) {
            // Move left continuously at 30px per second
            const newX = x.get() - (delta / 1000) * 30;
            
            // Reset position for infinite loop
            // Each module is ~296px (280px + 16px gap)
            const moduleWidth = 296;
            const totalWidth = modules.length * moduleWidth;
            
            if (newX <= -totalWidth) {
                x.set(newX + totalWidth);
            } else {
                x.set(newX);
            }
        }
    });

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as any }
        })
    };

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
    
    // Duplicate modules for infinite scroll effect
    const duplicatedModules = [...modules, ...modules, ...modules];

    return (
        <section id="solution" className={styles.solutionSection} ref={ref}>
            <div className={styles.decorativeGrid} />
            <div className={styles.decorativeCircle} />

            <div className={styles.container}>
                {/* Goals & Framework Grid */}
                <div className={styles.mainGrid}>
                    {/* Left Column: Goals */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeInLeft}
                    >
                        <div className={styles.badge}>
                            <span className={styles.pulseDot} />
                            {t('approachBadge')}
                        </div>
                        <h2 className={styles.goalsTitle}>
                            {t('goalsTitle')}
                        </h2>
                        <motion.div 
                            className={styles.goalsList}
                            variants={staggerContainer}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {goals.map((goal, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className={styles.goalCard}
                                    custom={idx}
                                    variants={itemVariants}
                                >
                                    <div className={styles.checkIconWrapper}>
                                        <Check className={styles.checkIcon} />
                                    </div>
                                    <span className={styles.goalText}>{goal}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Framework Card */}
                    <motion.div 
                        className={styles.frameworkCard}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeInRight}
                    >
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
                    </motion.div>
                </div>

                {/* Modules Carousel */}
                <motion.div 
                    className={styles.modulesSection}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    <div className={styles.modulesHeader}>
                        <h2 className={styles.modulesTitle}>
                            {t('modulesTitle')}
                        </h2>
                        <p className={styles.modulesDesc}>
                            {t('modulesDesc')}
                        </p>
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className={styles.modulesCarouselWrapper}>
                        <motion.div 
                            className={styles.modulesCarousel}
                            drag="x"
                            dragConstraints={{ left: -296 * modules.length, right: 0 }}
                            dragElastic={0.1}
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 40 }}
                            style={{ x }}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={() => setIsDragging(false)}
                        >
                            {duplicatedModules.map((mod, idx) => (
                                <motion.div
                                    key={`module-${idx}`}
                                    className={styles.moduleCard}
                                    whileHover={{ 
                                        y: -8, 
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: (idx % modules.length) * 0.05, duration: 0.4 }}
                                >
                                    <div className={styles.moduleIconWrapper}>
                                        <mod.icon className={styles.moduleIcon} />
                                    </div>
                                    <div className={styles.moduleContent}>
                                        <h3 className={styles.moduleText}>{mod.name}</h3>
                                        <p className={styles.moduleDesc}>{mod.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        
                        {/* Scroll Indicator */}
                        <div className={styles.scrollIndicator}>
                            <div className={styles.scrollHint}>
                                <span>←</span>
                                <span>{t('dragToScroll')}</span>
                                <span>→</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
