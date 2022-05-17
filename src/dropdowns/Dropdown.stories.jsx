import { Dropdown } from "./Dropdown";
import { SearchBar } from "../form-elements/SearchBar";
import { Checkbox } from "../form-elements/Checkbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BsDropdown from "react-bootstrap/Dropdown";
import BsForm from "react-bootstrap/Form";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    label: "Secondary",
    size: "m",
    active: false,
  }
};

const DefaultTemplate = (args) => (
  <Dropdown {...args}>
    <BsDropdown.Item href="#/action-1">Action default</BsDropdown.Item>
    <BsDropdown.Item href="#/action-2" active>Action default</BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">Action default</BsDropdown.Item>
    <BsDropdown.Item href="#/action-4">Action default</BsDropdown.Item>
    <BsDropdown.Item href="#/action-5">Action default</BsDropdown.Item>
  </Dropdown>
);

const IconTemplate = (args) => (
  <Dropdown {...args}>
    <BsDropdown.Item href="#/action-1">
      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-2" active>
      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">
      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-4">
      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-5">
      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default
    </BsDropdown.Item>
  </Dropdown>
);

const SearchTemplate = (args) => (
  <Dropdown {...args}>
    <SearchBar className="inf__dropdown-search" size="s" autoFocus></SearchBar>

    <BsDropdown.Item href="#/action-1" active>Action default</BsDropdown.Item>
    <BsDropdown.Item href="#/action-2">Action default</BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">Action default</BsDropdown.Item>
    <BsDropdown.Item href="#/action-4">Action default</BsDropdown.Item>
  </Dropdown>
);

const FilterTemplate = (args) => (
  <Dropdown {...args}>
    <BsForm.Select className="inf__dropdown-select" aria-label="Default select example">
      <option>Sort by</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </BsForm.Select>

    <BsDropdown.Item href="#/action-1">
      <Checkbox id="checkbox" label="Action default"></Checkbox>
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-2">
      <Checkbox id="checkbox" label="Action default"></Checkbox>
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">
      <Checkbox id="checkbox" label="Action default"></Checkbox>
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-4">
      <Checkbox id="checkbox" label="Action default"></Checkbox>
    </BsDropdown.Item>
  </Dropdown>
);

export const Default = DefaultTemplate.bind({});

export const Icon = IconTemplate.bind({});

export const Search = SearchTemplate.bind({});

export const Filter = FilterTemplate.bind({});
