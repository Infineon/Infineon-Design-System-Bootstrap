import { Carousel } from "./Carousel";
import BsCarousel from "react-bootstrap/Carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
  args: {
    controls: true,
    indicators: true,
    aspectRatio: "16:9",
  }
};

const DefaultTemplate = (args) => (
  <Carousel {...args}></Carousel>
  // <h6>Image Headline</h6>
  // <p>Further Description of the Image of Graphic</p>
);

export const Default = DefaultTemplate.bind({});

