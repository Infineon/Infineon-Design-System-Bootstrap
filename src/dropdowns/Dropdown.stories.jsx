import { Dropdown } from "./Dropdown";
import BsDropdown from "react-bootstrap/Dropdown";
import BsForm from "react-bootstrap/Form";
import BsFormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Checkbox } from "../form-elements/Checkbox";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    label: "Secondary",
    size: "m",
    active: false,
    icon: "none",
  }
};

const DefaultTemplate = (args) => (
  <Dropdown {...args}>
    <BsDropdown.Item href="#/action-1">Action</BsDropdown.Item>
    <BsDropdown.Item href="#/action-2" active>Active action</BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">Something else here</BsDropdown.Item>
    <BsDropdown.Item href="#/action-4">Another action</BsDropdown.Item>
    <BsDropdown.Divider />
    <BsDropdown.Item href="#/action-5">Separated link</BsDropdown.Item>
  </Dropdown>
);

const HeaderTemplate = (args) => (
  <Dropdown {...args}>
    <BsDropdown.Header>Dropdown header</BsDropdown.Header>
    <BsDropdown.Item href="#/action-1" active>Something else</BsDropdown.Item>
    <BsDropdown.Item href="#/action-2">Hover action</BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">Another action</BsDropdown.Item>
    <BsDropdown.Divider />
    <BsDropdown.Item href="#/action-4">Separated link</BsDropdown.Item>
  </Dropdown>
);

const SearchTemplate = (args) => (
  <Dropdown {...args}>
    <BsFormControl className="ifx__dropdown-search" autoFocus placeholder="Search"></BsFormControl>

    <BsDropdown.Item href="#/action-1" active>Something else</BsDropdown.Item>
    <BsDropdown.Item href="#/action-2">Hover action</BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">Another action</BsDropdown.Item>
    <BsDropdown.Divider />
    <BsDropdown.Item href="#/action-4">Separated link</BsDropdown.Item>
  </Dropdown>
);

const IconTemplate = (args) => (
  <Dropdown {...args}>
    <BsDropdown.Item href="#/action-1">
      <FontAwesomeIcon icon={["fa", "bell"]}/>Action
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-2">
      <FontAwesomeIcon icon={["fa", "chart-pie"]}/>Another action
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">
      <FontAwesomeIcon icon={["fa", "coffee"]}/>Something else here
    </BsDropdown.Item>
    <BsDropdown.Divider />
    <BsDropdown.Item href="#/action-4">
      <FontAwesomeIcon icon={["fa", "star"]}/>Another action
    </BsDropdown.Item>
  </Dropdown>
);

const FilterTemplate = (args) => (
  <Dropdown {...args}>
    <BsForm.Select className="ifx__dropdown-select" aria-label="Default select example">
      <option>Select</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </BsForm.Select>

    <BsDropdown.Item href="#/action-1">
      <Checkbox id="checkbox" label="Something else here"></Checkbox>
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-2">
      <Checkbox id="checkbox" label="Hover action"></Checkbox>
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">
      <Checkbox id="checkbox" label="Another action"></Checkbox>
    </BsDropdown.Item>
    <BsDropdown.Item href="#/action-4">
      <Checkbox id="checkbox" label="Something else"></Checkbox>
    </BsDropdown.Item>
  </Dropdown>
);

export const Default = DefaultTemplate.bind({});

export const Header = HeaderTemplate.bind({});

export const Search = SearchTemplate.bind({});

export const Icon = IconTemplate.bind({});

export const Filter = FilterTemplate.bind({});
