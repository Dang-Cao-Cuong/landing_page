"use client";

import { Section } from "./Section";
import { Carousel, Card } from "antd";
import { CheckCircle2, Zap } from "lucide-react";
import { useTranslations } from 'next-intl';

export function Vision() {
    const t = useTranslations('Vision');

    const slides = [
        "/work_1.jpg",
        "/work_2.jpg",
        "/work_3.jpg"
    ];

    // MÀU MỚI TỪ ẢNH: #004094
    const BRAND_COLOR = "#004094";
    const BRAND_COLOR_DARK = "#003070"; // Phiên bản đậm hơn chút cho khung chứa

    return (
        // THAY ĐỔI 1: Áp dụng màu nền mới #004094 cho toàn bộ Section
        <section id="vision" className="relative py-20 md:py-32 bg-[#004094] overflow-hidden">

            {/* Hiệu ứng nền decorative: Điều chỉnh màu gradient cho hợp với nền xanh mới */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                Future Ready
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                {t.rich('title', {
                                    // Accent color giờ dùng màu trắng hoặc xanh rất sáng để nổi trên nền xanh đậm
                                    accent: (chunks) => <span className="text-blue-200 drop-shadow-lg">{chunks}</span>
                                })}
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <p className="text-blue-100/90 text-lg leading-relaxed font-light">
                                {t('desc1')}
                            </p>
                            <p className="text-blue-100/90 text-lg leading-relaxed font-light">
                                {t.rich('desc2', {
                                    bold: (chunks) => <span className="text-white font-medium">{chunks}</span>
                                })}
                            </p>
                        </div>

                        {/* Card Glassmorphism */}
                        <Card
                            variant="borderless"
                            className="!bg-black/20 !backdrop-blur-md !border !border-white/10 !rounded-2xl !shadow-2xl shadow-black/20"
                            styles={{ body: { padding: '2rem' } }}
                        >
                            <h3 className="font-bold text-white text-xl mb-6 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                                {t('boxTitle')}
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    t('list1'),
                                    t('list2'),
                                    t('list3'),
                                    t('list4')
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-white/90">
                                        {/* Icon check màu trắng hoặc xanh sáng */}
                                        <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    <div className="relative group w-full">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-white/20 opacity-30 blur-2xl rounded-[2rem] group-hover:opacity-50 transition-opacity duration-700" />

                        {/* THAY ĐỔI 2: Khung Carousel dùng màu đậm hơn chút (#003070) để tạo chiều sâu */}
                        <div className="relative bg-[#003070] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            {/* Decorative header */}
                            <div className="h-8 bg-black/20 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>

                            <Carousel autoplay autoplaySpeed={4000} effect="fade" className="w-full">
                                {slides.map((slide, idx) => (
                                    <div key={idx} className="relative aspect-[4/3] md:aspect-video w-full group/slide">
                                        <img
                                            src={slide}
                                            alt="Smart Production"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/slide:scale-105"
                                        />
                                        {/* THAY ĐỔI 3: Gradient overlay dùng chính màu nền mới (#004094) */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#004094] via-transparent to-transparent opacity-90" />

                                        <div className="absolute inset-x-0 bottom-0 p-8 flex items-end justify-between">
                                            <div>
                                                <h3 className="font-bold text-xl text-white mb-1">{t('smartFactoryTitle')}</h3>
                                                <p className="text-sm text-blue-100/80 max-w-xs">{t('smartFactoryDesc')}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}