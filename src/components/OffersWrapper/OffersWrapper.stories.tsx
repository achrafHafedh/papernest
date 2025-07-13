import type { Meta, StoryObj } from "@storybook/nextjs";
import { offersMock, providersMock } from "@/mock/mock";
import OffersWrapper from "./OffersWrapper";

const meta: Meta<typeof OffersWrapper> = {
  title: "Components/OffersWrapper",
  component: OffersWrapper,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OffersWrapper>;

export const Default: Story = {
  args: {
    offers: offersMock,
    providers: providersMock,
  },
};
