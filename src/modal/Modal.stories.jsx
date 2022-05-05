import { ModalDemo, Modal } from "./ModalDemo";
import { Input } from "../form-elements/Input";
import { Textarea } from "../form-elements/Textarea";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {size: "m"}
};

const DefaultTemplate = (args) => {
  const DemoComponent = ModalDemo()
  return (
    <DemoComponent {...args}></DemoComponent>
  )
}

const MessageTemplate = (args) => {
  const DemoComponent = ModalDemo(
    <>
      <Input labelPosition="top" label="Modal Content"></Input>
      <Textarea label="Message"></Textarea>
    </>
  )
  return (
    <DemoComponent {...args}></DemoComponent>
  )
}

export const Default = DefaultTemplate.bind({});

export const Message = MessageTemplate.bind({});
