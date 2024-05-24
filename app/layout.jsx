import '@/styles/globals.css';
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
    metadataBase: new URL('https://fof.london/'),
    alternates: {
        canonical: '/',
    },
    title: {
        default: 'Home | Falcons of Fitzrovia',
        template: '%s | Falcons of Fitzrovia',
    },
    description: 'Welcome to Falcons of Fitzrovia\'s Official Website',
    icons: {
        icon: [
            {
                url: '/assets/icons/favicon-32x32.png',
                type: 'image/png',
                sizes: '32x32',
            },
            {
                url: '/assets/icons/favicon-16x16.png',
                type: 'image/png',
                sizes: '16x16',
            },
        ],
        apple: {
            url: '/assets/icons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        },
        other: [
            {
                rel: 'android-chrome-192x192.png',
                url: '/assets/icons/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',

            },
            {
                rel: 'android-chrome-512x512.png',
                url: '/assets/icons/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                rel: 'mask-icon',
                url: '/assets/icons/safari-pinned-tab.svg',
                color: '#5bbad5',
            }
        ]
    },
    manifest: '/assets/icons/site.webmanifest',
    ms: {
        tileColor: '#00aba9',
        url: '/assets/icons/mstile-150x150.png',
    },
    twitter: {
        card: 'summary_large_image',
    },
    referrer: 'origin-when-cross-origin',
    keywords: [
        "Falcons of Fitzrovia",
        "Tours in London",
        "professional photography",
        "eco-friendly bike tours",
        "eco-friendly",
        "bike tours",
        "London",
        "photography",
        "London tours",
        "London photography",
        "London bike tours",
        "bike tours in London",
        "photography in London",
        "professional photography in London",
        "professional photography tours",
        "professional photography tours in London",
    ],
    openGraph: {
        url: 'https://fof.london/',
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
}

const layout = (props) => {

    const {children} = props;

    return (
        <html lang="en">
        <body>
            <Navbar/>
            {children}
            <Footer/>
        </body>
        </html>
    );

};


export default layout;