import { ModalDemo, Modal } from "./ModalDemo";
import { Button } from "../button/Button";
import { Input } from "../form-elements/Input";
import { Textarea } from "../form-elements/Textarea";
import BsModal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default {
  title: "Components/Modal",
  component: Modal,
};

const DefaultTemplate = (args) => {
  const DemoComponent = ModalDemo(
    <BsModal.Dialog>
      <BsModal.Header>
        <div className="modal-title">Modal title</div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </BsModal.Header>

      <BsModal.Body>
        <p>Modal Content</p>
      </BsModal.Body>

      <BsModal.Footer>
        <Button variant="outline" color="secondary" size="s" data-bs-dismiss="modal">Button</Button>
        <Button size="s" color='secondary'>Button</Button>
      </BsModal.Footer>
    </BsModal.Dialog>
  )
  return (
    <DemoComponent {...args}></DemoComponent>
  )
}

const MessageTemplate = (args) => {
  const DemoComponent = ModalDemo(
    <BsModal.Dialog>
      <BsModal.Header>
        <div className="modal-title">Modal title</div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </BsModal.Header>

      <BsModal.Body className="ifx__modal-message">
        <Input labelPosition="top" label="Label"></Input>
        <Textarea label="Default"></Textarea>
      </BsModal.Body>

      <BsModal.Footer>
        <Button variant="outline" color="secondary" size="s" data-bs-dismiss="modal">Button</Button>
        <Button size="s" color='secondary'>Button</Button>
      </BsModal.Footer>
    </BsModal.Dialog>
  )
  return (
    <DemoComponent {...args}></DemoComponent>
  )
}

const SmallTemplate = (args) => {
  const DemoComponent = ModalDemo(
    <BsModal.Dialog>
      <BsModal.Header>
        <div className="modal-title">Modal title</div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </BsModal.Header>

      <BsModal.Body>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      </BsModal.Body>
    </BsModal.Dialog>
  )
  return (
    <DemoComponent {...args}></DemoComponent>
  )
}

const AlertTemplate = (args) => {
  const DemoComponent = ModalDemo(
    <BsModal.Dialog className="ifx__modal-alert">
      <div className="ifx__modal-alert-wrapper">
        <FontAwesomeIcon icon={["fal", "circle-exclamation"]} className="ifx__modal-alert-icon"/>
      </div>
      <div>
        <BsModal.Header>
          <div className="modal-title">Alert message</div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </BsModal.Header>

        <BsModal.Body>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
        </BsModal.Body>

        <BsModal.Footer>
          <Button variant="outline" color="secondary" size="s" data-bs-dismiss="modal">Button</Button>
          <Button size="s" color='secondary'>Button</Button>
        </BsModal.Footer>
      </div>
    </BsModal.Dialog>
  )
  return (
    <DemoComponent {...args}></DemoComponent>
  )
}

export const Default = DefaultTemplate.bind({});

Default.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const Message = MessageTemplate.bind({});

Message.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const Small = SmallTemplate.bind({});

Small.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};

export const Alert = AlertTemplate.bind({});

Alert.parameters = {
  controls: { 
    hideNoControlsWarning: true,
  },
};
