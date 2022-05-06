import { Alert } from "./Alert";
import { Link } from "../link/Link";

export default {
  title: "Components/Alert",
  component: Alert,
  args: {
    variant: "primary",
    closable: true,
    icon: true,
  }
};

const DefaultTemplate = (args) => {
  const variantUppercase = 
    args.variant === "primary" ? "Primary"
    : args.variant === "secondary" ? "Secondary"
    : args.variant === "success" ? "Success" 
    : args.variant === "danger" ? "Danger" 
    : args.variant === "warning" ? "Warning" 
    : args.variant === "color-gray-100" ? "Color-gray-100" 
    : undefined;

  return (
    <Alert {...args}>
      <div className="ifx__alert-text">
        <span className="ifx__alert-highlighted">{variantUppercase}!</span> A simple {args.variant} alert with <Link href="#" linkText="an example link"></Link>. Give it a click if you like.      
      </div>
    </Alert>
  );
}

const AdditionalContentTemplate = (args) => (
  <Alert {...args}>
    <div className="ifx__alert-wrapper">
      <div className="alert-heading">Headline</div>
      <p className="mb-0">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </div>
  </Alert>
);

export const Default = DefaultTemplate.bind({});

export const AdditionalContent = AdditionalContentTemplate.bind({});
AdditionalContent.args = {
  variant: "color-gray-100",
  icon: false,
};
