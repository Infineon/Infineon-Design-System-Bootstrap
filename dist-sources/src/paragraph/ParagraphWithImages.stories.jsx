import { ParagraphWithImages } from "./ParagraphWithImages";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default {
  title: "Components/Paragraph With Images",
  component: ParagraphWithImages,
  args: {
    imagePosition: "right",
    imageAspectRatio: "none",
    headline: "The standard lorem ipsum headline",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    listWithIcons: "true",
    alignItems: "center",
  }
};

const DefaultTemplate = (args) => (
  <ParagraphWithImages imageAspectRatio={args.imageAspectRatio} imagePosition={args.imagePosition} alignItems={args.alignItems}>
    <div className="col-md-5">
      <p className="fw-bold">Category</p>
      <h2>{args.headline}</h2>
      <p>{args.text}</p>
      {args.listWithIcons &&
        <ul class="ifx__list-icon ifx__list-icon--check">
          <li>Checkmark</li>
          <li>Checkmark</li>
          <li>Checkmark</li>
        </ul>
      }

      <Button color="primary" variant="solid" size="s" href="#">Go somewhere</Button>
    </div>
  </ParagraphWithImages>
);

export const Default = DefaultTemplate.bind({});