import { Typography } from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  args: {
    text: "",
  }
};

const HeadingTemplate = (args) => (
  <>
    <h1>Headline 1</h1>
    <h2>Headline 2</h2>
    <h3>Headline 3</h3>
    <h4>Headline 4</h4>
    <h5>Headline 5</h5>
    <h6>Headline 6</h6>
  </>
);

export const Heading = HeadingTemplate.bind({});



const DisplayTemplate = (args) => (
  <>
    <h1 class="display-1">Display 1</h1>
    <h1 class="display-2">Display 2</h1>
    <h1 class="display-3">Display 3</h1>
    <h1 class="display-4">Display 4</h1>
  </>
);

export const Display = DisplayTemplate.bind({});



const ParagraphTemplate = (args) => (
  <>
    <p>This is a regular paragraph.</p>
    <p class="lead">This is a lead paragraph.</p>
    <p class="small">This is a small paragraph.</p>
    <p class="small fw-bold">This is a small and bold paragraph.</p>
  </>
);

export const Paragraph = ParagraphTemplate.bind({});



const TextTemplate = (args) => (
  <>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
    <p><u>This line of text will render as underlined.</u></p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p><em>This line rendered as italicized text.</em></p>
  </>
);

export const Text = TextTemplate.bind({});