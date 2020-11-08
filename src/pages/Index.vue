<template>
  <keep-alive include="Mine" @scroll="dd()">
    <router-view></router-view>
  </keep-alive>

</template>

<script>
export default {
  name: "Index",
  data() {

    return {};
  },

  methods: {
    dd() {
      console.log(1)
    }
  },

  
};
</script>

<style lang="scss" scoped>
</style>