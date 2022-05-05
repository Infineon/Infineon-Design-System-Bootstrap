import { RadioButton } from "./RadioButton";

export default {
  title: "Forms/Radio Button",
  component: RadioButton,
  args: {
    label: "Label",
    disabled: false,
  }
};

const DefaultTemplate = (args) => (
  <RadioButton {...args}></RadioButton>
);

export const Default = DefaultTemplate.bind({});
