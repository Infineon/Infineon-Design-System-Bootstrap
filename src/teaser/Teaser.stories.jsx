import { Teaser } from "./Teaser";
import { Link } from "../link/Link";
import BsCard from "react-bootstrap/Card";

export default {
  title: "Components/Teaser",
  component: Teaser,
  args: {
    title: "This is a headline example of a teaser",
    subtitleText: "More information",
    image: true,
    aspectRatio: "16:9",
    direction: "vertical",
    imagePosition: "left",
  }
};

const DefaultTemplate = (args) => (
  <Teaser {...args}>
    <BsCard.Body>
      <div className="ifx__teaser-title">{args.title}</div>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
    </BsCard.Body>

    <BsCard.Body className="ifx__card-link-wrapper">
      <Link linkText="Link with Icon default" color="brand" underlineNone icon iconPosition="right">an example link</Link>
    </BsCard.Body>
  </Teaser>
);

const EventTemplate = (args) => (
  <div className="ifx__teaser-event">
    <Teaser {...args}>
      <BsCard.Body>
        {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
        <Link linkText="Link with Icon default" color="brand" underlineNone icon iconPosition="right">an example link</Link>
      </BsCard.Body>
    </Teaser>
  </div>
);

export const Default = DefaultTemplate.bind({});

export const Event = EventTemplate.bind({});
