import React from "react";

type WelcomeProps = {
  title: string;
  text: string;
};

export default function Welcome({ title, text }: WelcomeProps) {
  return (
    <div className="border-l-4 border-indigo-500 pl-5">
      <h1 className="text-3xl">{title}</h1>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}
