import { Pagination } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  args: {
    size: "m",
    active: 3,
  }
};

const DefaultTemplate = (args) => (
  <Pagination {...args}></Pagination>
);

export const Default = DefaultTemplate.bind({});
