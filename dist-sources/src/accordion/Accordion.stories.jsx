import { Accordion } from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
};

const DefaultTemplate = (args) => (
  <Accordion {...args}></Accordion>
);

export const Default = DefaultTemplate.bind({});
