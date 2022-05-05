import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
};

const DefaultTemplate = (args) => (
  <>
    <h1><Badge {...args}>Badge</Badge></h1>
    <h2><Badge {...args}>Badge</Badge></h2>
    <h3><Badge {...args}>Badge</Badge></h3>
    <h4><Badge {...args}>Badge</Badge></h4>
    <h5><Badge {...args}>Badge</Badge></h5>
    <h6><Badge {...args}>Badge</Badge></h6>
  </>
);

export const Default = DefaultTemplate.bind({});
