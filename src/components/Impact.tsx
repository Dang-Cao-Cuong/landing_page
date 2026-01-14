"use client";

import { Section } from "./Section";
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
        <section id="impact" className="relative pt-20 pb-0 md:pt-32 md:pb-0 overflow-visible bg-gradient-to-b from-blue-100 to-white">
            {/* Noise/Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                        {t.rich('title', {
                            accent: (chunks) => <span className="text-cobalt">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block">
                    <Table
                        dataSource={data}
                        pagination={false}
                        rowKey="factor"
                        className="shadow-xl shadow-blue-900/5 rounded-3xl overflow-hidden [&_.ant-table-thead_th]:!bg-blue-50/80 [&_.ant-table-thead_th]:!text-cobalt [&_.ant-table-thead_th]:!font-bold [&_.ant-table-thead_th]:uppercase [&_.ant-table-thead_th]:tracking-widest"
                        columns={[
                            {
                                title: t('headerFactor'),
                                dataIndex: 'factor',
                                key: 'factor',
                                className: 'font-bold text-navy text-lg py-6 px-8',
                            },
                            {
                                title: t('headerDirect'),
                                dataIndex: 'direct',
                                key: 'direct',
                                className: 'text-slate-600 font-medium text-lg py-6 px-8',
                            },
                            {
                                title: t('headerImpact'),
                                key: 'impact',
                                render: (_: any, record: { impact: string }) => (
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                            <Check className="w-5 h-5 text-cobalt" />
                                        </div>
                                        <span className="font-bold text-cobalt text-lg">{record.impact}</span>
                                    </div>
                                ),
                                className: 'py-6 px-8'
                            },
                        ]}
                    />
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden">
                    {data.map((row, idx) => (
                        <div key={idx} className="mb-8 last:mb-0">
                            <Card className="border-blue-100 shadow-md shadow-blue-900/5 !rounded-2xl" styles={{ body: { padding: '1.5rem' } }}>
                                <div className="flex items-center justify-between border-b border-blue-50 pb-4 mb-4">
                                    <h3 className="text-xl font-bold text-navy">{row.factor}</h3>
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                        <Check className="w-5 h-5 text-cobalt" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs text-cobalt uppercase font-bold mb-2 tracking-wider">{t('headerDirect')}</div>
                                        <div className="text-slate-700 font-medium">{row.direct}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-green-600 uppercase font-bold mb-2 tracking-wider">{t('headerImpact')}</div>
                                        <div className="text-cobalt font-bold text-lg">{row.impact}</div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>


                <div className="mt-20 relative rounded-2xl bg-white border border-blue-100 p-8 md:p-12 text-center overflow-hidden shadow-xl shadow-cobalt/5">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight text-navy">
                            {t.rich('quote')}
                        </h3>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {t.rich('quoteDesc', {
                                bold: (chunks) => <span className="text-cobalt font-bold">{chunks}</span>
                            })}
                        </p>
                        <div id="consultation-form" className="pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch text-left">
                            <div className="w-full min-h-[400px] h-full rounded-xl overflow-hidden border border-blue-100 bg-white relative group shadow-lg">
                                <iframe
                                    src="https://maps.google.com/maps?q=Tr%C6%B0%E1%BB%9Dng%20Qu%E1%BB%91c%20t%E1%BA%BF%20Mi%E1%BB%81n%20%C4%90%C3%B4ng&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-blue-100">
                                    <p className="text-navy font-medium text-sm flex items-center gap-2">
                                        Nam Kỳ Khởi Nghĩa, Định Hoà, Thủ Dầu Một, Bình Dương
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center lg:justify-end w-full">
                                <ConsultationForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
