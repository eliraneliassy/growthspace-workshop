import { Meta } from '@storybook/angular';
import { SliderComponent } from './slider.component';

export default {
  title: 'SliderComponent',
  component: SliderComponent,
} as Meta<SliderComponent>;

export const Primary = {
  render: (args: SliderComponent) => ({
    props: args,
  }),
  args: {
    images: [],
  },
};
