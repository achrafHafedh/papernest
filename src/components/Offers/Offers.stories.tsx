import type { Meta, StoryObj } from "@storybook/nextjs";
import { offersMock, providersMock } from "@/mock/mock";
import Offers from "./Offers";

const meta: Meta<typeof Offers> = {
  title: "Components/Offers",
  component: Offers,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Offers>;

export const Default: Story = {
  args: {
    offers: offersMock,
    providers: providersMock,
  },
};
