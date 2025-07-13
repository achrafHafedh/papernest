import { fn } from "storybook/internal/test";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { filtersMock, offersMock, providersMock } from "@/mock/mock";
import Filters from "./Filters";

const meta: Meta<typeof Filters> = {
  title: "Components/Filters",
  component: Filters,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  args: {
    offers: offersMock,
    providers: providersMock,
    onChangeFilter: fn(),
    value: filtersMock,
  },
};
