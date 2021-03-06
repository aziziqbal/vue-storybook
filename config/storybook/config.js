import Vue from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { addDecorator } from '@storybook/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import VueI18n from 'vue-i18n';
// eslint-disable-next-line import/no-extraneous-dependencies
// import VueTailwindAccordion from 'vue-tailwind-accordion';
import lang from '../../src/lang';

Vue.use(VueI18n);
// Vue.use(VueTailwindAccordion);

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: lang,
  silentFallbackWarn: true,
  silentTranslationWarn: true,
});

addDecorator(() => ({
  template: '<story/>',
  i18n,
}));
