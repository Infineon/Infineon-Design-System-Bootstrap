import { ParagraphWithImages } from "./ParagraphWithImages";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default {
  title: "Components/Paragraph With Images",
  component: ParagraphWithImages,
  args: {
    title: "The standard Lorem Ipsum headline",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    aspectRatio: "16:9",
    imagePosition: "right",
    alignItems: "center",
  }
};

const DefaultTemplate = (args) => (
  <ParagraphWithImages {...args}>
    <div className="col-md-5">
      <p className="ifx__paragraph-category">Category</p>
      <h3>{args.title}</h3>
      <p>{args.text}</p>
      <Button color="primary" href="#">
        Button
      </Button>
    </div>
  </ParagraphWithImages>
);

const BulletpointsTemplate = (args) => (
  <ParagraphWithImages {...args}>
    <div className="col-md-5">
      <p className="ifx__paragraph-category">Category</p>
      <h3>{args.title}</h3>
      <p>{args.text}</p>
      <ul className="list-unstyled">
        <li>
          <FontAwesomeIcon icon={["fal", "check"]}/>
          Checkmark
        </li>
        <li>
          <FontAwesomeIcon icon={["fal", "check"]}/>
          Checkmark
        </li>
        <li>
          <FontAwesomeIcon icon={["fal", "check"]}/>
          Checkmark
        </li>
      </ul>
    </div>
  </ParagraphWithImages>
);

const ArticleTemplate = (args) => (
  <ParagraphWithImages {...args}>
    <p className="ifx__paragraph-without-icon-article-text">Lead But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
    <p>{args.text}</p>
  </ParagraphWithImages>
);

const ImageTopTemplate = (args) => (
  <ParagraphWithImages {...args}>
    <div className="col-md-6">
      <p className="ifx__paragraph-category">Category</p>
      <h3>{args.title}</h3>
      <p>{args.text}</p>
      <Button color="primary" href="#">
        Button
      </Button>
    </div>
  </ParagraphWithImages>
);

export const Default = DefaultTemplate.bind({});

export const Bulletpoints = BulletpointsTemplate.bind({});

export const Article = ArticleTemplate.bind({});
Article.args = {
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  imagePosition: "bottom",
};

export const ImageTop = ImageTopTemplate.bind({});
ImageTop.args = {
  imagePosition: "top",
};
