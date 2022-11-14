
export default { 
  title: 'Components/MyButton'
}

const Template = (args) => `<my-button btnname="${args.btnname}"></my-button>`;

export const Example = Template.bind({});
Example.args = {
  btnname: 'new name whatever'
}

const ButtonBadgeTemplate = (args) => `<my-button label="${args.label}"></my-button>`

export const ButtonBadge = ButtonBadgeTemplate.bind({})
ButtonBadge.args = { 
  label: 'there is a badge here'
}