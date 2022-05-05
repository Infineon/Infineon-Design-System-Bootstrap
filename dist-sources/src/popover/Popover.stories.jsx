import { PopoverDemo } from "./PopoverDemo";

export default {
  title: "Components/Popover",
  component: PopoverDemo,
  args: {
    position: "top",
    text: "",
    dataBsContent: "This is a very beautiful popover, show some love.",
    buttonLabel: "Button",
  }
};

const DefaultTemplate = (args) => (
  <PopoverDemo {...args}></PopoverDemo>
);

export const Default = DefaultTemplate.bind({});

