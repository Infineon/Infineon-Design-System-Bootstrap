import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Components/Button-group",
  component: ButtonGroup,
  args: {
    variant: "solid",
    color: "default",
    size: "m",
    disabled: true,
  }
};

const DefaultTemplate = (args) => (
  <ButtonGroup {...args}></ButtonGroup>
);

export const Default = DefaultTemplate.bind({});
