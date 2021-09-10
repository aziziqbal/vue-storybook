<template>
  <ul class="accordion">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'Accordion',
  provide() {
    return { Accordion: this.Accordion };
  },
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius:0px;

  &__item:last-child {
    border-bottom: none;
  }
}
</style>
