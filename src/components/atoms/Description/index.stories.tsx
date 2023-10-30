import Description from "./Description";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "atoms/Description",
  component: Description,
} as Meta<typeof Description>;

const Template: StoryFn = () => <Description />;

export const Default = Template.bind({});
Default.args = {};
