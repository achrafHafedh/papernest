import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import { Offer, Provider } from "../../types";

export default function OfferCard({
  offer,
  provider,
}: {
  offer: Offer;
  provider: Provider;
}) {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div className="bg-white rounded-2xl px-6 py-3 shadow-xl border border-gray-200 cursor-pointer mb-5 transition-transform duration-300 hover:scale-105">
      <div className="flex items-center pb-2 border-b border-gray-200 justify-between mb-4">
        <div className="flex items-center">
          <span className="border p-3 mr-2 bg-indigo-400 rounded-md text-white">
            {t("offersPage.offer.logo")}
          </span>
          <h2 className="text-xl font-semibold text-indigo-700">
            {offer.name}
          </h2>
        </div>
        <span className="bg-indigo-400 text-center text-white text-xs font-semibold px-3 py-1 rounded-md">
          {provider.display_name}
        </span>
      </div>

      <div className="text-center lg:flex items-center text-sm justify-between mb-4">
        <div className="text-gray-900 font-bold">
          <span className="text-3xl">{offer.subscription_cost}</span>
          <span className="text-2xl">€</span>/{t("offersPage.offer.year")}
          <p className="text-xs text-gray-400">
            {t("offersPage.offer.engagement")}{" "}
            {offer.metadata.contract_duration[locale]}
          </p>
        </div>

        <div className="text-gray-900 font-bold my-5 lg:my-0">
          <span className="text-3xl"> {offer.estimation.month}</span>
          <span className="text-2xl">€</span>/{t("offersPage.offer.month")}
          <p className="text-xs text-gray-400">
            {t("offersPage.offer.consommation")} {offer.estimation.year}
            €/{t("offersPage.offer.year")}
          </p>
        </div>

        <div>
          <div>
            <p className="mb-2">
              <span className="text-xs text-gray-400 mr-1">
                {t("offersPage.offer.energy")}
              </span>
              <span className="text-md">
                {offer.metadata.energy_type[locale]}
              </span>
            </p>
          </div>
          <div>
            <p className="mb-2">
              <span className="text-xs text-gray-400 mr-1">
                {t("offersPage.offer.guarantee")}
              </span>
              <span className="text-md">
                {offer.metadata.price_guarantee[locale]}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-right items-center border-t border-gray-200 py-3 text-xs">
        <InformationCircleIcon
          aria-hidden="true"
          className="size-5 text-indigo-400"
        />
        <span className="ml-2">{offer.description[locale]}</span>
      </div>
    </div>
  );
}
