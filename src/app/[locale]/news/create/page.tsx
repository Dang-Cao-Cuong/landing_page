"use client";

import React, { useState } from "react";
import RichTextEditor from "@/components/Editor/RichTextEditor";
import { Button, Input, message } from "antd";

const CreateNewsPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        if (!title || !content) {
            message.error("Vui lòng nhập đầy đủ tiêu đề và nội dung!");
            return;
        }

        console.log("Submitting News:", { title, content });
        message.success("Tin tức đã được tạo thành công! (Kiểm tra Console)");
        // Here you would typically send data to backend
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-900">Tạo Tin Tức Mới</h1>

                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Tiêu đề bài viết</label>
                    <Input
                        size="large"
                        placeholder="Nhập tiêu đề..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Nội dung</label>
                    <div className="min-h-[300px]">
                        <RichTextEditor
                            value={content}
                            onChange={setContent}
                            placeholder="Nhập nội dung bài viết..."
                        />
                    </div>
                </div>

                <div className="flex justify-end pt-6 border-t">
                    <Button size="large" onClick={() => setTitle("")} className="mr-4">
                        Hủy
                    </Button>
                    <Button type="primary" size="large" onClick={handleSubmit} className="bg-[#F26522] hover:bg-orange-600">
                        Đăng Tin
                    </Button>
                </div>

                {/* Preview Section */}
                {content && (
                    <div className="mt-12 p-6 border-t-2 border-dashed border-gray-200">
                        <h3 className="text-lg font-bold text-gray-500 mb-4">Xem trước nội dung:</h3>
                        <div className="prose max-w-none ql-editor" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateNewsPage;
