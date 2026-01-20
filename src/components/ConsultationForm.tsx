"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Form, Input, Button, Result, message } from 'antd';

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
            <div className="consultation-form-container">
                <Result
                    status="success"
                    title={t('success')}
                    subTitle={t('subtitle')}
                    extra={[
                        <Button type="primary" key="console" onClick={handleReset}>
                            {t('submit')}
                        </Button>,
                    ]}
                />
            </div>
        )
    }

    return (
        <div className="consultation-form-container">
            <div style={{
                textAlign: 'center',
                marginBottom: '1.5rem'
            }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#18181b',
                    marginBottom: '0.5rem'
                }}>{t('title')}</h3>
                <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-zinc-600)'
                }}>{t('subtitle')}</p>
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
                    <Input placeholder={t('name')} className="form-input" />
                </Form.Item>

                <Form.Item
                    name="phone"
                    rules={[{ required: true, message: t('phone') }]}
                >
                    <Input placeholder={t('phone')} type="tel" className="form-input" />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[{ required: true, type: 'email', message: t('email') }]}
                >
                    <Input placeholder={t('email')} className="form-input" />
                </Form.Item>

                <Form.Item
                    name="message"
                >
                    <Input.TextArea rows={3} placeholder={t('message')} className="form-input form-textarea" />
                </Form.Item>

                <Form.Item style={{ marginBottom: 0 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={status === "submitting"}
                        icon={status !== "submitting" && <Send style={{ width: '1rem', height: '1rem' }} />}
                        className="form-submit-button"
                    >
                        {status === "submitting" ? t('submitting') : t('submit')}
                    </Button>
                </Form.Item>
            </Form>

            <style jsx global>{`
                .consultation-form-container {
                    width: 100%;
                    max-width: 28rem;
                    margin: 0 auto;
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(40px);
                    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.2);
                    border: 1px solid white;
                    border-radius: 1rem;
                    padding: 1.5rem;
                }

                @media (min-width: 768px) {
                    .consultation-form-container {
                        padding: 2rem;
                    }
                }

                .form-input {
                    background: var(--color-soft) !important;
                    border-color: var(--color-blue-100) !important;
                }

                .form-input:hover {
                    border-color: #60a5fa !important;
                }

                .form-input:focus {
                    border-color: var(--color-cobalt) !important;
                }

                .form-textarea {
                    resize: none !important;
                }

                .form-submit-button {
                    background: var(--color-cobalt) !important;
                    font-weight: 700 !important;
                    box-shadow: 0 10px 15px -3px rgba(30, 80, 225, 0.2) !important;
                    height: 2.5rem !important;
                }

                .form-submit-button:hover {
                    background: var(--color-navy) !important;
                }
            `}</style>
        </div>
    );
}
