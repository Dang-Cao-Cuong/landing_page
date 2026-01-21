import React from "react";
import { notFound } from "next/navigation";
import { MOCK_NEWS } from "@/data/mockNews";
import NewsDetailView from "@/components/News/NewsDetailView";

// In Next.js App Router, dynamic pages receive params as a promise
interface PageProps {
    params: Promise<{ id: string }>;
}

const NewsDetailPage = async ({ params }: PageProps) => {
    const { id } = await params;
    const newsItem = MOCK_NEWS.find((item) => item.id === id);

    if (!newsItem) {
        notFound();
    }

    return <NewsDetailView newsItem={newsItem} />;
};

export default NewsDetailPage;
