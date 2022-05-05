import { Teaser } from "./Teaser";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BsCard from "react-bootstrap/Card";

export default {
  title: "Components/Teaser",
  component: Teaser,
  args: {
    title: "This is a headline example of a teaser",
    subtitleText: "01.01.2022.",
    image: true,
    aspectRatio: "16:9",
    direction: "vertical",
    imagePosition: "left",
  }
};

const DefaultTemplate = (args) => (
  <Teaser {...args}>
    <BsCard.Body>
      <BsCard.Title>{args.title}</BsCard.Title>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
    </BsCard.Body>
    <BsCard.Body className="ifx__card-link-wrapper">
      <BsCard.Link href="#">Link</BsCard.Link>
    </BsCard.Body>
  </Teaser>
);

const ImageOverlayTemplate = (args) => (
  <Teaser {...args}>
    <BsCard.ImgOverlay>
      <BsCard.Title>{args.title}</BsCard.Title>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Link href="#">Link</BsCard.Link>
    </BsCard.ImgOverlay>
  </Teaser>
);

const EventTemplate = (args) => (
  <Teaser {...args}>
    <div>
      <BsCard.ImgOverlay className="d-flex flex-wrap justify-content-end">
        <Button color="secondary">
          <FontAwesomeIcon icon={["fa", "star"]}/>
        </Button>
        <p className="w-100 mb-0">Overline Text</p>
        <BsCard.Title className="w-100 mb-0">{args.title}</BsCard.Title>
      </BsCard.ImgOverlay>
    </div>

    <BsCard.Body className="d-flex justify-content-between align-items-center">
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Link href="#">Read more</BsCard.Link>
    </BsCard.Body>
  </Teaser>
);

export const Default = DefaultTemplate.bind({});

export const ImageOverlay = ImageOverlayTemplate.bind({});

export const Event = EventTemplate.bind({});
Event.args = {
  title: "Title",
};
