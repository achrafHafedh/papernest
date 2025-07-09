import { useTranslations } from "next-intl";

export default function EspagnePage() {
  const t = useTranslations();
  return <div>{t("ComparatorPage.text")}</div>;
}
