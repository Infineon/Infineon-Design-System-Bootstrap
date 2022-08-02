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
  <HeroBanner {...args}>
    <div>
      <div className="ifx__hero-banner ifx__hero-banner-mainpage ifx__hero-banner-mobile">
        <Slant slant="bottom-right_to_left position-relative">
          <img src={image.src} alt={image.alt}/>
          <div className="ifx__hero-banner-overlay"></div>
        </Slant>
        <div className="ifx__hero-banner-body">
          <div className="ifx__hero-banner-sub-headline">Skyline</div>
          <div className="ifx__hero-banner-headline">Headline for the hero image</div>
          <div className="ifx__hero-banner-headline">with two rows!</div>
          <Button size="s" href="javascript:void(0)">Primary</Button>
        </div>
      </div>

      <Slant slant="bottom-right_to_left ifx__hero-banner ifx__hero-banner-mainpage ifx__hero-banner-desktop">
        <div className="position-relative">
          <img src={image.src} alt={image.alt}/>
          <div className="ifx__hero-banner-overlay">
            <div className="ifx__hero-banner-sub-headline"><span className="ifx__hero-banner-span">Skyline</span></div>
            <div className="ifx__hero-banner-headline"><span className="ifx__hero-banner-span">Headline for the hero image</span></div>
            <div className="ifx__hero-banner-headline"><span className="ifx__hero-banner-span">with two rows!</span></div>
            <div>
              <Button href="javascript:void(0)">Primary</Button>
            </div>
          </div>
        </div>
      </Slant>
    </div>
  </HeroBanner>
);

const SubpageTemplate = (args) => (
  <HeroBanner {...args}>
    <Slant slant="bottom-right_to_left ifx__hero-banner ifx__hero-banner-subpage--desktop">
      <div className="col-9 col-lg-8">
        <div className="ifx__hero-banner-headline">Headline</div>
        <div className="ifx__hero-banner-text">Are you looking for reference designs, recommended boards or products that best fit your application? Infineon Technologies offers a wide range of ready to go semiconductor design solutions and reference schematics used in automotive, industrial power control, power management, sensing solutions and security in IoT applications.</div>
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
