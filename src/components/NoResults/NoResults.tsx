import React from "react";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "use-intl";

export default function NoResults() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <FaceFrownIcon className="h-12 w-12 text-indigo-400 mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">
        {t("offersPage.noResult.title")}
      </h2>
      <p className="text-gray-600 mt-2 max-w-md">
        {t("offersPage.noResult.text")}
      </p>
    </div>
  );
}
