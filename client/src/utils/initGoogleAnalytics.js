export const initAnalytics = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/analytics-key`);
        const data = await res.json();

        if (window.gtag) {
            window.gtag('js', new Date());
            window.gtag('config', data.id);
        } else {
            console.warn('gtag not initialized');
        }
    } catch (error) {
        console.error('Error loading GA key:', error);
    }
};
