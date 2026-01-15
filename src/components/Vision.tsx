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
        <Section id="vision" bg="white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                        {t.rich('title', {
                            accent: (chunks) => <span className="text-[#1e50e1]">{chunks}</span>
                        })}
                    </h2>
                    <p className="text-[#475569] leading-relaxed">
                        {t('desc1')}\n                    </p>
                    <p className="text-[#475569] leading-relaxed">
                        {t.rich('desc2', {
                            bold: (chunks) => <span className="text-[#0F172A] font-medium">{chunks}</span>
                        })}
                    </p>

                    <Card variant="borderless" className="!bg-gray-50 !shadow-md !border !border-gray-200 !rounded-xl">
                        <h3 className="font-semibold text-[#0F172A] mb-4">{t('boxTitle')}</h3>
                        <ul className="space-y-3">
                            {[
                                t('list1'),
                                t('list2'),
                                t('list3'),
                                t('list4')
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-[#475569]">
                                    <CheckCircle2 className="w-5 h-5 text-[#1e50e1] shrink-0" />
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
