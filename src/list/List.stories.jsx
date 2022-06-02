import { List } from "./List";

export default {
  title: "Components/List",
  component: List,
};

const UnorderedTemplate = (args) => (
  <>
    <ul>
      <li>List Item 1 / Level 1</li>
      <li>List Item 2 / Level 1
        <ul>
          <li>List Item 1 / Level 2</li>
          <li>List Item 2 / Level 2</li>
          <li>List Item 3 / Level 2</li>
        </ul>
      </li>
      <li>List Item 3 / Level 1</li>
    </ul>
  </>
);

export const Unordered = UnorderedTemplate.bind({});

Unordered.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};



const OrdereredTemplate = (args) => (
  <>
    <ol>
      <li>List Item 1 / Level 1</li>
      <li>List Item 2 / Level 1
        <ol>
          <li>List Item 1 / Level 2</li>
          <li>List Item 2 / Level 2</li>
          <li>List Item 3 / Level 2</li>
        </ol>
      </li>
      <li>List Item 3 / Level 1</li>
    </ol>
  </>
);

export const Orderered = OrdereredTemplate.bind({});

Orderered.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};



const IconCheckTemplate = (args) => (
  <>
    <ul class="ifx__list-icon ifx__list-icon--check">
      <li>List Item 1 / Level 1</li>
      <li>List Item 2 / Level 1
        <ul>
          <li>List Item 1 / Level 2</li>
          <li>List Item 2 / Level 2</li>
          <li>List Item 3 / Level 2</li>
        </ul>
      </li>
      <li>List Item 3 / Level 1</li>
    </ul>
  </>
);

export const IconCheck = IconCheckTemplate.bind({});

IconCheck.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};