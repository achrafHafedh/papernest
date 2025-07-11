import QuestionAnswer from "@/components/QuestionAnswer/QuestionAnswer";
import Welcome from "@/components/Welcome/Welcome";
import { useTranslations } from "next-intl";
import { languages } from "@/constants";

export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <Welcome
        title={t("homePage.welcome.title")}
        text={t("homePage.welcome.text")}
      />
      <QuestionAnswer question={t("homePage.question")} answer={languages} />
    </div>
  );
}
