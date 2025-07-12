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
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
