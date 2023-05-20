import './globals.css';

import Footer from "@/components/layout/footer";

export const metadata = {
  title: 'Mypage',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="px-4 py-8 md:w-[700px] md:mx-auto lg:w-[800px] ">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}