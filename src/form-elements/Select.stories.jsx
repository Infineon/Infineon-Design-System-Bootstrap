import { Select } from "./Select";
import { useEffect } from "react";
import { initSelect } from "./SelectElement";

export default {
  title: "Forms/Select",
  component: Select,
  args: {
    label: "Label",
    size: "m",
    disabled: false,
    state: "default"
  }
};

const DefaultTemplate = (args) => {
  useEffect(() => { initSelect() });

  return (
    <Select {...args}></Select>
  )
};

export const Default = DefaultTemplate.bind({});
