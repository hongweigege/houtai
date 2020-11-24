<template>
  <div>
    <div v-for="item in datalist" :key="item">
      <span style="width: 100px;text-align: left; display: inline-block">{{item.title}}</span>
      <el-radio
        v-model="radio"
        :label="index"
        v-for="(items, index) in item.data"
        :key="index"
      >{{items}}</el-radio>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "home",
  data() {
    return {
      radio: "",
      datalist: [{ title: '选项', data: ["日报", "周报", "月报"] }, { title: '方式', data: ["一键发送", "二次发送"] }]
    };
  },

  methods: {},

  // mounted() {
  //   console.log("Home");
  // },
  // activated() {
  //   console.log("Homeactived");
  // }
};
</script>

<style lang="scss" scoped>
p {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>