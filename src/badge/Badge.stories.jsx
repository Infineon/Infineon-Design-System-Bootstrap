import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
};

const DefaultTemplate = (args) => (
  <>
    <h1><span class="badge rounded-pill" {...args}>H1 Badge</span></h1>
    <h2><span class="badge rounded-pill" {...args}>H2 Badge</span></h2>
    <h3><span class="badge rounded-pill" {...args}>H3 Badge</span></h3>
    <h4><span class="badge rounded-pill" {...args}>H4 Badge</span></h4>
    <h5><span class="badge rounded-pill" {...args}>H5 Badge</span></h5>
    <h6><span class="badge rounded-pill" {...args}>H6 Badge</span></h6>
  </>
);

export const Default = DefaultTemplate.bind({});
