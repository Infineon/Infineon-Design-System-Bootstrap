import { Carousel } from "./Carousel";
import BsCarousel from "react-bootstrap/Carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
  args: {
    controls: true,
    indicators: true,
    imageAspectRatio: "16:9",
  }
};

const DefaultTemplate = (args) => (
  <>
    <Carousel {...args}></Carousel>
    <h6 className="mb-0 mt-3">Image Headline</h6>
    <p className="m-0">Further Description of the Image of Graphic</p>
  </>
);

const HeroBannerTemplate = (args) => (
  <Carousel {...args}>
    <BsCarousel.Caption>
      <div>
        <h3>Slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </BsCarousel.Caption>
  </Carousel>
);

export const Default = DefaultTemplate.bind({});
export const HeroBanner = HeroBannerTemplate.bind({});