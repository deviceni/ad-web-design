"use client";
import "./globals.css";
import Image from "next/image";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S31PP2W6CG"
        ></Script>
        <script
          id="ga-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              if (localStorage.getItem('cookieConsent') === 'accepted') {
                gtag('js', new Date());
                gtag('config', 'G-S31PP2W6CG');
              }
            `,
          }}
        ></script>
      </head>
      <body className="antialiased">
        <Image
          src="/ad-web-logo.png"
          alt="AD WEB Design logo"
          width={60}
          height={60}
          className="fixed bottom-6 right-6 z-50 opacity-80 hover:opacity-100 transition-opacity"
          priority
        />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!localStorage.getItem('cookieConsent')) {
                const banner = document.createElement('div');
                banner.innerHTML = \`
                  <div style="position: fixed; bottom: 0; width: 100%; background: black; color: white; padding: 12px 20px; font-size: 14px; text-align: center; z-index: 9999;">
                    This site uses cookies to improve user experience.
                    <button style="margin-left: 10px; background: #00ffd7; border: none; padding: 6px 12px; color: black; cursor: pointer;" id="acceptCookies">Accept</button>
                  </div>
                \`;
                document.body.appendChild(banner);
                document.getElementById('acceptCookies').onclick = function () {
                  localStorage.setItem('cookieConsent', 'accepted');
                  banner.remove();
                  location.reload();
                };
              }
            `,
          }}
        ></script>
      </body>
    </html>
  );
}
