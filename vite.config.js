import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

export default {
    plugins: [
        ViteWebfontDownload([
            'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap',
            // 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
            // 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap',
        ]),
    ],
    // optimizeDeps: {
    //     exclude: ['@fortawesome/fontawesome-free'],
    // },
};
