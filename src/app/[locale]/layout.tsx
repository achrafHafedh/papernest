import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header/Header";

import SeoHead from "./Head";

import "../../styles/global.css";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <SeoHead />
      <body>
        <NextIntlClientProvider>
          <Header />
          <main className="container max-w-2xl mx-auto py-16 px-4">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
