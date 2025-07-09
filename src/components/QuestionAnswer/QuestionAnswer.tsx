import React from "react";
import Image from "next/image";
import { SelectOption } from "../../types";
import Link from "next/link";

type QuestionAnswerProps = {
  question: string;
  answer: SelectOption[];
};

export default function QuestionAnswer({
  question,
  answer,
}: QuestionAnswerProps) {
  return (
    <div className="pt-10">
      <div className="text-lg">{question}</div>
      <ul className="inline-grid grid-cols-3 gap-4 mt-3">
        {answer.map((item: SelectOption, key: number) => (
          <li
            key={key}
            className="border border-gray-300 mr-5 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:border-gray-400 duration-300"
          >
            <Link href={`/country/${item.value}`}>
              <div data-testid={item.label} className="p-14">
                <Image
                  src={item?.src || ""}
                  alt={item.label}
                  width={60}
                  height={40}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
