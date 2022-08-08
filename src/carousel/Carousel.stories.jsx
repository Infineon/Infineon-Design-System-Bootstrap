import { Carousel } from "./Carousel";
import { CarouselSlider } from './CarouselSlider'


export default {
  title: "Components/Carousel",
  component: Carousel,
  args: {
    controls: true,
    indicators: true,
    aspectRatio: "16:9",
  },
};

const DefaultTemplate = (args) => {
  return (
    <>
      <Carousel {...args}></Carousel>
    </>
  );
}

const HeroBannerTemplate = (args) => (
  <CarouselSlider {...args}></CarouselSlider>
);


export const Default = DefaultTemplate.bind({});
export const HeroBanner = HeroBannerTemplate.bind({});


