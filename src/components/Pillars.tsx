"use client";

import { Section } from "./Section";
import { Clock, Gauge, DollarSign, Trophy, TrendingUp } from "lucide-react";
import { Card } from "antd";
import { useTranslations } from 'next-intl';

export function Pillars() {
    const t = useTranslations('Pillars');

    const pillars = [
        { icon: Clock, title: t('time'), desc: t('timeDesc') },
        { icon: Gauge, title: t('efficiency'), desc: t('efficiencyDesc') },
        { icon: DollarSign, title: t('cost'), desc: t('costDesc') },
        { icon: Trophy, title: t('competitiveness'), desc: t('competitivenessDesc') },
        { icon: TrendingUp, title: t('revenue'), desc: t('revenueDesc') }
    ];

    return (
        <section id="pillars" className="relative py-20 md:py-32 bg-gradient-to-b from-[#F5F9FF] via-[#ECF4FF] to-[#E0E7FF] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e50e1]/10 border border-[#1e50e1]/20 text-[#1e50e1] text-xs font-bold uppercase tracking-wider mb-2">
                        {t('badge')}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0B1B45]">
                        {t('title')}
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-600 md:text-lg font-light leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e50e1]/30 to-transparent -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {pillars.map((item, index) => (
                            <div key={index} className="relative group perspective-1000">
                                <Card
                                    hoverable
                                    variant="borderless"
                                    // CHỈNH SỬA Ở ĐÂY:
                                    // 1. Loại bỏ group-hover:bg-[#1e50e1] (Không đổi nền card thành xanh đậm nữa)
                                    // 2. Thay vào đó dùng group-hover:bg-white nhưng shadow xanh đậm (shadow-blue-500/20)
                                    // 3. Viền (Border) đổi màu xanh khi hover
                                    className="h-full bg-white border border-blue-100 shadow-sm transition-all duration-500 
                                               group-hover:-translate-y-2 
                                               group-hover:border-[#1e50e1] 
                                               group-hover:shadow-xl group-hover:shadow-blue-600/10"
                                    styles={{
                                        body: {
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            padding: '2rem 1.5rem',
                                        }
                                    }}
                                >
                                    {/* Số thứ tự: Mờ đi khi hover */}
                                    <div className="absolute top-2 right-4 text-5xl font-black text-blue-50 group-hover:text-blue-100 transition-colors z-0 select-none">
                                        0{index + 1}
                                    </div>

                                    {/* ICON CONTAINER: Thay đổi nhẹ nhàng */}
                                    {/* Mặc định: Nền xanh nhạt, Icon xanh đậm */}
                                    {/* Hover: Nền xanh đậm, Icon trắng -> Đảo ngược màu tạo điểm nhấn */}
                                    <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                                                    bg-[#F0F4FF] group-hover:bg-[#1e50e1] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                                        <item.icon className="w-8 h-8 transition-colors duration-300 text-[#1e50e1] group-hover:text-white" />
                                    </div>

                                    <div className="relative z-10 space-y-3">
                                        {/* Tiêu đề: Giữ nguyên màu tối, chỉ đổi màu xanh khi hover */}
                                        <h3 className="font-bold text-xl text-[#0B1B45] group-hover:text-[#1e50e1] transition-colors">
                                            {item.title}
                                        </h3>
                                        {/* Nội dung: Giữ nguyên màu xám để dễ đọc */}
                                        <p className="text-[15px] text-slate-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}