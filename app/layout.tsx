import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const APP_NAME = "NJS App";
const APP_DESCRIPTION = "Next.js + Serwist PWA";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - NJS App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

// <Head>
//   <meta name="application-name" content={APP_NAME} />
//   <meta name="apple-mobile-web-app-capable" content="yes" />
//   <meta name="apple-mobile-web-app-status-bar-style" content="default" />
//   <meta name="apple-mobile-web-app-title" content={APP_NAME} />
//   <meta name="description" content={APP_DESCRIPTION} />
//   <meta name="format-detection" content="telephone=no" />
//   <meta name="mobile-web-app-capable" content="yes" />
//   <meta name="theme-color" content="#FFFFFF" />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
//   <link rel="manifest" href="/manifest.json" />
//   <link rel="shortcut icon" href="/favicon.ico" />
// </Head>

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
    <head>
      <style>{`
            html, body, #__next {
              height: 100%;
            }
            #__next {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
            `}</style>
    </head>
    <body>{children}</body>
    </html>
  );
}