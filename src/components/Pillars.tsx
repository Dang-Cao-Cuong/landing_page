"use client";

import { Section } from "./Section";
import { ArrowRight, Clock, Gauge, DollarSign, Trophy, TrendingUp } from "lucide-react";
import { Card } from "antd";
import { useTranslations } from 'next-intl';

export function Pillars() {
    const t = useTranslations('Pillars');

    const pillars = [
        {
            icon: Clock,
            title: t('time'),
            desc: t('timeDesc'),
            color: "text-blue-600"
        },
        {
            icon: Gauge,
            title: t('efficiency'),
            desc: t('efficiencyDesc'),
            color: "text-green-600"
        },
        {
            icon: DollarSign,
            title: t('cost'),
            desc: t('costDesc'),
            color: "text-amber-500"
        },
        {
            icon: Trophy,
            title: t('competitiveness'),
            desc: t('competitivenessDesc'),
            color: "text-purple-600"
        },
        {
            icon: TrendingUp,
            title: t('revenue'),
            desc: t('revenueDesc'),
            color: "text-rose-500"
        }
    ];

    return (
        <Section id="pillars" className="!bg-[#F0F4FF]" bg="light">
            <div className="text-center mb-16 space-y-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">
                    {t('title')}
                </h2>
                <p className="max-w-2xl mx-auto text-[#475569] md:text-lg">
                    {t('subtitle')}
                </p>
            </div>

            <div className="relative z-10">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1e50e1]/20 to-transparent -translate-y-1/2" />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {pillars.map((item, index) => (
                        <div key={index} className="relative group">
                            <Card
                                hoverable
                                className="h-full border border-blue-100 bg-white shadow-md transition-all duration-300 overflow-hidden group-hover:!bg-[#1e50e1] group-hover:!border-[#1e50e1] group-hover:shadow-xl group-hover:shadow-[#1e50e1]/30"
                                styles={{ body: { height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1.5rem', gap: '1rem' } }}
                            >
                                <div className="w-12 h-12 rounded-full bg-[#1e50e1] flex items-center justify-center group-hover:bg-white transition-colors">
                                    <item.icon className="w-6 h-6 text-white group-hover:text-[#1e50e1] transition-colors" />
                                </div>
                                <h3 className="font-bold text-xl text-[#0F172A] group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-sm text-zinc-600 group-hover:text-white/90 transition-colors">{item.desc}</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
