<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
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
main{
  display: flex;
  flex: 1;
  background: #ddd;
}
main .editor{
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
</style>
