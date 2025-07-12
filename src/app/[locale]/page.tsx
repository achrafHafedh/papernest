import QuestionAnswer from "@/components/QuestionAnswer/QuestionAnswer";
import Welcome from "@/components/Welcome/Welcome";
import { useTranslations } from "next-intl";
import { languages } from "@/constants";

export default function HomePage() {
  const t = useTranslations();
  return (
    <div className="container max-w-2xl mx-auto py-16 px-4">
      <Welcome
        title={t("homePage.welcome.title")}
        text={t("homePage.welcome.text")}
      />
      <QuestionAnswer question={t("homePage.question")} answer={languages} />
    </div>
  );
}
