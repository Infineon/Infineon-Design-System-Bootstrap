import PropTypes from "prop-types";
import { Button } from "../button/Button";
import { useRef, useEffect } from "react";
import { Popover } from "bootstrap";

const propTypes = {
  /** Set Popover position */
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
};

export const PopoverDemo = ({ position, text, dataBsContent, buttonLabel }) => {
  const divRef = useRef();
  const popRef = useRef();

  useEffect(() => {
    if (divRef.current) {
      if (popRef.current) {popRef.current.dispose()}
      const popoverTriggerList = divRef.current.querySelectorAll('[data-bs-toggle="popover"]');
      popoverTriggerList.forEach(function (popoverTriggerEl) {
        popRef.current = new Popover(popoverTriggerEl);
      })      
    }
  }, [position, text, dataBsContent])

  useEffect(() => {
    return() => {
      if (popRef.current) {popRef.current.dispose()}
    };
  }, [])

  return (
    <div ref={divRef} style={{margin: "20rem", marginTop: "10rem"}}>
      <Button data-bs-toggle="popover" data-bs-placement={position} title={text} data-bs-content={dataBsContent}>
        {buttonLabel}
      </Button>
    </div>
  );
};
PopoverDemo.propTypes = propTypes;


