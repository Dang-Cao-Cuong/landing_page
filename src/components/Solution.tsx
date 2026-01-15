"use client";

import { Section } from "./Section";
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
        <Section id="solution" bg="white">
            <div className="space-y-16">
                {/* Goals */}
                <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cobalt">
                            {t('goalsTitle')}
                        </h2>
                        <div className="space-y-4">
                            {goals.map((goal, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-blue-100 hover:border-cobalt/50 transition-colors shadow-sm">
                                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-cobalt" />
                                    </div>
                                    <span className="text-navy font-medium">{goal}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] bg-[#0B1B45] rounded-2xl overflow-hidden p-8 shadow-xl flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                        <h3 className="text-2xl font-bold mb-6 relative z-10 text-white">{t('frameworkTitle')}</h3>
                        <div className="space-y-6 relative z-10">
                            <dl className="space-y-2 border-l-2 border-[#1e50e1] pl-4">
                                <dt className="text-white/80 font-semibold text-sm">Connectivity</dt>
                                <dd className="text-white/90">OPC UA / MQTT / Modbus TCP</dd>
                            </dl>
                            <dl className="space-y-2 border-l-2 border-[#1e50e1] pl-4">
                                <dt className="text-white/80 font-semibold text-sm">Data Hub</dt>
                                <dd className="text-white/90">SQL Server / InfluxDB</dd>
                            </dl>
                            <dl className="space-y-2 border-l-2 border-[#1e50e1] pl-4">
                                <dt className="text-white/80 font-semibold text-sm">Platform</dt>
                                <dd className="text-white/90">Real-time Digital Twin</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Modules Grid */}
                <div className="text-center space-y-8">
                    <h2 className="text-3xl font-bold text-cobalt">
                        {t('modulesTitle')}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {modules.map((mod, idx) => (
                            <Tooltip
                                key={idx}
                                title={mod.desc}
                                color="#0F172A"
                                trigger={["hover", "click"]}
                                overlayInnerStyle={{ padding: '0.75rem', fontSize: '0.75rem' }}
                            >
                                <div className="relative bg-white p-4 rounded-xl shadow-md border-2 border-transparent hover:border-[#1e50e1] hover:bg-blue-50 flex flex-col items-center gap-3 hover:-translate-y-1 transition-all duration-300 group cursor-help hover:shadow-xl">
                                    <div className="w-10 h-10 rounded-full bg-[#1e50e1]/10 flex items-center justify-center text-[#1e50e1] group-hover:scale-110 transition-transform shrink-0">
                                        <mod.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-semibold text-navy text-center leading-tight">{mod.name}</span>
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
