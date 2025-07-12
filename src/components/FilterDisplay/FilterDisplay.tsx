"use client";

import { XMarkIcon } from "@heroicons/react/16/solid";

import { FiltersOffers, SelectOption } from "@/types";

type Props = {
  onChangeFilter: (value: SelectOption | null, key: string) => void;
  filters: FiltersOffers;
};

export default function FilterDisplay({ filters, onChangeFilter }: Props) {
  return (
    <div className="mt-5">
      <ul className="flex">
        {Object.entries(filters).map(
          (filter, key) =>
            filter[1] && (
              <li
                key={key}
                onClick={() => {
                  onChangeFilter(null, filter[0]);
                }}
                className="flex cursor-pointer bg-indigo-400 text-white text-xs font-semibold px-2 py-1 rounded-md mr-5"
              >
                {filter[1]?.label}
                <XMarkIcon
                  aria-hidden="true"
                  className="col-start-1 row-start-1 ml-2 size-5 self-center justify-self-end text-white sm:size-4"
                />
              </li>
            )
        )}
      </ul>
    </div>
  );
}
