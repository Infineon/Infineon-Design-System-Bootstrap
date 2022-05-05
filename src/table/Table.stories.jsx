import { Table } from "./Table";

export default {
  title: "Components/Table",
  component: Table,
  args: {
    size: "m",
    hover: false,
    caption: "",
    textAlign: "left",
  }
};

const DefaultTemplate = (args) => (
  <Table {...args}>
    <thead>
      <tr>
        <th>#</th>
        <th>First item</th>
        <th>Second item</th>
        <th>Last item</th>
      </tr>
    </thead>
  </Table>
);

const HeaderTemplate = (args) => (
  <Table {...args}>
    <thead className="ifx__thead__background-color">
      <tr>
        <th>#</th>
        <th>First item</th>
        <th>Second item</th>
        <th>Last item</th>
      </tr>
    </thead>
  </Table>
);

const StripedTemplate = (args) => (
  <Table {...args} striped>
    <thead>
      <tr>
        <th>#</th>
        <th>First item</th>
        <th>Second item</th>
        <th>Last item</th>
      </tr>
    </thead>
  </Table>
);

export const Default = DefaultTemplate.bind({});

export const Header = HeaderTemplate.bind({});

export const Striped = StripedTemplate.bind({});
