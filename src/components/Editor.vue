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
        <profileEditor v-bind:profile="profile"/>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <WorkHistoryEditor v-bind:workHistory="workHistory"/>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <h1>学习经历</h1>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <h1>项目经历</h1>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <h1>获奖情况</h1>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <h1>联系方式</h1>
      </li>
    </ol>
   </div>
</template>

<script>
  import profileEditor from './profileEditor'
  import WorkHistoryEditor from './WorkHistoryEditor'
   export default{
     components: { profileEditor , WorkHistoryEditor} ,
     data() {
       return {
         currentTab: 0,
         icons: ['sfz', 'gongzuo1', 'dushu', 'xiangmu1', 'jiangbei', 'phone'],
         profile: {
           name: '',
           city: '',
           birth: ''
         },
         workHistory: [
           {company: '', content: ''}
         ]
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
