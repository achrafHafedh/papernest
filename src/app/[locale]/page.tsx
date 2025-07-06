import { useTranslations } from "next-intl";
// import { Link } from "@/lib/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1 className="text-3xl">{t("title")}</h1>
    </div>
  );
}
