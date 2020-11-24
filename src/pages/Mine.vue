<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      row-key="date"
      tooltip-effect="dark"
      style="width: 100%"
      @select="checkOption"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        :selectable="selectable"
        :reserve-selection="true"
      ></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio" @change="radioEvent()">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
      </el-radio-group>
    </div>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[2, 3]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next"
      :total="total"
    ></el-pagination>
    <button @click="btn()">按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '妈妈',
      currentPageshanghai: 1,
      currentPagebeijing: 1,
      pageSize: 2,
      radio: "上海",
      total: 7,
      currentPage: 1,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      selectOptions: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  computed: {},

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(
            this.tableData.find(item => {
              return row.date == item.date; // 注意这里寻找的字段要唯一，示例仅参考
            }),
            true
          );
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    btn() {
      this.$refs.multipleTable.clearSelection();
    },

    checkOption(selection, row) {
      console.log(selection, row);

    },
    selectable(row) {
      let index = this.selectOptions.findIndex(item => item.date == row.date);
      if (index !== -1) {
        return false;
      } else {
        return true;
      }
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      console.log(this.radio);
      if (this.radio == "上海") {
        this.currentPageshanghai = val;
      } else {
        this.currentPagebeijing = val;
      }
      this.currentPage = val;
    },

    radioEvent() {
      if (this.radio == "上海") {
        this.tableData = [
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-06",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-07",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ];
        this.total = this.tableData.length;
        this.currentPage = this.currentPageshanghai;
      } else {
        this.tableData = [
          {
            date: "2019-05-03",
            name: "林洪玮",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2019-05-02",
            name: "林洪玮",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2019-05-04",
            name: "林洪玮",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2019-05-01",
            name: "林洪玮",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2019-05-08",
            name: "林洪玮",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2019-05-06",
            name: "林洪玮",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2019-05-07",
            name: "林洪玮",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ];
        this.total = this.tableData.length;
        this.currentPage = this.currentPagebeijing;
      }
    }
  },

  mounted() {
    this.selectOptions.forEach(row => {
      this.$refs.multipleTable.toggleRowSelection(
        this.tableData.find(item => {
          return row.date == item.date; // 注意这里寻找的字段要唯一，示例仅参考
        }),
        true
      );
    });
  }
};
</script>

<style lang="scss" scoped>
</style>