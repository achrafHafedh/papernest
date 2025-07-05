import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Click",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const WithClick: Story = {
  args: {
    onClick: () => alert("Clicked !"),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disable",
  },
};
