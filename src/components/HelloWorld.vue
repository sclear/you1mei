<template>
  <div class="hello">
    <!-- <div v-for="(item,index) in item" :key="index">
      <div>{{item | sliceTxt}}</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: ['Welcome to Your Vue.js App','Welcome to Your Vue.js App']
    }
  },
  // filters:{
  //   sliceTxt(val) {
  //     if(true){

  //       if(val.length > 5){
  //         return val.slice(0,4) + '...'
  //       } else{
  //         return val
  //       }

  //     }
  //   }

  // }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
