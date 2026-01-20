import type { ThemeConfig } from 'antd';

/**
 * Unified Color Palette
 * Single source of truth for all colors used in the application
 */
export const colors = {
    // Primary Colors
    primary: '#1e50e1',
    primaryHover: '#153bb5',
    primaryLight: '#5678e8',
    cobalt: '#1D4ED8',

    // Background Colors
    bgSurface: '#F0F4FF',
    bgCard: '#FFFFFF',
    bgSoft: '#F8FAFC',
    darkNavy: '#0B1B45',
    sectionDark: '#0B1B45',
    sectionLight: '#F0F4FF',
    footer: '#0B1B45',

    // Blue Palette
    blue50: '#EFF6FF',
    blue100: '#DBEAFE',
    blue200: '#BFDBFE',
    blue900: '#1e3a8a',
    blue950: '#172554',
    royalBlue: '#004094',
    royalBlueDark: '#003070',

    // Neutral Colors
    navy: '#0F172A',
    slate50: '#F8FAFC',
    slate100: '#F1F5F9',
    slate200: '#E2E8F0',
    slate600: '#475569',
    slate900: '#0F172A',
    zinc400: '#A1A1AA',
    zinc500: '#71717A',
    zinc600: '#52525B',
    white: '#FFFFFF',

    // Action Colors
    actionBlue: '#1e50e1',
    actionOrange: '#EA580C',

    // Semantic Colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#1D4ED8',

    // Text Colors
    textLight: '#F8FAFC',
    textDark: '#0F172A',
    textMuted: '#CBD5E1',
    textMutedDark: '#475569',
    textTitle: '#FFFFFF',
    textBody: '#E2E8F0',

    // Gradients (for reference)
    gradientStart: '#1e50e1',
    gradientEnd: '#5678e8',
} as const;

/**
 * CSS Variables Object
 * Use this to inject variables into :root or html element
 */
export const getCSSVariables = () => ({
    // Primary Colors
    '--color-primary': colors.primary,
    '--color-primary-hover': colors.primaryHover,
    '--color-primary-light': colors.primaryLight,
    '--color-cobalt': colors.cobalt,

    // Background Colors
    '--color-bg-surface': colors.bgSurface,
    '--color-bg-card': colors.bgCard,
    '--color-bg-soft': colors.bgSoft,
    '--color-dark-navy': colors.darkNavy,
    '--color-bg-section-dark': colors.sectionDark,
    '--color-bg-section-light': colors.sectionLight,
    '--color-bg-footer': colors.footer,

    // Blue Palette
    '--color-blue-50': colors.blue50,
    '--color-blue-100': colors.blue100,
    '--color-blue-200': colors.blue200,
    '--color-blue-900': colors.blue900,
    '--color-blue-950': colors.blue950,
    '--color-royal-blue': colors.royalBlue,
    '--color-royal-blue-dark': colors.royalBlueDark,

    // Neutral Colors
    '--color-navy': colors.navy,
    '--color-soft': colors.slate50,
    '--color-slate-50': colors.slate50,
    '--color-slate-100': colors.slate100,
    '--color-slate-200': colors.slate200,
    '--color-slate-600': colors.slate600,
    '--color-slate-900': colors.slate900,
    '--color-zinc-400': colors.zinc400,
    '--color-zinc-500': colors.zinc500,
    '--color-zinc-600': colors.zinc600,
    '--color-white': colors.white,

    // Action Colors
    '--color-action-blue': colors.actionBlue,
    '--color-action-orange': colors.actionOrange,

    // Semantic Colors
    '--color-success': colors.success,
    '--color-warning': colors.warning,
    '--color-error': colors.error,
    '--color-info': colors.info,

    // Text Colors
    '--color-text-light': colors.textLight,
    '--color-text-dark': colors.textDark,
    '--color-text-muted': colors.textMuted,
    '--color-text-muted-dark': colors.textMutedDark,
    '--color-text-title': colors.textTitle,
    '--color-text-body': colors.textBody,

    // Font Family
    '--font-sans': "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
});

/**
 * Ant Design Theme Configuration
 * Configures Ant Design components to match our design system
 */
const theme: ThemeConfig = {
    token: {
        fontFamily: 'var(--font-inter)',
        colorPrimary: colors.primary,
        colorInfo: colors.info,
        colorSuccess: colors.success,
        colorWarning: colors.warning,
        colorError: colors.error,
        colorTextBase: colors.textDark,

        // Global Radius for consistent "rounded" feel
        borderRadius: 8,
        borderRadiusSM: 4,
        borderRadiusLG: 12,
    },
    components: {
        Button: {
            colorPrimary: colors.primary,
            algorithm: true, // Enable automatic shade generation
            fontWeight: 600,
            controlHeightLG: 48,
            borderRadiusLG: 24, // Pill shape for large buttons
            defaultShadow: '0 2px 0 rgba(0, 0, 0, 0.02)',
            primaryShadow: `0 4px 6px -1px rgba(30, 78, 216, 0.3), 0 2px 4px -1px rgba(30, 78, 216, 0.15)`,
        },
        Input: {
            controlHeight: 44,
            controlHeightLG: 52,
            activeBorderColor: colors.primary,
            hoverBorderColor: colors.primaryLight,
            borderRadius: 8,
            borderRadiusLG: 12,
            colorBgContainer: colors.slate50,
        },
        Card: {
            borderRadiusLG: 16,
            colorBgContainer: colors.white,
            boxShadowTertiary: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        },
        Table: {
            headerBg: colors.slate50,
            headerColor: colors.cobalt,
            headerSplitColor: 'rgba(0,0,0,0)',
            headerBorderRadius: 12,
            borderColor: colors.slate200,
        },
        Modal: {
            contentBg: colors.white,
            headerBg: colors.white,
            borderRadiusLG: 16,
        },
        Drawer: {
            colorBgElevated: colors.white,
        },
        Tooltip: {
            colorBgSpotlight: colors.royalBlueDark,
        }
    },
};

export default theme;
