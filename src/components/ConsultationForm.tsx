"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Form, Input, Button, Result, message } from 'antd';
import styles from '../styles/ConsultationForm.module.css';

export function ConsultationForm() {
    const t = useTranslations('Form');
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        setStatus("submitting");

        try {
            const response = await fetch('/api/consultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            setStatus("success");
            message.success(t('success'));
        } catch (error) {
            console.error('Error submitting form:', error);
            message.error(t('error'));
            setStatus("idle");
        }
    };

    const handleReset = () => {
        setStatus("idle");
        form.resetFields();
    };

    if (status === "success") {
        return (
            <div className={styles.formContainer}>
                <Result
                    status="success"
                    title={<span className={styles.successTitle}>{t('success')}</span>}
                    subTitle={t('subtitle')}
                    extra={[
                        <Button type="primary" key="console" onClick={handleReset} className={styles.submitButton}>
                            {t('submit')}
                        </Button>,
                    ]}
                />
            </div>
        )
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.header}>
                <h3 className={styles.title}>{t('title')}</h3>
                <p className={styles.subtitle}>{t('subtitle')}</p>
            </div>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
                requiredMark={false}
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: t('name') }]}
                >
                    <Input placeholder={t('name')} className={styles.input} />
                </Form.Item>

                <Form.Item
                    name="phone"
                    rules={[{ required: true, message: t('phone') }]}
                >
                    <Input placeholder={t('phone')} type="tel" className={styles.input} />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[{ required: true, type: 'email', message: t('email') }]}
                >
                    <Input placeholder={t('email')} className={styles.input} />
                </Form.Item>

                <Form.Item
                    name="message"
                >
                    <Input.TextArea rows={3} placeholder={t('message')} className={styles.textarea} />
                </Form.Item>

                <Form.Item style={{ marginBottom: 0 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={status === "submitting"}
                        icon={status !== "submitting" && <Send style={{ width: '1rem', height: '1rem' }} />}
                        className={styles.submitButton}
                    >
                        {status === "submitting" ? t('submitting') : t('submit')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
