"use client";

import { Check } from "lucide-react";
import { Table, Card } from "antd";
import { ConsultationForm } from "./ConsultationForm";
import { useTranslations } from 'next-intl';

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
        <section id="impact" style={{
            position: 'relative',
            paddingTop: '5rem',
            paddingBottom: '2.5rem',
            overflow: 'visible',
            background: 'linear-gradient(to bottom, var(--color-blue-100), white)'
        }}>
            {/* Noise/Grid Pattern Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("/grid-pattern.svg")',
                opacity: 0.03,
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '0 1rem',
                position: 'relative',
                zIndex: 10
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '4rem'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(1.875rem, 5vw, 2.25rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        color: 'var(--color-navy)'
                    }}>
                        {t.rich('title', {
                            accent: (chunks) => <span style={{ color: 'var(--color-cobalt)' }}>{chunks}</span>
                        })}
                    </h2>
                    <p style={{
                        color: 'var(--color-slate-600)',
                        maxWidth: '42rem',
                        margin: '0 auto'
                    }}>
                        {t('subtitle')}
                    </p>
                </div>

                {/* Desktop Table */}
                <div className="impact-table-desktop">
                    <Table
                        dataSource={data}
                        pagination={false}
                        rowKey="factor"
                        style={{
                            boxShadow: '0 20px 25px -5px rgba(30, 58, 138, 0.05), 0 10px 10px -5px rgba(30, 58, 138, 0.04)',
                            borderRadius: '1.5rem',
                            overflow: 'hidden'
                        }}
                        columns={[
                            {
                                title: t('headerFactor'),
                                dataIndex: 'factor',
                                key: 'factor',
                                className: 'impact-table-factor-cell',
                            },
                            {
                                title: t('headerDirect'),
                                dataIndex: 'direct',
                                key: 'direct',
                                className: 'impact-table-direct-cell',
                            },
                            {
                                title: t('headerImpact'),
                                key: 'impact',
                                render: (_: any, record: { impact: string }) => (
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem'
                                    }}>
                                        <div style={{
                                            width: '2rem',
                                            height: '2rem',
                                            borderRadius: '50%',
                                            background: 'var(--color-blue-100)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <Check style={{
                                                width: '1.25rem',
                                                height: '1.25rem',
                                                color: 'var(--color-cobalt)'
                                            }} />
                                        </div>
                                        <span style={{
                                            fontWeight: 700,
                                            color: 'var(--color-cobalt)',
                                            fontSize: '1.125rem'
                                        }}>{record.impact}</span>
                                    </div>
                                ),
                                className: 'impact-table-impact-cell'
                            },
                        ]}
                    />
                </div>

                {/* Mobile Cards */}
                <div className="impact-cards-mobile">
                    {data.map((row, idx) => (
                        <div key={idx} style={{
                            marginBottom: '2rem'
                        }}>
                            <Card
                                style={{
                                    borderColor: 'var(--color-blue-100)',
                                    boxShadow: '0 4px 6px -1px rgba(30, 58, 138, 0.05)',
                                    borderRadius: '1rem'
                                }}
                                styles={{ body: { padding: '1.5rem' } }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    borderBottom: '1px solid var(--color-blue-50)',
                                    paddingBottom: '1rem',
                                    marginBottom: '1rem'
                                }}>
                                    <h3 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        color: 'var(--color-navy)'
                                    }}>{row.factor}</h3>
                                    <div style={{
                                        width: '2rem',
                                        height: '2rem',
                                        borderRadius: '50%',
                                        background: 'var(--color-blue-50)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Check style={{
                                            width: '1.25rem',
                                            height: '1.25rem',
                                            color: 'var(--color-cobalt)'
                                        }} />
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}>
                                    <div>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--color-cobalt)',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                            marginBottom: '0.5rem',
                                            letterSpacing: '0.05em'
                                        }}>{t('headerDirect')}</div>
                                        <div style={{
                                            color: '#334155',
                                            fontWeight: 500
                                        }}>{row.direct}</div>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '0.75rem',
                                            color: '#16a34a',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                            marginBottom: '0.5rem',
                                            letterSpacing: '0.05em'
                                        }}>{t('headerImpact')}</div>
                                        <div style={{
                                            color: 'var(--color-cobalt)',
                                            fontWeight: 700,
                                            fontSize: '1.125rem'
                                        }}>{row.impact}</div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                <div style={{
                    marginTop: '5rem',
                    position: 'relative',
                    borderRadius: '1rem',
                    background: 'white',
                    border: '1px solid var(--color-blue-100)',
                    padding: '2rem',
                    textAlign: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 20px 25px -5px rgba(30, 80, 225, 0.05)'
                }} className="impact-cta-section">
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, var(--color-blue-50), white)'
                    }} />
                    <div style={{
                        position: 'relative',
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}>
                        <h3 style={{
                            fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
                            fontWeight: 700,
                            lineHeight: 1.25,
                            color: 'var(--color-navy)'
                        }}>
                            {t.rich('quote')}
                        </h3>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--color-slate-600)',
                            maxWidth: '42rem',
                            margin: '0 auto'
                        }}>
                            {t.rich('quoteDesc', {
                                bold: (chunks) => <span style={{ color: 'var(--color-cobalt)', fontWeight: 700 }}>{chunks}</span>
                            })}
                        </p>
                        <div id="consultation-form" style={{
                            paddingTop: '2rem',
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: '2rem',
                            alignItems: 'stretch',
                            textAlign: 'left'
                        }} className="impact-contact-grid">
                            <div className="impact-map-container">
                                <iframe
                                    src="https://maps.google.com/maps?q=Tr%C6%B0%E1%BB%9Dng%20Qu%E1%BB%91c%20t%E1%BA%BF%20Mi%E1%BB%81n%20%C4%90%C3%B4ng&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="impact-map-iframe"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '1rem',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(12px)',
                                    borderTop: '1px solid var(--color-blue-100)'
                                }}>
                                    <p style={{
                                        color: 'var(--color-navy)',
                                        fontWeight: 500,
                                        fontSize: '0.875rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        margin: 0
                                    }}>
                                        Nam Kỳ Khởi Nghĩa, Định Hoà, Thủ Dầu Một, Bình Dương
                                    </p>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%'
                            }} className="impact-form-container">
                                <ConsultationForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .impact-table-desktop {
                    display: none;
                }

                .impact-cards-mobile {
                    display: block;
                }

                @media (min-width: 768px) {
                    .impact-table-desktop {
                        display: block;
                    }

                    .impact-cards-mobile {
                        display: none;
                    }

                    .impact-cta-section {
                        padding: 3rem !important;
                    }

                    .impact-contact-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }

                    .impact-form-container {
                        justify-content: flex-end !important;
                    }
                }

                :global(.impact-table-factor-cell) {
                    font-weight: 700 !important;
                    color: var(--color-navy) !important;
                    font-size: 1.125rem !important;
                    padding: 1.5rem 2rem !important;
                }

                :global(.impact-table-direct-cell) {
                    color: var(--color-slate-600) !important;
                    font-weight: 500 !important;
                    font-size: 1.125rem !important;
                    padding: 1.5rem 2rem !important;
                }

                :global(.impact-table-impact-cell) {
                    padding: 1.5rem 2rem !important;
                }

                :global(.ant-table-thead > tr > th) {
                    background: rgba(239, 246, 255, 0.8) !important;
                    color: var(--color-cobalt) !important;
                    font-weight: 700 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.05em !important;
                }

                .impact-map-container {
                    width: 100%;
                    min-height: 400px;
                    height: 100%;
                    border-radius: 0.75rem;
                    overflow: hidden;
                    border: 1px solid var(--color-blue-100);
                    background: white;
                    position: relative;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }

                .impact-map-container:hover .impact-map-iframe {
                    filter: grayscale(0);
                }

                .impact-map-iframe {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    filter: grayscale(1);
                    transition: filter 0.5s ease;
                }
            `}</style>
        </section>
    );
}
