<template>
<div>
   <button @click="dump()">跳转新页面</button>
   <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'List',
    methods: {
        dump() {
            this.$router.push({name: 'select1'})
        }
    }
}
</script>

<style lang="scss">

</style>