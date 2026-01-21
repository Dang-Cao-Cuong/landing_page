import React from "react";
import NewsSection from "@/components/News/NewsSection";

const NewsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero / Header specific to News Page could go here */}
            <div className="bg-white shadow">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-800">Tin tức mới nhất</h1>
                </div>
            </div>

            <NewsSection />

            <div className="container mx-auto px-4 py-8 text-center text-gray-500">
                <p>Hiển thị danh sách tin tức mẫu.</p>
            </div>
        </div>
    );
};

export default NewsPage;
