import PropTypes from "prop-types";
import BsModal from "react-bootstrap/Modal";
import { Button } from "../button/Button";
import { useRef, useEffect } from "react";
import { Modal as ModalScript } from "bootstrap";

const propTypes = {
  /** Specifies a large or small Modal */
  size: PropTypes.oneOf(["s", "m", "l"]),
};

export const Modal = ({ size, children }) => {
  const bsSize =
    size === "s" ? "sm" 
    : size === "l" ? "lg" 
    : undefined;

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
      <BsModal.Dialog size={bsSize}>
        <BsModal.Header>
          <BsModal.Title>Modal title</BsModal.Title>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </BsModal.Header>

        <BsModal.Body>
          {children}
        </BsModal.Body>

        <BsModal.Footer>
          <Button color="primary" variant="outline" data-bs-dismiss="modal">Close</Button>
          <Button>Save changes</Button>
        </BsModal.Footer>
      </BsModal.Dialog>
    </div>
  )
};
Modal.propTypes = propTypes;

export const ModalDemo = ( children ) => {
  return (props) => {
    const divRef = useRef();
    useEffect(() => {
      if (divRef.current) {
        const button = divRef.current.querySelector('button')
        const myModal = new ModalScript(divRef.current.querySelector('#exampleModal'))

        button.addEventListener('click', () => {
          myModal.toggle()
        })

        return () => {
          myModal.dispose()
        }
      }
    }, []);
  
    return (
      <div ref={divRef}>
        <Button>Demo</Button>
        <Modal {...props}>{children}</Modal>
      </div>
    )
  }
};
