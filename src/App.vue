<template>
  <div id="app"  v-bind:class="{previewMode: previewMode}">
    <router-view/>
    
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default { 
  data() {
    return {
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
    }
  },
  components: {
   Topbar, Editor, Preview
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.topbar{
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3px rgb(0, 0, 0, 0.3);
}
#app main{
  display: flex;
  flex: 1;
  background: #ddd;
}
#app main .editor{
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
  padding: 10px;
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
  padding: 16px 16px;
}
.previewMode > #topbar {
  display: none;
}
.previewMode #editor {
  display: none;
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
</style>
