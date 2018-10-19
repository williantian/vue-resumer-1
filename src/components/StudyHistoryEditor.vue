<template>
    <div>
      <h1>学习经历</h1>
      <el-form>
        <div class="container" v-for="(item, index) in items">
          <el-form-item v-for="key in keys" v-bind:label="labels[key]" :key="key">
            <el-input v-model="item[key]"></el-input>
          </el-form-item>

          <i class="el-icon-error" v-on:click="removeItem(index)"></i>
          <hr>
        </div>
        <el-button type="primary" v-on:click="addItem">添加一项</el-button>
      </el-form>
    </div>
</template>

<script>
    export default {
      props: ['items', 'labels'] ,
      computed: {
        keys() {
          return Object.keys(this.items[0])
        }
      },
      methods: {
        addItem(){
          const empty={}
          this.keys.map((key)=>{
            empty[key] = ''
          })
          this.items.push(empty)
        },
        removeItem(index){
          this.items.splice(index, 1)
        }
      }
    }
</script>
