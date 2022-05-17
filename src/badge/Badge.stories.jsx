import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
};

const DefaultTemplate = (args) => (
  <Badge pill bg="">Badge</Badge>
);

export const Default = DefaultTemplate.bind({});

const HeadingsTemplate = (args) => (
  <>
    <h1>Heading h1 <span class="badge rounded-pill" {...args}>Badge</span></h1>
    <h2>Heading h2 <span class="badge rounded-pill" {...args}>Badge</span></h2>
    <h3>Heading h3 <span class="badge rounded-pill" {...args}>Badge</span></h3>
    <h4>Heading h4 <span class="badge rounded-pill" {...args}>Badge</span></h4>
    <h5>Heading h5 <span class="badge rounded-pill" {...args}>Badge</span></h5>
    <h6>Heading h6 <span class="badge rounded-pill" {...args}>Badge</span></h6>
  </>
);

export const Headings = HeadingsTemplate.bind({});
