import "./globals.css";
import { Dela_Gothic_One, Zen_Kaku_Gothic_New } from 'next/font/google'
import Link from "next/link";

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
      <body className="bg-darkcoal text-yukiwhite">
        <nav className="flex flex-row content-center justify-end h-16">
          <Link className="basis-32" href="/">stuart yukinaga</Link>
          <Link className="basis-32" href="/about">About</Link>
          <Link className="basis-32" href="/works">Works</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
