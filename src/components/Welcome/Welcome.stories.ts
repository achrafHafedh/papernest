import type { Meta, StoryObj } from "@storybook/nextjs";
import Welcome from "./Welcome";

const meta: Meta<typeof Welcome> = {
  title: "Components/Welcome",
  component: Welcome,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Welcome>;

export const Default: Story = {
  args: {
    title: "Bienvenue sur papernest !",
    text: "Simplifiez votre quotidien. Dites adieu au stress administratif.",
  },
};
