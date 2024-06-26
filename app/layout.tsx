import { Suspense } from 'react';
import type { Metadata } from 'next';

import Header from '@/components/sections/header/header';
import Footer from '@/components/sections/footer/footer';
import ThemeProvider from '@/providers/theme-provider';
import OverlaysCombain from '@/components/overlays/overlays-combain';
import YMetrika from '@/components/metrika/y-metrika';
import { beautifulFont } from '@/app/fonts';

import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

export const metadata: Metadata = {
  metadataBase: new URL('https://moskow.matryoshka-studio.ru/'),
  title: {
    template: '%s | Веб студия "Матрёшка". Создание и продвижение сайтов.',
    default: 'Веб студия "Матрёшка". Создаем для вас бизнес в интернете.',
  },
  description:
    'Создание сайтов и веб приложений для бизнеса. Нужен сайт? Мы готовы реализовать ваши задумки. Настройка реклама и SEO оптимизация. ',

  icons: './_icons/icon.png',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html
        lang="ru"
        className={beautifulFont.className}
        suppressHydrationWarning
      >
        <body className="text-accent bg-accent dark:text-white">
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
            <OverlaysCombain />
          </ThemeProvider>
          <Suspense>
            <YMetrika />
          </Suspense>
        </body>
      </html>
    </SessionProvider>
  );
};

export default RootLayout;
