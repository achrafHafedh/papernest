"use client";

import React from "react";
import { SelectBoxProps } from "@/types";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function SelectBox({
  options,
  value,
  onChange,
  placeholder,
  clearable = false,
}: SelectBoxProps) {
  return (
    <div className="">
      <Listbox
        data-testid="container-selectbox-languages"
        value={value}
        onChange={onChange}
        as="div"
      >
        <div className="relative mt-2">
          <ListboxButton className="grid w-full cursor-pointer grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left outline sm:text-sm focus:outline-black active:outline-black">
            <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
              {value?.src && (
                <Image
                  alt={value.label}
                  src={value.src}
                  width={20}
                  height={20}
                  className="size-5 rounded-full"
                />
              )}
              {value && (
                <span data-testid="selectbox-languages" className="block">
                  {value.label}
                </span>
              )}
              {!value && (
                <span data-testid="selectbox-languages" className="block">
                  {placeholder}
                </span>
              )}
            </span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 outline text-base shadow-lg sm:text-sm focus:outline-black active:outline-black"
          >
            {options.map((option, key) => (
              <ListboxOption
                key={key}
                value={option}
                data-testid={`option-${option.value}`}
                className="group relative cursor-pointer py-2 pr-9 pl-3 text-gray-900 select-none data-[focus]:bg-indigo-400 data-[focus]:text-white"
              >
                <div className="flex items-center">
                  {option.src && (
                    <Image
                      alt=""
                      src={option.src}
                      width={20}
                      height={20}
                      className="size-5 rounded-full"
                    />
                  )}
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {option.label}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-not-data-[selected]:hidden group-data-[focus]:text-white">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
      {clearable && (
        <XMarkIcon
          aria-hidden="true"
          className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          onClick={() => {
            onChange(null);
          }}
        />
      )}
    </div>
  );
}
