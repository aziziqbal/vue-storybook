<template>
  <div class="card" :style="classObject">
    <div class="card__inner-wrapper" :class="[tailwindClasses, innerClass]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChecCard',
  props: {
    height: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '',
    },
  },
  computed: {
    classObject() {
      return `height:${this.height}px;background-color:${this.bgColor};width:${this.width}px;`;
    },
  },
  mounted() {
    console.log('tinggi : ', this.height);
  },
};
</script>

<style lang="scss">
.card {
  box-shadow: 0px 8px 8px rgba(229, 229, 229, 0.3);
  border-radius: 5px;
  padding:20px;
}
</style>
