// // src/lib/getClientInfo.ts
// import UAParser from 'ua-parser-js';

// export const getClientInfo = () => {
//     const parser = new UAParser();
//     const result = parser.getResult();

//     return {
//         device: result.device.type || 'desktop',
//         browser: result.browser.name + ' ' + result.browser.version,
//         os: result.os.name + ' ' + result.os.version,
//         platform: navigator.platform,
//         language: navigator.language,
//         screen: `${window.screen.width}x${window.screen.height}`,
//         userAgent: navigator.userAgent,
//         username: getUsernameFromCookie() || 'Anonymous'
//     };
// };

// const getUsernameFromCookie = (): string | null => {
//     const match = document.cookie.match(/(^|;) ?username=([^;]*)(;|$)/);
//     return match ? decodeURIComponent(match[2]) : null;
// };
