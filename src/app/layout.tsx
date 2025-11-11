import "./globals.css";
import { Dela_Gothic_One, Zen_Kaku_Gothic_New } from 'next/font/google'

const delaGothicOne = Dela_Gothic_One({
  weight: ['400']
})

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "300", "500", "700", "900"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={zenKaku.className}
    >
      <body className="h-screen w-screen bg-darkcoal text-yukibody">
        {children}
      </body>
    </html>
  );
}
