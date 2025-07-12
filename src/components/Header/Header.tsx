"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

import { languages } from "../../constants";
import { SelectOption } from "../../types";
import { Link, usePathname } from "../../i18n/navigation";

import SelectBox from "../SelectBox/SelectBox";

export default function Header() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const handleChange = (value: SelectOption | null) => {
    router.push(`/${value?.value}/${pathname}`);
  };

  const getSelectedLang = (): SelectOption =>
    languages.find((lang) => lang.value === locale) ?? languages[0];

  return (
    <div className="flex justify-between items-center w-full px-3 lg:px-30 py-3 shadow-sm">
      <div className="border-r border-indigo-300 pr-5">
        <Link href="/">
          <Image src="/images/logo.svg" alt="logo" width={160} height={30} />
        </Link>
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
