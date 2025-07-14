import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";
import { languages } from "@/constants";
import SelectBox from "./SelectBox";

const meta: Meta<typeof SelectBox> = {
  title: "Components/SelectBox",
  component: SelectBox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
  args: {
    options: languages,
    value: languages[0],
    onChange: fn(),
  },
};
