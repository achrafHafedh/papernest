"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

import { languages } from "@/constants";
import { SelectOption } from "@/types";
import SelectBox from "../SelectBox/SelectBox";

export default function Header() {
  const router = useRouter();
  const locale = useLocale();

  const handleChange = (value: SelectOption) => {
    router.push(`/${value.value}`);
  };

  const getSelectedLang = (): SelectOption =>
    languages.find((lang) => lang.value === locale) ?? languages[0];

  return (
    <div className="flex justify-between items-center w-full px-3 lg:px-30 py-3 shadow-sm">
      <div className="border-r border-blue pr-5">
        <Image src="/images/logo.svg" alt="logo" width={160} height={160} />
      </div>
      <div className="w-[150px]">
        <SelectBox
          value={getSelectedLang()}
          options={languages}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
