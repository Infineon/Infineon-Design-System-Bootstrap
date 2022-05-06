import { Button } from "./Button";
import { Badge } from "../badge/Badge";
import { Spinner } from "../spinner/Spinner";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    size: "m",
    active: false,
    disabled: false,
    icon: false,
    iconPosition: "left",
  }
};

const DefaultTemplate = (args) => (
  <Button {...args}>
    {args.label}
  </Button>
);

const ButtonBadgeTemplate = (args) => (
  <Button {...args}>
    {args.label}<Badge bg="light" className="btn-badge">4</Badge>
  </Button>
);

const BorderSpinnerTemplate = (args) => (
  <Button {...args}>
    <Spinner size="s" animation="border"></Spinner>{args.label}
  </Button>
);

const GrowingSpinnerTemplate = (args) => (
  <Button {...args}>
    <Spinner size="s" animation="grow"></Spinner>{args.label}
  </Button>
);

export const Default = DefaultTemplate.bind({});

export const ButtonBadge = ButtonBadgeTemplate.bind({});
ButtonBadge.args = {
  label: "Notifications",
  color: "secondary",
};

export const BorderSpinner = BorderSpinnerTemplate.bind({});
BorderSpinner.args = {
  color: "secondary",
};

export const GrowingSpinner = GrowingSpinnerTemplate.bind({});
GrowingSpinner.args = {
  color: "secondary",
};
