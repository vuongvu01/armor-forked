export const formatNumber = (value?: number) =>
    value !== undefined ? new Intl.NumberFormat().format(value) : 0;
