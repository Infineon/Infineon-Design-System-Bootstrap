import { HeroBanner } from "./HeroBanner";
import { Button } from "../button/Button";
import imageSrc16_9 from "../../public/1920x1080_ratio-16-9.png";

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
      <div className="ifx__hero-banner ifx__hero-banner-mobile">
        <img className="ifx__slanted" src={image.src} alt={image.alt}/>
        <div className="ifx__hero-banner-body">
          <div className="ifx__hero-banner-sub-headline">Skyline</div>
          <div className="ifx__hero-banner-headline">Headline for the hero image</div>
          <div className="ifx__hero-banner-headline">with two rows!</div>
          <Button size="s" href="javascript:void(0)">Primary</Button>
        </div>
      </div>

      <div className="ifx__hero-banner ifx__hero-banner-desktop ifx__slanted">
        <div className="position-relative">
          <img src={image.src} alt={image.alt}/>
          <div className="ifx__hero-banner-overlay">
            <div className="ifx__hero-banner-sub-headline">Skyline</div>
            <div className="ifx__hero-banner-headline">Headline for the hero image</div>
            <div className="ifx__hero-banner-headline">with two rows!</div>
            <Button href="javascript:void(0)">Primary</Button>
          </div>
        </div>
      </div>
    </div>
  </HeroBanner>
);

const SubpageTemplate = (args) => (
  <HeroBanner {...args}>
    <div className="ifx__hero-banner ifx__hero-banner-subpage--desktop ifx__slanted">
      <div className="col-9 col-lg-8">
        <div className="ifx__hero-banner-headline">Headline</div>
        <div className="ifx__hero-banner-text">Are you looking for reference designs, recommended boards or products that best fit your application? Infineon Technologies offers a wide range of ready to go semiconductor design solutions and reference schematics used in automotive, industrial power control, power management, sensing solutions and security in IoT applications.</div>
      </div>
    </div>
  </HeroBanner>
);

export const Mainpage = MainpageTemplate.bind({});

export const Subpage = SubpageTemplate.bind({});
