"use client";

import { Check, Layers, Database, BarChart3, Settings, ShieldCheck, Zap } from "lucide-react";
import { Tooltip } from 'antd';
import { useTranslations } from 'next-intl';

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
        <section id="solution" style={{
            position: 'relative',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            background: 'var(--color-royal-blue)',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("/grid-pattern.svg")',
                opacity: 0.2,
                pointerEvents: 'none',
                mixBlendMode: 'overlay'
            }} />
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '600px',
                height: '600px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                filter: 'blur(120px)',
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1rem',
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '5rem'
            }}>
                {/* Goals & Framework Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }} className="solution-main-grid">
                    {/* Left Column: Goals */}
                    <div>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: '1rem'
                        }}>
                            <span className="pulse-dot" style={{
                                width: '0.5rem',
                                height: '0.5rem',
                                borderRadius: '50%',
                                background: 'white'
                            }} />
                            {t('approachBadge')}
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(1.875rem, 5vw, 2.25rem)',
                            fontWeight: 700,
                            marginBottom: '2rem',
                            color: 'white'
                        }}>
                            {t('goalsTitle')}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {goals.map((goal, idx) => (
                                <div key={idx} className="goal-card">
                                    <div style={{
                                        width: '1.5rem',
                                        height: '1.5rem',
                                        borderRadius: '50%',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        marginTop: '0.125rem'
                                    }}>
                                        <Check style={{ width: '0.875rem', height: '0.875rem', color: '#bfdbfe' }} />
                                    </div>
                                    <span style={{
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontWeight: 500,
                                        lineHeight: 1.625
                                    }}>{goal}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Framework Card */}
                    <div className="framework-card">
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), transparent)',
                            opacity: 0.5
                        }} />

                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginBottom: '2rem',
                            position: 'relative',
                            zIndex: 10,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            {t('frameworkTitle')}
                            <div style={{
                                height: '1px',
                                flex: 1,
                                background: 'linear-gradient(to right, rgba(255, 255, 255, 0.3), transparent)'
                            }} />
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            position: 'relative',
                            zIndex: 10
                        }}>
                            <dl className="framework-item">
                                <dt style={{
                                    color: '#bfdbfe',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: '0.5rem'
                                }}>Connectivity</dt>
                                <dd style={{
                                    color: 'white',
                                    fontSize: '1.125rem',
                                    fontWeight: 500,
                                    margin: 0
                                }}>OPC UA / MQTT / Modbus TCP</dd>
                            </dl>
                            <dl className="framework-item">
                                <dt style={{
                                    color: '#bfdbfe',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: '0.5rem'
                                }}>Data Hub</dt>
                                <dd style={{
                                    color: 'white',
                                    fontSize: '1.125rem',
                                    fontWeight: 500,
                                    margin: 0
                                }}>SQL Server / InfluxDB</dd>
                            </dl>
                            <dl className="framework-item">
                                <dt style={{
                                    color: '#bfdbfe',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: '0.5rem'
                                }}>Platform</dt>
                                <dd style={{
                                    color: 'white',
                                    fontSize: '1.125rem',
                                    fontWeight: 500,
                                    margin: 0
                                }}>Real-time Digital Twin</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Modules Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: '1.875rem',
                            fontWeight: 700,
                            color: 'white',
                            marginBottom: '0.5rem'
                        }}>
                            {t('modulesTitle')}
                        </h2>
                        <p style={{
                            color: 'rgba(219, 234, 254, 0.8)',
                            maxWidth: '42rem',
                            margin: '0 auto'
                        }}>
                            {t('modulesDesc')}
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '1rem'
                    }} className="modules-grid">
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
                                <div className="module-card">
                                    <div className="module-icon">
                                        <mod.icon style={{ width: '1.5rem', height: '1.5rem' }} />
                                    </div>
                                    <span style={{
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        textAlign: 'center',
                                        lineHeight: 1.25
                                    }} className="module-text">
                                        {mod.name}
                                    </span>
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .pulse-dot {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                .goal-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 1rem;
                    border-radius: 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }

                .goal-card:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .framework-card {
                    position: relative;
                    height: 100%;
                    min-height: 450px;
                    background: var(--color-royal-blue-dark);
                    border-radius: 1.5rem;
                    overflow: hidden;
                    padding: 2rem;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .framework-card:hover .framework-item {
                    border-color: rgba(255, 255, 255, 0.5);
                }

                .framework-item {
                    border-left: 2px solid rgba(255, 255, 255, 0.2);
                    padding-left: 1.5rem;
                    transition: border-color 0.3s ease;
                }

                .module-card {
                    position: relative;
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(4px);
                    padding: 1rem;
                    border-radius: 1rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    height: 100%;
                    justify-content: center;
                    min-height: 140px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .module-card:hover {
                    background: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.3);
                    transform: translateY(-0.5rem);
                }

                .module-icon {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #bfdbfe;
                    transition: all 0.3s ease;
                }

                .module-card:hover .module-icon {
                    color: white;
                    background: rgba(255, 255, 255, 0.2);
                }

                .module-text {
                    color: #dbeafe;
                }

                .module-card:hover .module-text {
                    color: white;
                }

                @media (min-width: 768px) {
                    .solution-main-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }

                    .modules-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                    }

                    .framework-card {
                        padding: 2.5rem;
                    }
                }

                @media (min-width: 1024px) {
                    .modules-grid {
                        grid-template-columns: repeat(7, 1fr) !important;
                    }
                }
            `}</style>
        </section>
    );
}