
import { Button } from "../button/Button";
import { Slant } from "../slant/Slant";
import imageSrc16_9 from "../../public-storybook/1920x1080_ratio-16-9.png";

const image = {
  src: imageSrc16_9,
  alt: "16-9-s",
};

export const HeroBanner = () => {
  console.log("INVOKED")
  return (
    <>
      <div className="ifx__hero-banner">
        <Slant slant="bottom-right_to_left ifx__hero-banner-image">
          <img src={image.src} alt={image.alt} class="img-fluid" />
          <div className="ifx__hero-banner-overlay"></div>
        </Slant>

        <div className="ifx__hero-banner-body container">
          <div className="col-lg-8">
            <div className="ifx__hero-banner-sub-headline">
              <span class="ifx__hero-banner-padded-text">
                Skyline
              </span>
            </div>
            <h1 className="ifx__hero-banner-headline">
              <span class="ifx__hero-banner-padded-text">
                Headline for the hero image with two rows!
              </span>
            </h1>
            <Button size="s" href="javascript:void(0)">Primary</Button>
          </div>
        </div>
    </div>
    </>
  );
};