<template>
  <div class="page" >
    <div class="pageContainer">
      <div id="main" v-bind:class="{previewMode: previewMode}">
        <Topbar class="topbar" v-on:preview="preview"/>
        <main>
          <Editor v-bind:resume="resume" class="editor"/>
          <Preview v-bind:resume="resume" class="preview" v-on:exitPreview="exitPreview"/>
        </main>
      </div>
    </div>
  </div>

</template>

<script>
import Topbar from './Topbar'
import Editor from './Editor'
import Preview from './Preview'

export default {
  data() {
    return {
      showCode: false ,
      previewMode: false ,
      resume: {
        profile: {
          name: '' ,
          city: '' ,
          birth: ''
        },
        workHistory: [
          {company: '', content: ''}
        ] ,
        studyHistory: [
          {school: '', duration: '', degree: '',}
        ] ,
        projects: [
          {name: '', content: ''}
        ] ,
        awards: [
          {name: ''}
        ] ,
        contacts: {
          QQ:'', wechat: '', email: '', phone:''
        }
      }
    }
  },
  methods: {
    preview(){
      this.previewMode = true
    },
    exitPreview(){
      this.previewMode = false
    },
    signInComfirm(){
      this.showCode = true
    }
  },
  components: {
   Topbar, Editor, Preview ,
  }
}
</script>

<style>
.pageContainer{
    flex: 1;
}
.topbar{
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.3);
}
#main{
  height: 100%;
  display: flex;
  flex-direction: column;
}
#main main{
  display: flex;
  flex: 1;
  background: #ddd;
}
#main main .editor{
  width: 40em;
  margin: 16px 8px 16px 16px;
  background: white;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;
}
 main .preview{
  flex: 1;
  margin: 16px 16px 16px 8px;
  background: white;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.previewMode .preview{
  max-width: 800px;
  margin: 32px auto;
  padding: 10px 20px;
}
.previewMode main{
  height: 100vh;
}
.exitPreview{
  display: none;
}
.previewMode .exitPreview{
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: inline-block;
}
.previewMode #topbar, .previewMode #editor{
    display: none;
}


/*signContainer*/
.page{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.signContainer {
  height: 460px;
  max-width: 800px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -400px;
  margin-top: -230px;
  justify-content: center;
  align-items: center;
}
</style>
