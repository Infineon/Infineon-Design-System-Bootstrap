import { Checkbox } from "./Checkbox";

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
  args: {
    label: "Label",
    disabled: false,
    state: "default"
  }
};

const DefaultTemplate = (args) => (
  <Checkbox {...args}></Checkbox>
);

export const Default = DefaultTemplate.bind({});
