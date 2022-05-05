import { Breadcrumb } from "./Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};

const DefaultTemplate = (args) => (
  <Breadcrumb {...args}></Breadcrumb>
);

export const Default = DefaultTemplate.bind({});
