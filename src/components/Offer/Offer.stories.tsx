import type { Meta, StoryObj } from "@storybook/nextjs";
import { offerMock, providerMock } from "@/mock/mock";
import Offer from "./Offer";

const meta: Meta<typeof Offer> = {
  title: "Components/Offer",
  component: Offer,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Offer>;

export const Default: Story = {
  args: {
    offer: offerMock,
    provider: providerMock,
  },
};
