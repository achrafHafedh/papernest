"use client";

import React from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";

import { FiltersOffers, SelectOption } from "@/types";

type Props = {
  onChangeFilter: (value: SelectOption | null, key: string) => void;
  filters: FiltersOffers;
};

export default function FilterDisplay({ filters, onChangeFilter }: Props) {
  return (
    <div className="mt-5">
      <ul className="flex flex-wrap" data-testid="container-display-filter">
        {Object.entries(filters).map(
          (filter, key) =>
            filter[1] && (
              <li
                key={key}
                data-testid={`label-${filter[1]?.value}`}
                onClick={() => {
                  onChangeFilter(null, filter[0]);
                }}
                className="flex mr-3 mb-2 items-center justify-between cursor-pointer bg-indigo-400 text-white text-xs font-semibold px-2 py-1 rounded-md"
              >
                {filter[1]?.label}
                <XMarkIcon
                  aria-hidden="true"
                  className="ml-2 size-5 self-center justify-self-end text-white"
                />
              </li>
            )
        )}
      </ul>
    </div>
  );
}
