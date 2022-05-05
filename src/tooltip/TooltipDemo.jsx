import PropTypes from "prop-types";
import { Button } from "../button/Button";
import { useRef, useEffect } from "react";
import { Tooltip } from "bootstrap";

const propTypes = {
  /** Set Tooltip position */
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

export const TooltipDemo = ({ position, text, buttonLabel }) => {
  const divRef = useRef();
  useEffect(() => {
    if (divRef.current) {
      var tooltipTriggerList = divRef.current.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        return new Tooltip(tooltipTriggerEl);
      })      
    }
  }, [position, text])

  return (
    <div ref={divRef} style={{margin: "20rem", marginTop: "10rem"}}>
      <Button data-bs-toggle="tooltip" data-bs-placement={position} title={text}>
        {buttonLabel}
      </Button>
    </div>
  );
};
TooltipDemo.propTypes = propTypes;
