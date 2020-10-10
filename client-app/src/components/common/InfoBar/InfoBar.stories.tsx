import React from "react";
import "assets/main.css";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import InfoBar, {
  InfoBarStatusType,
  InfoBarProps,
} from "components/common/InfoBar";

export default {
  title: "Common/InfoBar",
  component: InfoBar,
  argTypes: {
    type: { enum: InfoBarStatusType },
  },
} as Meta;

const Template: Story<InfoBarProps> = (args) => <InfoBar {...args} />;

export const Success = Template.bind({});
Success.args = {
  content: "This is Success InfoBar",
  type: InfoBarStatusType.Success,
};

export const Error = Template.bind({});
Error.args = {
  content: "This is Error InfoBar",
  type: InfoBarStatusType.Error,
};

export const Warning = Template.bind({});
Warning.args = {
  content: "This is Warning InfoBar",
  type: InfoBarStatusType.Warning,
};
