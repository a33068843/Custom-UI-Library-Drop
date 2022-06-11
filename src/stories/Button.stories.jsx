import Page from './Button.docs.mdx';
import { Button } from './Button';

export default {
  title: 'Example/MMDX in stories',
  argTypes: {
    label: { description: 'Fuck you', control: 'text' },
    borderWidth: { control: { type: 'number', min: 0, max: 10 } },
  },
  parameters: {
    docs: {
      // page: Page,
      page: null,
    },
  },
};

// export function PrimaryButton() {
//   return <Button primary label='Primary button' />;
// }

// const Template = (args) => <Button {...args} />;
export const PrimaryButton = (args) => {
  return <Button {...args} />;
};
PrimaryButton.args = {
  label: 'abc',
};

// export const SecondaryButton = (args) => {
//   return <Button {...args} />;
// };
// SecondaryButton.args = {
//   label: 'aaaaabc',
// };
// export const Test = (args) =>
