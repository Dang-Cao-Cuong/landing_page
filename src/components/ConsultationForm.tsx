"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
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
            <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-xl shadow-2xl shadow-navy/20 border border-white rounded-2xl p-6 md:p-8">
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
        <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-xl shadow-2xl shadow-navy/20 border border-white rounded-2xl p-6 md:p-8">
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{t('title')}</h3>
                <p className="text-sm text-zinc-600">{t('subtitle')}</p>
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
                    <Input placeholder={t('name')} className="!bg-soft !border-blue-100 focus:!border-cobalt hover:!border-blue-400" />
                </Form.Item>

                <Form.Item
                    name="phone"
                    rules={[{ required: true, message: t('phone') }]}
                >
                    <Input placeholder={t('phone')} type="tel" className="!bg-soft !border-blue-100 focus:!border-cobalt hover:!border-blue-400" />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[{ required: true, type: 'email', message: t('email') }]}
                >
                    <Input placeholder={t('email')} className="!bg-soft !border-blue-100 focus:!border-cobalt hover:!border-blue-400" />
                </Form.Item>

                <Form.Item
                    name="message"
                >
                    <Input.TextArea rows={3} placeholder={t('message')} className="!bg-soft !border-blue-100 focus:!border-cobalt hover:!border-blue-400 !resize-none" />
                </Form.Item>

                <Form.Item className="mb-0">
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        loading={status === "submitting"}
                        icon={status !== "submitting" && <Send className="w-4 h-4" />}
                        className="bg-cobalt hover:!bg-navy font-bold shadow-lg shadow-cobalt/20 h-10"
                    >
                        {status === "submitting" ? t('submitting') : t('submit')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
