import { useTranslations } from "next-intl";

export default function FrenshPage() {
  const t = useTranslations();
  return <div>{t("ComparatorPage.text")}</div>;
}
