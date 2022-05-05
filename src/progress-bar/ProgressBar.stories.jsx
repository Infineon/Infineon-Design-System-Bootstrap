import { ProgressBar } from "./ProgressBar";

export default {
  title: "Components/Progress-bar",
  component: ProgressBar,
  args: {
    now: 70,
    label: false,
    small: false,
  }
};

const DefaultTemplate = (args) => (
  <ProgressBar {...args}></ProgressBar>
);

export const Default = DefaultTemplate.bind({});
