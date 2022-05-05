import { Card } from "./Card";
import { Button } from "../button/Button";
import { ListGroup } from "../list-group/ListGroup";
import BsCard from "react-bootstrap/Card";
import BsListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    headerText: "",
    subtitleText: "",
    footerText: "",
    button: true,
    buttonIcon: false,
    links: false,
    image: true,
    aspectRatio: "16:9",
    direction: "vertical",
    imagePosition: "left",
  }
};

const DefaultTemplate = (args) => (
  <Card {...args}>
    {args.headerText && <BsCard.Header>{args.headerText}</BsCard.Header>}

    <BsCard.Body>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Title>{args.title}</BsCard.Title>
      <BsCard.Text>{args.text}</BsCard.Text>

      {args.button &&
        <Button color="secondary" variant="outline" href="#">Go somewhere
        {args.buttonIcon &&
          <FontAwesomeIcon icon={["fas", "star"]} className="ifx__btn-icon--after"/>
        }
        </Button>
      }

      {args.links &&
        <div className="ifx__card-link-wrapper">
          <BsCard.Link href="#">Card Link</BsCard.Link>
          <BsCard.Link href="#">Another Link</BsCard.Link>
        </div>
      }
    </BsCard.Body>

    {args.footerText && <BsCard.Footer>{args.footerText}</BsCard.Footer>}
  </Card>
);

const CenterTemplate = (args) => (
  <Card {...args}>
    {args.headerText && <BsCard.Header className="text-center">{args.headerText}</BsCard.Header>}

    <BsCard.Body className="d-flex justify-content-center flex-wrap text-center">
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Title className="w-100">{args.title}</BsCard.Title>
      <BsCard.Text className="w-100">{args.text}</BsCard.Text>

      {args.button &&
        <Button color="secondary" variant="outline" href="#">Go somewhere
        {args.buttonIcon &&
          <FontAwesomeIcon icon={["fas", "star"]} className="ifx__btn-icon--after"/>
        }
        </Button>
      }

      {args.links && 
        <div className="ifx__card-link-wrapper">
          <BsCard.Link href="#">Card Link</BsCard.Link>
          <BsCard.Link href="#">Another Link</BsCard.Link>
        </div>
      }
    </BsCard.Body>



    {args.footerText && <BsCard.Footer className="text-center">{args.footerText}</BsCard.Footer>}
  </Card>
);

const KitchenSinkTemplate = (args) => (
  <Card {...args}>
    {args.headerText && <BsCard.Header>{args.headerText}</BsCard.Header>}

    <BsCard.Body>
      {args.subtitleText && <BsCard.Subtitle>{args.subtitleText}</BsCard.Subtitle>}
      <BsCard.Title>{args.title}</BsCard.Title>
      <BsCard.Text>{args.text}</BsCard.Text>
    </BsCard.Body>

    <ListGroup variant="flush">
      <BsListGroup.Item>An item</BsListGroup.Item>
      <BsListGroup.Item>A second item</BsListGroup.Item>
      <BsListGroup.Item>A third item</BsListGroup.Item>
    </ListGroup>

    {args.links && 
      <BsCard.Body>
        <BsCard.Link href="#">Card Link</BsCard.Link>
        <BsCard.Link href="#">Another Link</BsCard.Link>
      </BsCard.Body>
    }

    {args.footerText && <BsCard.Footer>{args.footerText}</BsCard.Footer>}
  </Card>
);

export const Default = DefaultTemplate.bind({});

export const Center = CenterTemplate.bind({});

export const KitchenSink = KitchenSinkTemplate.bind({});
KitchenSink.args = {
  button: false,
  buttonIcon: false,
  links: true,
};
