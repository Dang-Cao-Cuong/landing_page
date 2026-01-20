"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { startTransition } from 'react';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onSelectChange(nextLocale: string) {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale, scroll: false });
        });
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
        }}>
            <button
                onClick={() => onSelectChange('vi')}
                className="lang-button"
                style={{
                    fontSize: '0.875rem',
                    fontWeight: locale === 'vi' ? 700 : 500,
                    color: locale === 'vi' ? 'var(--color-cobalt)' : 'var(--color-zinc-500)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.25rem',
                    transition: 'color 0.3s ease'
                }}
            >
                VN
            </button>
            <span style={{ color: '#d4d4d8' }}>|</span>
            <button
                onClick={() => onSelectChange('en')}
                className="lang-button"
                style={{
                    fontSize: '0.875rem',
                    fontWeight: locale === 'en' ? 700 : 500,
                    color: locale === 'en' ? 'var(--color-cobalt)' : 'var(--color-zinc-500)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.25rem',
                    transition: 'color 0.3s ease'
                }}
            >
                EN
            </button>

            <style jsx>{`
                .lang-button:hover {
                    color: var(--color-cobalt);
                }
            `}</style>
        </div>
    );
}
