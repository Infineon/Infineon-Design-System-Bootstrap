import { Carousel } from "./Carousel";
import { initCarousel } from "./default-carousel";
import { useEffect } from "react";
import "bootstrap";

export default {
  title: "Components/Carousel",
  component: Carousel,
  args: {
    imageAspectRatio: "none",
  },
};

const DefaultTemplate = (args) => {
  return <DefaultTemplateDemo {...args} />
}

const DefaultTemplateDemo = (args) => {
  useEffect(() => {
    initCarousel();
  }, [])

  return (
    <>
      <Carousel {...args}></Carousel>
    </>
  );
}

export const Default = DefaultTemplate.bind({});