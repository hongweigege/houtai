<template>
  <div>
    <!-- <el-card :body-style="{ padding: '0px' }">
       <div class="block"><el-avatar shape="square" :size="50" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar></div>
       <img src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" class="image">
      <div class="box">
        <input type="text" />
        <input type="text" />
      </div>
    </el-card>-->
    <!-- <div class="block"><el-avatar shape="square" :size="100" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar></div> -->

    <dl>
      <dt>
        <p>统计人数</p>
        <p>50人</p>
      </dt>
      <dd>
        <el-date-picker
          @blur="dd()"
          v-model="value"
          type="datetime"
          placeholder="选择日期时间"
          style="width: 100px"
        ></el-date-picker>
        <el-date-picker
          @change="getDate()"
          v-model="value"
          type="datetime"
          placeholder="选择日期时间"
          style="width: 100px"
        ></el-date-picker>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      currentDate: new Date(),
      value: "Fri Nov 06 2020 21:35:58 GMT+0800 (中国标准时间)"
    };
  },

  methods: {
    getDate() {
      //   console.log(this.value)
      console.log(1)
    },

    dd() {
      console.log(this.value);
    }
  }
};
</script>

<style scoped>
/* .el-main >>> {
  line-height: 0px !important;
} */
/* 
.box {
  height: 100px;
}

.time {
  font-size: 13px;
  color: #999;
}

.el-card {
  width: 25%;
}

.el-card__body {
  width: 100%;
}

.image {
  width: 100%;
  display: block;
} */

dl {
  background: white;
  width: 200px;
  height: 300px;
  border-radius: 20px;
}

dt {
  /* background-image: url("https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"); */
  height: 200px;
  /* background-clip: border-box;
    background-repeat: no-repeat;
    background-size:cover; */
  border-radius: 20px 20px 0px 0px;
  background-color: gray;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

p {
  color: white;
}
</style>