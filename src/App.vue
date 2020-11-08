<template>
  <el-container direction="horizontal">
    <el-aside width="200px" v-show="true">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        unique-opened
      >
        <template v-for="item in menu">
          <el-menu-item :index="item.path" :key="item.path" v-if="!item.submenu">
            <span slot="title">{{item.text}}</span>
          </el-menu-item>
          <el-submenu :index="item.path" :key="item.path" v-else>
            <template slot="title">
              <span>{{item.text}}</span>
            </template>
            <el-menu-item-group v-for="sub in item.submenu" :key="sub.path">
              <el-menu-item :index="item.path + sub.path">{{sub.text}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header v-show="true">
        <el-row>
          <el-col :span="20">
            <div class="grid-content bg-purple">王者荣耀</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light">
              {{showTabbar.username}}
              <el-button type="text" style="color: white" @click="logout">退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      menu: [
        { text: "首页", path: "/home" },
        {
          text: "英雄管理",
          path: "/order",
          submenu: [
            { text: "列表", path: "/list" },
            { text: "添加", path: "/add" }
          ]
        },
        { text: "个人中心", path: "/mine" }
      ],
      current: "/home"
    };
  },

  computed: {
    ...mapState({
      showTabbar(state) {
        return state.user.currentUser;
      }
    })
  },

  methods: {
    logout() {
      this.$store.commit("user/logout");
      this.$router.replace("/login");
    },

  },
  // beforeRouteLeave(to, from, next) {
  //   this.scrollTop =
  //     document.documentElement.scrollTop || document.body.scrollTop;
  //   next();
  // },

  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     document.body.scrollTop = vm.scrollTop;
  //   });
  // }

  
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}

html,
body {
  height: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  text-align: center;
  height: 100%;
  & > .el-menu {
    height: 100%;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  // line-height: 160px;
}

body > .el-container {
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
