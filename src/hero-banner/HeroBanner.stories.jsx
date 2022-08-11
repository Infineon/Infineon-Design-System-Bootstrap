import { HeroBanner } from "./HeroBanner";
import { Button } from "../button/Button";
import { Slant } from "../slant/Slant";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";

export default {
  title: "Components/Hero Banner",
  component: HeroBanner,
};

const image = {
  src: imageSrc16_9,
  alt: "16-9-s",
};

const MainpageTemplate = (args) => (
  <HeroBanner {...args}></HeroBanner>
);

const SubpageTemplate = (args) => (
  <HeroBanner {...args}>
    <Slant slant="bottom-right_to_left ifx__hero-banner-subpage"> 
      <div className="ifx__hero-banner-subpage-body container">
        <div className="col-9 col-lg-8">
          <h1>Headline</h1>
          <p>Are you looking for reference designs, recommended boards or products that best fit your application? Infineon Technologies offers a wide range of ready to go semiconductor design solutions and reference schematics used in automotive, industrial power control, power management, sensing solutions and security in IoT applications.</p>
        </div>
      </div>
    </Slant>
  </HeroBanner>
);

export const Mainpage = MainpageTemplate.bind({});

Mainpage.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const Subpage = SubpageTemplate.bind({});

Subpage.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};
