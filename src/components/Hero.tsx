"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Database, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';
import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

export function Hero() {
    const t = useTranslations('Hero');

    return (
        // --- THAY ĐỔI 1: Nền Gradient đậm hơn ---
        // Thay đổi từ: bg-gradient-to-br from-[#F0F4FF] via-white to-[#E6EEFF]
        // Thành: gradient sử dụng các tông màu xanh rõ nét hơn (blue-50, blue-100)
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#DBEAFE] via-[#F5F9FF] to-[#BFDBFE] selection:bg-blue-200">

            {/* --- THAY ĐỔI 2: Tăng độ đậm (opacity) của các khối màu nền --- */}
            {/* Góc trên phải: Tăng opacity từ /10 lên /30 */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#1e50e1]/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
            {/* Góc dưới trái: Tăng opacity từ /10 lên /25 và dùng màu sáng hơn chút */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-[#5678e8]/25 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            <div className="container relative z-10 px-4 md:px-6 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Tagline Pill */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        // Làm cho pill này nổi bật hơn một chút trên nền đậm
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-cobalt/20 text-sm md:text-base text-cobalt backdrop-blur-sm shadow-sm shadow-blue-900/5"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cobalt"></span>
                        </span>
                        <span>{t('tagline')}</span>
                    </motion.div>

                    {/* --- THAY ĐỔI 3: Màu chữ tối hơn + Font size tự động tăng theo màn hình --- */}
                    <Title
                        level={1}
                        className="drop-shadow-sm"
                        style={{
                            fontSize: 'clamp(2.25rem, 6vw, 8rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.025em',
                            color: '#1e3a8a', // blue-900
                            paddingBottom: '0.5rem',
                            marginBottom: 0,
                            lineHeight: 1.1
                        }}
                    >
                        {t.rich('title', {
                            accent: (chunks) => <span style={{ color: '#172554' }}>{chunks}</span> // blue-950
                        })}
                    </Title>

                    <Paragraph
                        className="!max-w-3xl !mx-auto"
                        style={{
                            fontSize: 'clamp(1.125rem, 2.0vw, 2.5rem)',
                            color: 'rgba(23, 37, 84, 0.8)', // blue-950/80
                            lineHeight: 1.6,
                            fontWeight: 300
                        }}
                    >
                        {t.rich('subtitle', {
                            bold: (chunks) => <span style={{ color: '#172554', fontWeight: 500 }}>{chunks}</span>
                        })}
                    </Paragraph>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full sm:w-auto px-4 sm:px-0"
                    >
                        <Button
                            type="primary"
                            size="large"
                            shape="round"
                            // Tăng shadow cho nút chính
                            className="h-auto px-8 py-4 text-lg font-bold !bg-[#1e50e1] hover:!bg-[#153bb5] shadow-xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-blue-600/60 hover:scale-105 transition-all"
                        >
                            <span className="flex items-center gap-2">
                                {t('explore')}
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </Button>
                        <Button
                            size="large"
                            shape="round"
                            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                            // Làm nút phụ rõ nét hơn trên nền mới (tăng opacity bg và border)
                            className="!h-auto !px-8 !py-4 !bg-white/70 !border-cobalt/30 !text-cobalt !font-semibold !text-lg hover:!bg-white/90 !backdrop-blur-md shadow-md shadow-blue-900/5"
                        >
                            {t('contact')}
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Floating Icons/Elements - --- THAY ĐỔI 4: Làm nổi bật thẻ --- */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    // Tăng bg opacity lên /90 và border rõ hơn
                    className="hidden lg:block absolute top-20 left-10 p-4 rounded-2xl bg-white/90 border border-white/60 backdrop-blur-md shadow-xl shadow-blue-900/10"
                >
                    <Clock className="w-8 h-8 text-cobalt mb-2" />
                    <div className="text-xs text-zinc-600">Real-time</div>
                    <div className="font-bold text-blue-950">Monitoring</div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    // Tăng bg opacity lên /90 và border rõ hơn
                    className="hidden lg:block absolute bottom-40 right-10 p-4 rounded-2xl bg-white/90 border border-white/60 backdrop-blur-md shadow-xl shadow-blue-900/10"
                >
                    <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                    <div className="text-xs text-zinc-600">Increase</div>
                    <div className="font-bold text-blue-950">Efficiency</div>
                </motion.div>
            </div>

            {/* Decorative grid - Tăng nhẹ opacity */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />
        </section>
    );
}