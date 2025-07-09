import QuestionAnswer from "@/components/QuestionAnswer/QuestionAnswer";
import Welcome from "@/components/Welcome/Welcome";
import { useTranslations } from "next-intl";
import { languages } from "@/constants";

export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <Welcome
        title={t("HomePage.welcome.title")}
        text={t("HomePage.welcome.text")}
      />
      <QuestionAnswer question={t("HomePage.question")} answer={languages} />
    </div>
  );
}
