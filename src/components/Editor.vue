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
      <li v-bind:class="{active: currentTab === 0}">tab 1</li>
      <li v-bind:class="{active: currentTab === 1}">tab 2</li>
      <li v-bind:class="{active: currentTab === 2}">tab 3</li>
      <li v-bind:class="{active: currentTab === 3}">tab 4</li>
      <li v-bind:class="{active: currentTab === 4}">tab 5</li>
      <li v-bind:class="{active: currentTab === 5}">tab 6</li>
    </ol>
   </div>
</template>

<script>
   export default{
       data(){
           return {
               currentTab: 0,
               icons: ['sfz','gongzuo1','dushu','xiangmu1','jiangbei','phone']
           }
       }
   }

</script>

<style>
  #editor{
      min-height: 100px;
      display: flex;
  }
  #editor > nav > ol > li > .icon{
      width: 24px;
      height: 24px;
      fill: white;
  }
  #editor > nav{
      background: black;
      width: 80px;
  }
  #editor > nav > ol > li{
      padding: 16px 0;
      text-align: center;
  }
  #editor > nav > ol > li.active{
      background: white;
  }
  #editor > nav > ol > li.active > .icon{
      fill: black;
  }
  #editor .panes > li{
      display: none;
  }
  #editor .panes > li.active{
      display: block;
  }
</style>
