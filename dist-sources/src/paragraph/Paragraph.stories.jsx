import { Paragraph } from "./Paragraph";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
  title: "Components/Paragraph",
  component: Paragraph,
  args: {
    headline: false,
    headlineText: "Headline",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
  }
};


const DefaultTemplate = (args) => (
  <>
    {args.headline && <h2>{args.headlineText}</h2>}

    <p>{args.text}</p>
  </>
);

export const Default = DefaultTemplate.bind({});



const ColumnCountTemplate = (args) => (
  <>
    {args.headline && <h2>{args.headlineText}</h2>}

    <div class="ifx__paragraph__columncount">
      <p>{args.text}</p>
    </div>
  </>
);

export const ColumnCount = ColumnCountTemplate.bind({});



const ArticleTemplate = (args) => (
  <>
    {args.headline && <h1>{args.headlineText}</h1>}

    <p class="lead">{args.text}</p>
    <p>{args.text}</p>
  </>
);

export const Article = ArticleTemplate.bind({});
Article.args = {
  headline: true,
};