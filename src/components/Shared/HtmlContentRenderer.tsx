"use client";

import React from "react";
import { Typography } from "antd";

interface HtmlContentRendererProps {
    htmlContent: string;
    className?: string;
    style?: React.CSSProperties;
}

/**
 * A reusable component to render safe HTML content.
 * Acts as the "converter" from backend HTML string to frontend display.
 */
const HtmlContentRenderer: React.FC<HtmlContentRendererProps> = ({
    htmlContent,
    className,
    style
}) => {
    // Shared styles for rich text content
    const baseStyles: React.CSSProperties = {
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#334155",
        ...style
    };

    return (
        <div
            className={`rich-text-content ${className || ''}`}
            style={baseStyles}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
};

export default HtmlContentRenderer;
