<template>
    <div>
      <h1>{{title}}</h1>
      <el-form>
        <div class="container" v-for="(work, index) in items">
          <el-form-item v-for="key in keys" v-bind:label="labels[key] || key" :key="key">
            <el-input v-model="work[key]"></el-input>
          </el-form-item>
          <i class="el-icon-error" v-on:click="removeWorkHistory(index)"></i>
          <hr>
        </div>
        <el-button type="primary" v-on:click="addWorkHistory">添加一项</el-button>
      </el-form>
    </div>
</template>

<script>
  export default {
    props: ['items' , 'labels' , 'title'],
    computed: {
      keys() {
        return Object.keys(this.items[0])
      }
    },
    methods: {
      addWorkHistory() {
        const empty = {}
        this.keys.map((key)=>{
          empty[key] = ''
        })
        this.items.push(empty)
      },
      removeWorkHistory(index) {
        this.items.splice(index, 1)
      }
    }
  }
</script>

<style scoped>

</style>
