import { Image } from "./ImageExtended";

export default {
  title: "Components/Image Extended",
  component: Image,
  args: {
    size: "small",
    slant: "none",
  }
};

const DefaultTemplate = (args) => (
    <Image {...args} />
);

export const Default = DefaultTemplate.bind({});
