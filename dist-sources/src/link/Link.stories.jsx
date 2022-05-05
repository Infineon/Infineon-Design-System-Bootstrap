import { Link } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
  args: {
    linkText: "Link",
    color: "font",
    underlineNone: false,
    icon: false,
    iconPosition: "left",
  }
};

const DefaultTemplate = (args) => (
  <Link {...args}></Link>
);

export const Default = DefaultTemplate.bind({});
