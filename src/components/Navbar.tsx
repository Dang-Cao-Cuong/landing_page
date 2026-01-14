"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
    const t = useTranslations('Navbar');
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/#vision", label: t('vision') },
        { href: "/#solution", label: t('solution') },
        { href: "/#impact", label: t('impact') },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/20",
                scrolled
                    ? "bg-white/60 backdrop-blur-md py-3 shadow-sm"
                    : "bg-white/60 backdrop-blur-md py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-12 h-12">
                        <Image
                            src="/LogoIIC.svg"
                            alt="QWaste Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-cobalt font-bold text-xl tracking-tight hidden sm:block">
                        QWaste <span className="text-zinc-800">Digital Factory</span>
                    </span>
                    <span className="text-cobalt font-bold text-xl tracking-tight sm:hidden">
                        QWaste
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-zinc-600 hover:text-cobalt font-medium transition-colors">
                            {link.label}
                        </Link>
                    ))}

                    <LanguageSwitcher />

                    <Link href="/#contact">
                        <Button type="primary" size="large" shape="round" className="font-bold h-auto py-2 px-6 shadow-lg shadow-cobalt/20 hover:!scale-105 transition-transform">
                            {t('getStarted')}
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <LanguageSwitcher />
                    <button
                        className="text-cobalt p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            <Drawer
                title={
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/LogoIIC.svg"
                                alt="QWaste Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-cobalt font-bold">QWaste</span>
                    </div>
                }
                placement="right"
                onClose={() => setIsOpen(false)}
                open={isOpen}
                styles={{
                    mask: { backdropFilter: 'blur(4px)' },
                    body: { padding: 0 },
                    wrapper: { width: 280 }
                }}
                className="[&_.ant-drawer-content]:!bg-white/90 [&_.ant-drawer-content]:!backdrop-blur-xl"
            >
                <div className="flex flex-col">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-zinc-600 px-6 py-4 border-b border-zinc-100 hover:text-cobalt hover:bg-blue-50/50 font-medium transition-colors text-lg"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="p-6">
                        <Link href="/#contact" onClick={() => setIsOpen(false)}>
                            <Button type="primary" block size="large" shape="round" className="font-bold h-12 text-lg shadow-lg shadow-cobalt/20">
                                {t('getStarted')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </Drawer>
        </header>
    );
}
