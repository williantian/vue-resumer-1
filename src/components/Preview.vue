<template>
  <div>
    <h1>个人信息</h1>
    <p>{{resume.profile.name || '请填写名字'}}</p>
    <p>{{resume.profile.birth || '请填写出生年月'}} | {{resume.profile.city || '请填写城市'}}</p>
    <hr>

    <section v-if="filter(resume.workHistory).length > 0">
      <h2>工作经历</h2>
      <ol>
        <li v-for="work in filter(resume.workHistory)" :key="work.id">
          {{work.company}}
          {{work.content}}
        </li>
      </ol>
    </section>
    <section v-if="filter(resume.studyHistory).length > 0">
    <h2>学习经历</h2>
    <ol>
      <li v-for="item in filter(resume.studyHistory)" :key="item.id">
        {{item.school}}
        {{item.duration}}
        {{item.degree}}
      </li>
    </ol>
    </section>
    <section v-if="filter(resume.projects).length > 0">
      <h2>项目经历</h2>
      <ol>
        <li v-for="project in filter(resume.projects)" :key="project.id">
          {{project.name}}
          {{project.content}}
        </li>
      </ol>
    </section>
    <section v-if="filter(resume.awards).length > 0">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in filter(resume.awards)" :key="item.id">
          {{item.name}}
        </li>
      </ol>
    </section>
    <hr>
      <h1>联系方式</h1>
      <p>{{resume.contacts.QQ || '请填写QQ'}}</p>
      <p>{{resume.contacts.wechat || '请填写微信'}}</p>
      <p>{{resume.contacts.email || '请填写邮箱'}}</p>
      <p>{{resume.contacts.phone || '请填写电话'}}</p>
    <section>
      <el-button class="exitPreview" v-on:click="exitPreview">关闭预览</el-button>
    </section>  
  </div>
</template>
<script>
  export default{
    props: ['resume'] ,
    methods: {
      filter(array){ //找出非空对象
        return array.filter(item=> !this.isEmpty(item))
      },
      isEmpty(object){ //只要有一项不为空 就不是空对象
        let empty = true
        for(let key in object){
          if(object[key]) {
            empty = false
            break
          }
        }
        return empty
      },
    }
  }
</script>
<style>
  #Preview{
  }
</style>
