"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import NewsCard from "./NewsCard";
import { MOCK_NEWS } from "@/data/mockNews";
import { Carousel, Typography, Button, Space } from "antd";
import styles from "@/styles/News.module.css";

const { Title } = Typography;

const NewsSection: React.FC = () => {
    const t = useTranslations('News');
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.2 });

    const carouselRef = React.useRef<any>(null);

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    const fadeInScale = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }
    };

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
        <section id="news" className={styles.section} ref={ref}>
            <div className={styles.container}>

                {/* Header */}
                <motion.div 
                    className={styles.header}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
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
                </motion.div>

                {/* News Carousel */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInScale}
                >
                    <Carousel ref={carouselRef} {...carouselSettings} draggable className={styles.carousel}>
                        {MOCK_NEWS.map((news) => (
                            <div key={news.id} className={styles.carouselItem}>
                                <NewsCard news={news} />
                            </div>
                        ))}
                    </Carousel>
                </motion.div>

            </div>
        </section>
    );
};

export default NewsSection;
