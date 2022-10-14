import { Button } from "./Button";
import { Badge } from "../badge/Badge";
import { Spinner } from "../spinner/Spinner";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
    variant: "solid",
    color: "default",
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
    {args.label}<Badge pill bg="" className="btn-badge">14</Badge>
  </Button>
);

const BorderSpinnerTemplate = (args) => (
  <Button {...args}>
    <Spinner size="s" animation="border"></Spinner>{args.label}
  </Button>
);

export const Default = DefaultTemplate.bind({});

export const ButtonBadge = ButtonBadgeTemplate.bind({});
ButtonBadge.args = {
  label: "Notifications",
  color: "highlight",
};

export const BorderSpinner = BorderSpinnerTemplate.bind({});
BorderSpinner.args = {
  color: "highlight",
};
