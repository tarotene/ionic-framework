import { IonButton } from '@ionic/vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/IonButton/Sizes',
  component: IonButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large']
    }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { IonButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ion-button v-bind="args">{{ args.label }}</ion-button>',
});

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  size: 'default',
  label: 'Button',
};

export const Large = Template.bind({
  template: '<ion-button :size="large">{{ args.label }}</ion-button>'
});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({
  template: '<ion-button :size="small">{{ args.label }}</ion-button>'
});
Small.args = {
  siz: 'small',
  label: 'Button',
};
