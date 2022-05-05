import { Range } from "./Range";

export default {
  title: "Forms/Range",
  component: Range,
  args: {
    disabled: false,
  }
};

const DefaultTemplate = (args) => (
  <Range {...args}></Range>
);

export const Default = DefaultTemplate.bind({});
