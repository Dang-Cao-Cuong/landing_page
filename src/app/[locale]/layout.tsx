import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Fixed import path
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import AntdRegistry from '@/lib/AntdRegistry';
import { ConfigProvider } from 'antd';
import theme, { getCSSVariables } from '@/theme/themeConfig';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QWaste Digital Factory",
  description: "Digital Manufacturing Solution",
  icons: {
    icon: "/iic4.0.svg",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} style={getCSSVariables() as React.CSSProperties}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <AntdRegistry>
            <ConfigProvider theme={theme}>
              <Navbar />
              {children}
              <Footer />
              <ScrollToTop />
            </ConfigProvider>
          </AntdRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
