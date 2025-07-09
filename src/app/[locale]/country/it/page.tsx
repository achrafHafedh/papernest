import { useTranslations } from "next-intl";

export default function ItalyPage() {
  const t = useTranslations();
  return <div>{t("ComparatorPage.text")}</div>;
}
