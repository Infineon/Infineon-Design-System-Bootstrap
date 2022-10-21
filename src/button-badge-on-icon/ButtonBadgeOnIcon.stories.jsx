import { ButtonBadgeOnIcon } from "./ButtonBadgeOnIcon";
import { Badge } from "../badge/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default {
  title: "Components/Button Badge On Icon",
  component: ButtonBadgeOnIcon,
};

const DefaultTemplate = (args) => (
  <ButtonBadgeOnIcon>
    <div className="ifx__badge-on-icon position-relative d-inline-block">
      <div className="d-flex align-items-center">
        Link
        <FontAwesomeIcon icon={["fal", "cart-shopping"]}/>
      </div>
      <Badge pill bg="primary" className="btn-badge">4</Badge>
    </div>
  </ButtonBadgeOnIcon>
);

export const Default = DefaultTemplate.bind({});
Default.parameters = {
  controls: {
    hideNoControlsWarning: true,
  },
};
