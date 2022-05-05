import { FileInput } from "./FileInput";

export default {
  title: "Forms/File Input",
  component: FileInput,
  args: {
    size: "m",
    disabled: false,
  }
};

const DefaultTemplate = (args) => (
  <FileInput {...args}></FileInput>
);

export const Default = DefaultTemplate.bind({});
