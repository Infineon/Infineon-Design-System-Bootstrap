import { ListGroup } from "./ListGroup";
import BsListGroup from "react-bootstrap/ListGroup";

export default {
  title: "Components/List-group",
  component: ListGroup,
};

const DefaultTemplate = (args) => (
  <ListGroup as="ul" {...args}>
    <BsListGroup.Item as="li">List Item Top</BsListGroup.Item>
    <BsListGroup.Item as="li" active>List Item Middle</BsListGroup.Item>
    <BsListGroup.Item as="li">List Item Middle</BsListGroup.Item>
    <BsListGroup.Item as="li">List Item Bottom</BsListGroup.Item>
  </ListGroup>
);

const FlushTemplate = (args) => (
  <ListGroup as="ul" {...args} variant="flush">
    <BsListGroup.Item as="li">List Item Flush</BsListGroup.Item>
    <BsListGroup.Item as="li" active>List Item Flush</BsListGroup.Item>
    <BsListGroup.Item as="li">List Item Flush</BsListGroup.Item>
    <BsListGroup.Item as="li">List Item Flush</BsListGroup.Item>
  </ListGroup>
);

const WithBadgesTemplate = (args) => (
  <ListGroup as="ul" {...args}>
    <BsListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
      <div>
        List Item Top with badge
      </div>
      <span class="badge rounded-pill bg-secondary">4</span>
    </BsListGroup.Item>
    <BsListGroup.Item as="li" className="d-flex justify-content-between align-items-center" active>
      <div>
        List Item Middle with badge
      </div>
      <span class="badge rounded-pill bg-light">14</span>
    </BsListGroup.Item>
    <BsListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
      <div>
        List Item Middle with badge
      </div>
      <span class="badge rounded-pill bg-secondary">140</span>
    </BsListGroup.Item>
    <BsListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
      <div>
        List Item Bottom with badge
      </div>
      <span class="badge rounded-pill bg-secondary">1400</span>
    </BsListGroup.Item>
  </ListGroup>
);

const NotificationTemplate = (args) => (
  <ListGroup as="ul" className="ifx__list-group-notification" {...args}>
    <BsListGroup.Item as="li" active>
      <div className="d-flex justify-content-between">
        <div className="ifx__list-group-heading">List group item heading</div>
        <div className="ifx__list-group-date">3 days ago</div>
      </div>
      <div>
        Notification
      </div>
    </BsListGroup.Item>
    
    <BsListGroup.Item as="li">
      <div className="d-flex justify-content-between">
        <div className="ifx__list-group-heading">List group item heading</div>
        <div className="ifx__list-group-date">3 days ago</div>
      </div>
      <div>
        Notification
      </div>
    </BsListGroup.Item>

    <BsListGroup.Item as="li">
      <div className="d-flex justify-content-between">
        <div className="ifx__list-group-heading">List group item heading</div>
        <div className="ifx__list-group-date">3 days ago</div>
      </div>
      <div>
        Notification
      </div>
    </BsListGroup.Item>
  </ListGroup>
);

const BulletpointDefaultTemplate = (args) => (
  <ListGroup as="ul" className="ifx__list-group-bulletpoints" {...args}>
    <BsListGroup.Item as="li">List Item Top</BsListGroup.Item>
    <BsListGroup.Item as="li" active>List Item Middle</BsListGroup.Item>
    <BsListGroup.Item as="li">List Item Middle</BsListGroup.Item>
    <BsListGroup.Item as="li">List Item Bottom</BsListGroup.Item>
  </ListGroup>
);

const BulletpointFlushTemplate = (args) => (
  <ListGroup as="ul" {...args} variant="flush" className="ifx__list-group-bulletpoints">
    <BsListGroup.Item as="li">List Item Flush</BsListGroup.Item>
    <BsListGroup.Item as="li" active>List Item Flush</BsListGroup.Item>
    <BsListGroup.Item as="li">List Item Flush</BsListGroup.Item>
    <BsListGroup.Item as="li">List Item Flush</BsListGroup.Item>
  </ListGroup>
);

export const Default = DefaultTemplate.bind({});

Default.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const Flush = FlushTemplate.bind({});

Flush.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const WithBadges = WithBadgesTemplate.bind({});

WithBadges.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const Notification = NotificationTemplate.bind({});

Notification.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const BulletpointDefault = BulletpointDefaultTemplate.bind({});

BulletpointDefault.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const BulletpointFlush = BulletpointFlushTemplate.bind({});

BulletpointFlush.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};
