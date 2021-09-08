<template>
  <!-- <div class="card" :style="classObject"> -->
  <div class="box flex">
    <span class="w-auto flex justify-end items-center text-gray-500 p-2">
      <ChecIcon icon="search" class="w-4 h-4 icons" />
    </span>
    <input class="w-full rounded p-2 input-text" type="text" placeholder="Search Components">
  </div>
  <!-- </div> -->
</template>

<script>
import ChecIcon from '../ChecIcon.vue';

export default {
  name: 'TextField',
  components: {
    ChecIcon,
  },
  // props: {
  //   height: {
  //     type: String,
  //     default: '',
  //   },
  //   width: {
  //     type: String,
  //     default: '',
  //   },
  //   bgColor: {
  //     type: String,
  //     default: '',
  //   },
  // },
  // computed: {
  //   classObject() {
  //     return `height:${this.height}px;background-color:${this.bgColor};width:${this.width}px;`;
  //   },
  // },
};
</script>

<style lang="scss">
.box {
  border-radius: 5px;
  background: #FFFFFF;
  height: 32px;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
}
.icons {
  height: 16px;
  color:#E5E5E5;
}
.input-text {
  font-size: 14px;
}
</style>
