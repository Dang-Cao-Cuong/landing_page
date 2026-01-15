import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
        fontFamily: 'var(--font-inter)',
        colorPrimary: '#1D4ED8', // Cobalt
        colorInfo: '#1D4ED8',
        colorSuccess: '#10B981', // Emerald-500
        colorWarning: '#F59E0B', // Amber-500
        colorError: '#EF4444', // Red-500
        colorTextBase: '#0F172A', // Navy

        // Global Radius for consistent "rounded" feel
        borderRadius: 8,
        borderRadiusSM: 4,
        borderRadiusLG: 12,
    },
    components: {
        Button: {
            colorPrimary: '#1D4ED8',
            algorithm: true, // Enable automatic shade generation
            fontWeight: 600,
            controlHeightLG: 48,
            borderRadiusLG: 24, // Pill shape for large buttons
            defaultShadow: '0 2px 0 rgba(0, 0, 0, 0.02)',
            primaryShadow: '0 4px 6px -1px rgba(29, 78, 216, 0.3), 0 2px 4px -1px rgba(29, 78, 216, 0.15)', // Tailwind-like shadow
        },
        Input: {
            controlHeight: 44,
            controlHeightLG: 52,
            activeBorderColor: '#1D4ED8',
            hoverBorderColor: '#2563EB',
            borderRadius: 8,
            borderRadiusLG: 12,
            colorBgContainer: '#F8FAFC', // Slate-50 / Soft
        },
        Card: {
            borderRadiusLG: 16,
            colorBgContainer: '#FFFFFF',
            boxShadowTertiary: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02)', // shadow-md
        },
        Table: {
            headerBg: '#F8FAFC', // Slate-50
            headerColor: '#1D4ED8', // Cobalt
            headerSplitColor: 'rgba(0,0,0,0)', // Remove divider
            headerBorderRadius: 12,
            borderColor: '#E2E8F0', // Slate-200
        },
        Modal: {
            contentBg: '#FFFFFF',
            headerBg: '#FFFFFF',
            borderRadiusLG: 16,
        },
        Drawer: {
            colorBgElevated: '#FFFFFF',
        }
    },
};

export default theme;
