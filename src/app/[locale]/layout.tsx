import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header/Header";

import "../global.css";
import SeoHead from "../Head";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <SeoHead />
      <body>
        <NextIntlClientProvider>
          <Header />
          <main className="flex-grow">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
