import { ModalDemo, Modal } from "./ModalDemo";
import { Button } from "../button/Button";
import { Input } from "../form-elements/Input";
import { Textarea } from "../form-elements/Textarea";
import BsModal from "react-bootstrap/Modal";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {size: "m"}
};

const DefaultTemplate = (args) => {
  const DemoComponent = ModalDemo(
    <>
      <BsModal.Body>
        <p>Modal Content</p>
      </BsModal.Body>

      <BsModal.Footer>
        <Button variant="outline" color="primary" size="s" data-bs-dismiss="modal">Button</Button>
        <Button size="s">Button</Button>
      </BsModal.Footer>
    </>
  )
  return (
    <DemoComponent {...args}></DemoComponent>
  )
}

const MessageTemplate = (args) => {
  const DemoComponent = ModalDemo(
    <>
      <BsModal.Body>
        <Input labelPosition="top" label="Label"></Input>
        <Textarea label="Default"></Textarea>
      </BsModal.Body>

      <BsModal.Footer>
        <Button variant="outline" color="primary" size="s" data-bs-dismiss="modal">Button</Button>
        <Button size="s">Button</Button>
      </BsModal.Footer>
    </>
  )
  return (
    <DemoComponent {...args}></DemoComponent>
  )
}

const SmallTemplate = (args) => {
  const DemoComponent = ModalDemo(
    <>
      <BsModal.Body>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      </BsModal.Body>
    </>
  )
  return (
    <DemoComponent {...args}></DemoComponent>
  )
}

export const Default = DefaultTemplate.bind({});

export const Message = MessageTemplate.bind({});

export const Small = SmallTemplate.bind({});
