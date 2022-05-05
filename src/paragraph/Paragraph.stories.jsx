import { Paragraph } from "./Paragraph";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default {
  title: "Components/Paragraph",
  component: Paragraph,
  args: {
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
  }
};

const DefaultTemplate = (args) => (
  <Paragraph {...args}>
    <div className="col-12 col-md-10">
      <div className="ifx__paragraph-without-icon">
        <p>{args.text}</p>
      </div>
    </div>
  </Paragraph>
);

const TwoColumnsTemplate = (args) => (
  <Paragraph {...args}>
    <div className="ifx__paragraph-without-icon">
      <p className="ifx__paragraph__columns">{args.text}</p>
    </div>
  </Paragraph>
);

const ArticleTemplate = (args) => (
  <Paragraph {...args}>
    <div className="ifx__paragraph-without-icon">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <p className="ifx__paragraph-without-icon-article-text">Lead But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
          <p>{args.text}</p>
        </div>
      </div>
    </div>
  </Paragraph>
);

const TwoColumnsWithIconsTemplate = (args) => (
  <Paragraph {...args}>
    <div className="row ifx__bulletpoints">
      <div className="col-md-6">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-6">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>
    </div>
  </Paragraph>
);

const ThreeColumnsWithIconsTemplate = (args) => (
  <Paragraph {...args}>
    <div className="row ifx__bulletpoints">
      <div className="col-md-4">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-4">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-4">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>
    </div>
  </Paragraph>
);

const FourColumnsWithIconsTemplate = (args) => (
  <Paragraph {...args}>
    <div className="row ifx__bulletpoints">
      <div className="col-md-3">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-3">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-3">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-3">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>
    </div>
  </Paragraph>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};

export const TwoColumns = TwoColumnsTemplate.bind({});
TwoColumns.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings."
};

export const Article = ArticleTemplate.bind({});
Article.args = {
  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
};

export const TwoColumnsWithIcons = TwoColumnsWithIconsTemplate.bind({});

export const ThreeColumnsWithIcons = ThreeColumnsWithIconsTemplate.bind({});

export const FourColumnsWithIcons = FourColumnsWithIconsTemplate.bind({});
