import page from './Button.docs.mdx';
import { Button } from '../Button';

export default {
  title: 'Example/MDX in stories',

  parameters: {
    docs: {
      page,
    },
  },
};

export function PrimaryButton() {
  return <Button primary label='Primary button' />;
}

// const Template = (args) => <Button {...args} />;
// export const PrimaryButton = (args) => {
//   return <Button {...args} />;
// };
// PrimaryButton.args = {
//   label: 'abc',
// };
// export const SecondaryButton = (args) => {
//   return <Button {...args} />;
// };
// SecondaryButton.args = {
//   label: 'aaaaabc',
// };
// export const Test = (args) =>
