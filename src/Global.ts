export function isMobile(): boolean {
    const ua = navigator.userAgent.toLowerCase();

    // Modern mobile indicators
    const mobileRegex = /android|iphone|ipad|ipod|mobile|blackberry|bb10|mini|touch|tablet/;

    const isMobileUA = mobileRegex.test(ua);
    const isSmallScreen = window.matchMedia('(max-width: 767px)').matches;

    return isMobileUA || isSmallScreen;
}

export const BACKGROUND_COLOR: number = 0xAFAFAF;