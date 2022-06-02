import { Image } from "./Image";

export default {
  title: "Components/Image",
  component: Image,
  args: {
    slant: "none",
  }
};

const DefaultTemplate = (args) => (
  <Image slant={args.slant} />
);

export const Default = DefaultTemplate.bind({});
