import { Carousel } from "./Carousel";
import BsCarousel from "react-bootstrap/Carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
  args: {
    controls: true,
    indicators: true,
    aspectRatio: "4:3",
  }
};

const DefaultTemplate = (args) => (
  <Carousel {...args}></Carousel>
);

const TextTemplate = (args) => (
  <Carousel {...args}>
    <BsCarousel.Caption>
      <h3>Slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </BsCarousel.Caption>
  </Carousel>
);

export const Default = DefaultTemplate.bind({});

export const Text = TextTemplate.bind({});
