import BsModal from "react-bootstrap/Modal";
import { Button } from "../button/Button";
import { useRef, useEffect } from "react";
import { Modal as ModalScript } from "bootstrap";

export const Modal = ({ children }) => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
      <BsModal.Dialog>
        <BsModal.Header>
          <div className="modal-title">Modal title</div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </BsModal.Header>
        {children}
      </BsModal.Dialog>
    </div>
  )
};

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
