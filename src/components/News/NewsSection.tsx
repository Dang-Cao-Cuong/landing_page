"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import NewsCard from "./NewsCard";
import { MOCK_NEWS } from "@/data/mockNews";
import { Carousel, Typography, Button, Space } from "antd";
import styles from "@/styles/News.module.css";

const { Title } = Typography;

const NewsSection: React.FC = () => {
    const t = useTranslations('News');

    const carouselRef = React.useRef<any>(null);

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section id="news" className={styles.section}>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <Title level={2} className={styles.title}>
                            {t('title')}
                        </Title>
                        <Link
                            href="/news"
                            className={styles.viewAllLink}
                        >
                            {t('viewAll')}
                            <span className={styles.iconWrapper}>
                                <ArrowRight size={14} />
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Controls */}
                    <Space>
                        <Button
                            type="primary"
                            className={styles.navButton}
                            icon={<ChevronLeft size={16} />}
                            onClick={() => carouselRef.current?.prev()}
                        />
                        <Button
                            type="primary"
                            className={styles.navButton}
                            icon={<ChevronRight size={16} />}
                            onClick={() => carouselRef.current?.next()}
                        />
                    </Space>
                </div>

                {/* News Carousel */}
                <Carousel ref={carouselRef} {...carouselSettings} draggable className={styles.carousel}>
                    {MOCK_NEWS.map((news) => (
                        <div key={news.id} className={styles.carouselItem}>
                            <NewsCard news={news} />
                        </div>
                    ))}
                </Carousel>

            </div>
        </section>
    );
};

export default NewsSection;
