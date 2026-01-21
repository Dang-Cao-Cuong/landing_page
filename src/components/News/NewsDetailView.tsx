"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { MoveLeft } from "lucide-react";
import { Typography } from "antd";
import { NewsItem } from "@/data/mockNews";
import HtmlContentRenderer from "@/components/Shared/HtmlContentRenderer";

const { Title, Text } = Typography;

interface NewsDetailViewProps {
    newsItem: NewsItem;
}

const NewsDetailView: React.FC<NewsDetailViewProps> = ({ newsItem }) => {
    const formattedDate = format(new Date(newsItem.date), "dd 'Tháng' M, yyyy", {
        locale: vi,
    });

    return (
        <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
            {/* Hero Section */}
            <div style={{ position: "relative", width: "100%", height: "400px", backgroundColor: "#0F172A" }}>
                <Image
                    src={newsItem.image}
                    alt={newsItem.title}
                    fill
                    style={{ objectFit: "cover", opacity: 0.6 }}
                    priority
                />

                {/* Overlay Content */}
                <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "48px 16px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <Link href="/#news" style={{ display: "inline-flex", alignItems: "center", color: "rgba(255,255,255,0.8)", marginBottom: "24px", textDecoration: "none", fontSize: "16px" }}>
                            <MoveLeft style={{ marginRight: "8px" }} size={20} /> Quay lại trang chủ
                        </Link>
                        <Title level={1} style={{ color: "white", margin: "0 0 16px 0", fontSize: "36px", lineHeight: 1.2 }}>
                            {newsItem.title}
                        </Title>
                        <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px" }}>
                            {formattedDate}
                        </Text>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <article style={{ maxWidth: "800px", margin: "0 auto", padding: "64px 16px" }}>
                <div
                    style={{
                        fontSize: "18px",
                        lineHeight: "1.8",
                        color: "#334155"
                    }}
                    dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />
            </article>

            {/* Footer Navigation */}
            <div style={{ backgroundColor: "#F8FAFC", padding: "48px 0", marginTop: "48px", borderTop: "1px solid #E2E8F0" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
                    <Link href="/news" style={{ color: "#1e50e1", fontWeight: 600, fontSize: "16px" }}>
                        Xem tất cả tin tức khác
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailView;
