"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    bg?: "dark" | "light" | "qwaste" | "white" | "soft" | "cobalt" | "navy" | "aurora";
}

export function Section({ id, className, children, bg = "dark" }: SectionProps) {
    const bgStyles = {
        dark: "bg-[#0B1B45] text-white",      // Dark navy
        light: "bg-[#F0F4FF] text-zinc-900",  // Light blue surface
        qwaste: "bg-[#0B1B45] text-white",    // Dark navy
        white: "bg-white text-zinc-900",
        soft: "bg-[#F8FAFC] text-zinc-900",   // Soft gray
        cobalt: "bg-[#1e50e1] text-white",    // Primary blue
        navy: "bg-[#0F172A] text-white",
        aurora: "bg-mesh-aurora text-zinc-900",
    };

    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-32 relative overflow-hidden",
                bgStyles[bg as keyof typeof bgStyles] || bgStyles.dark,
                className
            )}
        >
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
}
