import { Card } from "./Card";
import { Button } from "../button/Button";
import BsBadge from "react-bootstrap/Badge";
import { ListGroup } from "../list-group/ListGroup";
import BsCard from "react-bootstrap/Card";
import BsListGroup from "react-bootstrap/ListGroup";
import { Link } from "../link/Link";
import imageSrc16_9 from "../../public/1920x1080_ratio-16-9.png";

const image = {
  src: imageSrc16_9,
  alt: "16-9-s",
};

export default {
  title: "Components/Card",
  component: Card,
  args: {
    image: true,
    imageAspectRatio: "none",
    badge: false,
    skyline: false,
    title: "Card Title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button: true,
    link: false
  }
};

const DefaultTemplate = (args) => (
  <Card image={args.image} imageAspectRatio={args.imageAspectRatio} style={{ width: '22rem' }}>

    <BsCard.Body>
      {args.badge && <BsBadge pill bg="">Badge</BsBadge>}
      {args.skyline && <BsCard.Subtitle>More Information</BsCard.Subtitle>}

      <BsCard.Title>{args.title}</BsCard.Title>
      <BsCard.Text>{args.text}</BsCard.Text>

      {args.button && <Button color="secondary" variant="solid" size="s" href="javascript:void(0)">Go somewhere</Button>}
      {args.link && <Link color="brand" underlineNone icon iconPosition="right" linkText="Go somewhere"></Link>}
    </BsCard.Body>
  </Card>
);

export const Default = DefaultTemplate.bind({});

const KitchenSinkTemplate = (args) => (
  <Card image={args.image} imageAspectRatio={args.imageAspectRatio} style={{ width: '22rem' }}>

    <BsCard.Body>
      {args.badge && <BsBadge pill bg="">Badge</BsBadge>}
      {args.skyline && <BsCard.Subtitle>More Information</BsCard.Subtitle>}

      <BsCard.Title>{args.title}</BsCard.Title>
      <BsCard.Text>{args.text}</BsCard.Text>
    </BsCard.Body>

    <ListGroup variant="flush">
      <BsListGroup.Item>An item</BsListGroup.Item>
      <BsListGroup.Item>A second item</BsListGroup.Item>
      <BsListGroup.Item>A third item</BsListGroup.Item>
    </ListGroup>

    <BsCard.Body>
      {args.button && <Button color="secondary" variant="solid" size="s" href="javascript:void(0)">Go somewhere</Button>}
      {args.link && <Link color="brand" underlineNone icon iconPosition="right" linkText="Go somewhere"></Link>}
    </BsCard.Body>
  </Card>
);

export const KitchenSink = KitchenSinkTemplate.bind({});
KitchenSink.args = {
  button: false,
  link: true,
};

const HorizontalTemplate = (args) => (
  <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img className="img-fluid" src={image.src} alt={image.alt}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
);

export const Horizontal = HorizontalTemplate.bind({});