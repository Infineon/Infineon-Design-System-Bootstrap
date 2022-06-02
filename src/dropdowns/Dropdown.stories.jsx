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
    autoClose: "default",
  }
};

const DefaultTemplate = (args) => (
  <Dropdown {...args}>
    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)" active>Action default</BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>
  </Dropdown>
);

const IconTemplate = (args) => (
  <Dropdown {...args}>
    <BsDropdown.Item href="javascript:void(0)">
      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default
    </BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)" active>
      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default
    </BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">
      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default
    </BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">
      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default
    </BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">
      <FontAwesomeIcon icon={["fal", "calendar"]}/>Action default
    </BsDropdown.Item>
  </Dropdown>
);

const SearchTemplate = (args) => (
  <Dropdown {...args}>
    <SearchBar className="inf__dropdown-search" size="s" autoFocus></SearchBar>

    <BsDropdown.Item href="javascript:void(0)" active>Action default</BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">Action default</BsDropdown.Item>
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

    <BsDropdown.Item href="javascript:void(0)">
      <Checkbox id="checkbox-1" label="Action default"></Checkbox>
    </BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">
      <Checkbox id="checkbox-2" label="Action default"></Checkbox>
    </BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">
      <Checkbox id="checkbox-3" label="Action default"></Checkbox>
    </BsDropdown.Item>
    <BsDropdown.Item href="javascript:void(0)">
      <Checkbox id="checkbox-4" label="Action default"></Checkbox>
    </BsDropdown.Item>
  </Dropdown>
);

export const Default = DefaultTemplate.bind({});

export const Icon = IconTemplate.bind({});

export const Search = SearchTemplate.bind({});

export const Filter = FilterTemplate.bind({});
Filter.args = {
  autoClose: "outside",
}
