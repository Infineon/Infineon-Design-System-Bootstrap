import { Paragraph } from "./ParagraphColumnsWithIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: "Components/Paragraph Columns With Icons",
  component: Paragraph,
  args: {
    icon: true,
    headline: true,
    headlineText: "Headline",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
  }
};


const TwoColumnsTemplate = (args) => (
  <div className="row">
    <div className="col-md-6">
      {args.icon &&  <FontAwesomeIcon icon={["fal", "check"]} size="2x" className="mb-2"/>}
      {args.headline && <h5>{args.headlineText}</h5>}
      <p>{args.text}</p>
    </div>

    <div className="col-md-6">
      {args.icon &&  <FontAwesomeIcon icon={["fal", "check"]} size="2x" className="mb-2"/>}
      {args.headline && <h5>{args.headlineText}</h5>}
      <p>{args.text}</p>
    </div>
  </div>
);

export const TwoColumns = TwoColumnsTemplate.bind({});




const ThreeColumnsWithIconsTemplate = (args) => (
  <div className="row">
    <div className="col-md-4">
      {args.icon &&  <FontAwesomeIcon icon={["fal", "check"]} size="2x" className="mb-2"/>}
      {args.headline && <h5>{args.headlineText}</h5>}
      <p>{args.text}</p>
    </div>

    <div className="col-md-4">
      {args.icon &&  <FontAwesomeIcon icon={["fal", "check"]} size="2x" className="mb-2"/>}
      {args.headline && <h5>{args.headlineText}</h5>}
      <p>{args.text}</p>
    </div>

    <div className="col-md-4">
      {args.icon &&  <FontAwesomeIcon icon={["fal", "check"]} size="2x" className="mb-2"/>}
      {args.headline && <h5>{args.headlineText}</h5>}
      <p>{args.text}</p>
    </div>
  </div>
);

export const ThreeColumnsWithIcons = ThreeColumnsWithIconsTemplate.bind({});



const FourColumnsWithIconsTemplate = (args) => (
  <div className="row">
    <div className="col-md-3">
      {args.icon &&  <FontAwesomeIcon icon={["fal", "check"]} size="2x" className="mb-2"/>}
      {args.headline && <h5>{args.headlineText}</h5>}
      <p>{args.text}</p>
    </div>

    <div className="col-md-3">
      {args.icon &&  <FontAwesomeIcon icon={["fal", "check"]} size="2x" className="mb-2"/>}
      {args.headline && <h5>{args.headlineText}</h5>}
      <p>{args.text}</p>
    </div>

    <div className="col-md-3">
      {args.icon &&  <FontAwesomeIcon icon={["fal", "check"]} size="2x" className="mb-2"/>}
      {args.headline && <h5>{args.headlineText}</h5>}
      <p>{args.text}</p>
    </div>

    <div className="col-md-3">
      {args.icon &&  <FontAwesomeIcon icon={["fal", "check"]} size="2x" className="mb-2"/>}
      {args.headline && <h5>{args.headlineText}</h5>}
      <p>{args.text}</p>
    </div>
  </div>
);

export const FourColumnsWithIcons = FourColumnsWithIconsTemplate.bind({});
