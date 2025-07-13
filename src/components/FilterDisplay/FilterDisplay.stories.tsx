import { fn } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { filtersMock } from "@/mock/mock";
import FilterDisplay from "./FilterDisplay";

const meta: Meta<typeof FilterDisplay> = {
  title: "Components/FilterDisplay",
  component: FilterDisplay,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FilterDisplay>;

export const Default: Story = {
  args: {
    filters: filtersMock,
    onChangeFilter: fn(),
  },
};
