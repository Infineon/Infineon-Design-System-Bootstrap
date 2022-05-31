import { ButtonBackToTop } from "./ButtonBackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { initBackToTopButton } from "./button-back-to-top";
import { useEffect } from "react";

export default {
  title: "Components/Button Back To Top",
  component: ButtonBackToTop,
};

const DefaultTemplate = (args) => {
  useEffect(() => {
    initBackToTopButton();
  }, [])

  return (
    <div>
      <div style={{height: "200vh"}}></div>
      <ButtonBackToTop className="ifx__btn-back-to-top" variant="secondary">
        <FontAwesomeIcon icon={["fal", "chevron-up"]}/>
      </ButtonBackToTop>
    </div>
  );
}

export const Default = DefaultTemplate.bind({});
Default.parameters = {
  controls: {
    hideNoControlsWarning: true,
  },
};
