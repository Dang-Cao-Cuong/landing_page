"use client";

import { Section } from "./Section";
import { Carousel, Card } from "antd";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Vision() {
    const t = useTranslations('Vision');

    const slides = [
        "/work_1.jpg",
        "/work_2.jpg",
        "/work_3.jpg"
    ];

    return (
        <Section id="vision" bg="soft">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy">
                        {t.rich('title', {
                            accent: (chunks) => <span className="text-cobalt">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-blue-900/70 leading-relaxed">
                        {t('desc1')}
                    </p>
                    <p className="text-blue-900/70 leading-relaxed">
                        {t.rich('desc2', {
                            bold: (chunks) => <span className="text-navy font-medium">{chunks}</span>
                        })}
                    </p>

                    <Card variant="borderless" className="!bg-white/70 !backdrop-blur-lg !shadow-sm !border !border-white/40 !rounded-xl">
                        <h3 className="font-semibold text-navy mb-4">{t('boxTitle')}</h3>
                        <ul className="space-y-3">
                            {[
                                t('list1'),
                                t('list2'),
                                t('list3'),
                                t('list4')
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-blue-800">
                                    <CheckCircle2 className="w-5 h-5 text-cobalt shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>

                <div className="relative group w-full max-w-[90vw] md:max-w-full mx-auto overflow-hidden">
                    <div className="absolute -inset-4 bg-gradient-to-r from-soft to-cobalt/20 opacity-50 blur-2xl rounded-3xl" />
                    <div className="relative bg-white/60 backdrop-blur-md border border-white/40 shadow-xl shadow-cobalt/5 rounded-2xl overflow-hidden">
                        <Carousel autoplay autoplaySpeed={5000} effect="fade" className="w-full">
                            {slides.map((slide, idx) => (
                                <div key={idx} className="relative aspect-video w-full">
                                    <img
                                        src={slide}
                                        alt="Smart Production"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy/80 to-transparent flex items-center justify-between pointer-events-none">
                                        <div className="text-white">
                                            <h3 className="font-bold text-lg">{t('smartFactoryTitle')}</h3>
                                            <p className="text-sm text-white/80">{t('smartFactoryDesc')}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </Section>
    );
}
