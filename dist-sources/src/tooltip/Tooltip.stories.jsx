import { TooltipDemo } from "./TooltipDemo";

export default {
  title: "Components/Tooltip",
  component: TooltipDemo,
  args: {
    position: "top",
    text: "Tooltip",
    buttonLabel: "Button",
  }
};

const DefaultTemplate = (args) => (
  <TooltipDemo {...args}></TooltipDemo>
);

export const Default = DefaultTemplate.bind({});

