"use client";

import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

// Dynamic import to prevent SSR issues with document/window
const ReactQuill = dynamic(
    () => import("react-quill"),
    { ssr: false, loading: () => <div className="h-64 bg-gray-100 flex items-center justify-center">Loading editor...</div> }
);

interface RichTextEditorProps {
    value: string;
    onChange: (content: string) => void;
    placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
    const modules = useMemo(() => ({
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
        ],
    }), []);

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "image",
    ];

    return (
        <div className="bg-white text-black rich-text-editor-container">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                placeholder={placeholder}
                className="h-64 mb-12"
            />
            <style jsx global>{`
        .ql-container {
            font-size: 16px;
        }
        .rich-text-editor-container .ql-editor {
            min-height: 200px;
        }
      `}</style>
        </div>
    );
};

export default RichTextEditor;
