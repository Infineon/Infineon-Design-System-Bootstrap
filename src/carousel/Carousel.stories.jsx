import { Carousel } from "./Carousel";

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
      <h6 className="mb-0 mt-3">Image Headline</h6>
      <p className="m-0">Further Description of the Image of Graphic</p>
    </>
  );
}

export const Default = DefaultTemplate.bind({});
