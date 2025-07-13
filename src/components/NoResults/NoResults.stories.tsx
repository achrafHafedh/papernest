import type { Meta, StoryObj } from "@storybook/nextjs";
import NoResults from "./NoResults";

const meta: Meta<typeof NoResults> = {
  title: "Components/NoResults",
  component: NoResults,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NoResults>;

export const Default: Story = {
  args: {},
};
