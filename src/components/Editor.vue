<template>
   <div id="editor">
    <nav>
      <ol>
        <li 
        v-for="i in [0,1,2,3,4,5]"
        v-bind:class="{active: currentTab === i}" 
        v-on:click="currentTab = i">
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <li v-bind:class="{active: currentTab === 0}">
        <ProfileEditor v-bind:profile="resume.profile"/>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company: '公司', content: '工作内容'}" v-bind:title="'工作经历'"/>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school: '学校', duration: '时间', degree: '学历'}" v-bind:title="'学习经历'" />
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name: '名称', content: '内容'}" v-bind:title="'项目经历'" />
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <ArrayEditor v-bind:items="resume.awards" v-bind:labels="{name: '获奖详情'}" v-bind:title="'获奖情况'"/>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <h1>联系方式</h1>
        <el-form>
          <el-form-item label="QQ">
            <el-input v-model="resume.contacts.QQ"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="resume.contacts.wechat"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="resume.contacts.email"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="resume.contacts.phone"></el-input>
          </el-form-item>
        </el-form>
      </li>
    </ol>
   </div>
</template>

<script>
  import ProfileEditor from './ProfileEditor'
  import ArrayEditor from './ArrayEditor'
   export default{
     props: ['resume'] ,
     components: { ProfileEditor , ArrayEditor } ,
     data() {
       return {
         currentTab: 0,
         icons: ['sfz', 'gongzuo1', 'dushu', 'xiangmu1', 'jiangbei', 'phone'],

       }
     },
     methods: {

     }
   }

</script>

<style>
  #editor {
    min-height: 100px;
    display: flex;
  }

  #editor > nav > ol > li > .icon {
    width: 24px;
    height: 24px;
    fill: white;
  }

  #editor > nav {
    background: black;
    width: 80px;
  }

  #editor > nav > ol > li {
    padding: 16px 0;
    text-align: center;
  }

  #editor > nav > ol > li.active {
    background: white;
  }

  #editor > nav > ol > li.active > .icon {
    fill: red;
  }
  #editor .panes {
    flex: 1;
  }
  #editor .panes > li {
    display: none;
    padding: 32px;
    width: 100%;
  }
  #editor .panes  .container{
    position: relative;
  }
  #editor .panes .container .el-icon-error{
    position: absolute;
    top: 0;
    right: 0;
  }
  #editor .panes > li.active {
    display: block;
    height: 100%;
    overflow: auto;
  }


</style>
