import Header from "./Header";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "organisms/Header",
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
