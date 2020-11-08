<template>
  <div>
    Mine
    <p>
      <input type="text" ref="input" />
      <button>复制<button>
    </p>
    
  </div>
</template>

<script>
export default {
  name: "Mine",
  data () {
    return {
      
    }
  },
  activated() {
    console.log("Mineactived");
  },
  methods: {
   


  },
 
 
};
</script>

<style lang="scss" scoped>
div /deep/ {
  height: 1000px;
}
</style>