"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { NewsItem } from "@/data/mockNews";
import { Card, Typography } from "antd";
import styles from "@/styles/News.module.css";

const { Title, Text } = Typography;

interface NewsCardProps {
    news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    const formattedDate = format(new Date(news.date), "dd 'Tháng' M, yyyy", {
        locale: vi,
    });

    return (
        <Link href={`/news/${news.id}`} className={styles.cardLink}>
            <Card
                hoverable
                className={styles.card}
                cover={
                    <div className={styles.imageContainer}>
                        <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className={styles.image}
                        />
                    </div>
                }
            >
                <Text type="secondary" className={styles.dateText}>
                    {formattedDate}
                </Text>
                <Title level={5} className={styles.cardTitle}>
                    {news.title}
                </Title>
            </Card>
        </Link>
    );
};

export default NewsCard;
