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
        // THAY ĐỔI 1: Áp dụng màu nền #004094 (Royal Blue) đồng bộ với Vision
        <section id="solution" className="relative py-20 md:py-32 bg-[#004094] overflow-hidden">

            {/* Họa tiết nền: Điều chỉnh sang tông trắng mờ để hợp với nền xanh mới */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 space-y-20">
                {/* Goals & Framework Grid */}
                <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Left Column: Goals */}
                    <div>
                        {/* Tagline: Chuyển sang style trắng/trong suốt giống Vision */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            {t('approachBadge')}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                            {t('goalsTitle')}
                        </h2>
                        <div className="space-y-4">
                            {goals.map((goal, idx) => (
                                // Goal Cards: Glassmorphism trên nền xanh
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-300">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-blue-200" />
                                    </div>
                                    <span className="text-white/90 font-medium leading-relaxed">{goal}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Framework Card */}
                    {/* THAY ĐỔI 2: Sử dụng màu nền đậm #003070 cho khối này (giống khung Carousel bên Vision) */}
                    <div className="relative h-full min-h-[450px] bg-[#003070] rounded-3xl overflow-hidden p-8 lg:p-10 shadow-2xl border border-white/10 flex flex-col justify-center group">
                        {/* Gradient overlay nhẹ */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

                        <h3 className="text-2xl font-bold mb-8 relative z-10 text-white flex items-center gap-3">
                            {t('frameworkTitle')}
                            <div className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                        </h3>

                        <div className="space-y-8 relative z-10">
                            {/* Các dòng text bên trong dùng màu trắng và blue-200 */}
                            <dl className="space-y-2 border-l-2 border-white/20 pl-6 transition-all group-hover:border-white/50">
                                <dt className="text-blue-200 font-semibold text-sm uppercase tracking-wider">Connectivity</dt>
                                <dd className="text-white text-lg font-medium">OPC UA / MQTT / Modbus TCP</dd>
                            </dl>
                            <dl className="space-y-2 border-l-2 border-white/20 pl-6 transition-all group-hover:border-white/50">
                                <dt className="text-blue-200 font-semibold text-sm uppercase tracking-wider">Data Hub</dt>
                                <dd className="text-white text-lg font-medium">SQL Server / InfluxDB</dd>
                            </dl>
                            <dl className="space-y-2 border-l-2 border-white/20 pl-6 transition-all group-hover:border-white/50">
                                <dt className="text-blue-200 font-semibold text-sm uppercase tracking-wider">Platform</dt>
                                <dd className="text-white text-lg font-medium">Real-time Digital Twin</dd>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Modules Grid */}
                <div className="space-y-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            {t('modulesTitle')}
                        </h2>
                        <p className="text-blue-100/80 max-w-2xl mx-auto">
                            {t('modulesDesc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {modules.map((mod, idx) => (
                            <Tooltip
                                key={idx}
                                title={mod.desc}
                                color="#003070" // Tooltip background đồng bộ với màu khung đậm
                                trigger={["hover", "click"]}
                                // Giữ nguyên overlayInnerStyle như yêu cầu
                                overlayInnerStyle={{ padding: '0.75rem', fontSize: '0.85rem' }}
                            >
                                {/* Module Card: Glassmorphism */}
                                <div className="relative bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/20 hover:border-white/30 flex flex-col items-center gap-4 hover:-translate-y-2 transition-all duration-300 group cursor-pointer h-full justify-center min-h-[140px]">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-200 group-hover:text-white group-hover:bg-white/20 transition-all">
                                        <mod.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-blue-100 text-center leading-tight group-hover:text-white">
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