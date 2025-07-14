import type { Meta, StoryObj } from "@storybook/nextjs";
import QuestionAnswer from "./QuestionAnswer";
import { languages } from "../../constants";

const meta: Meta<typeof QuestionAnswer> = {
  title: "Components/QuestionAnswer",
  component: QuestionAnswer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof QuestionAnswer>;

export const Default: Story = {
  args: {
    question: "Sélectionnez votre pays de résidence",
    answer: languages,
  },
};
