import { SearchBar } from "./SearchBar";

export default {
  title: "Forms/Search Bar",
  component: SearchBar,
  args: {
    size: "m",
    disabled: false,
    state: "default"
  }
};

const DefaultTemplate = (args) => (
  <SearchBar {...args}></SearchBar>
);

export const Default = DefaultTemplate.bind({});
