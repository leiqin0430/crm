<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <!--<b-alert :show="dismissCountDown"-->
             <!--dismissible-->
             <!--variant="warning"-->
             <!--@dismissed="dismissCountDown=0"-->
             <!--@dismiss-count-down="countDownChanged">-->
      <!--This alert will dismiss after {{dismissCountDown}} seconds...-->
    <!--</b-alert>-->
  </div>
</template>

<script>
export default {
  name: 'app'
  // data () {
  //   return {
  //     dismissSecs: 5,
  //     dismissCountDown: 0
  //   }
  // },
  // computed: {
  //   dismissSecs: () => {
  //     return this.$root.dismissSecs
  //   },
  //   dismissCountDown: () => {
  //     return this.$root.dismissCountDown
  //   }
  // },
  // methods: {
  //   countDownChanged (dismissCountDown) {
  //     this.dismissCountDown = dismissCountDown
  //   },
  //   showAlert () {
  //     this.dismissCountDown = this.dismissSecs
  //   }
  // }
}
</script>

<style lang="scss">
  @import "scss/custom.scss";
  @import "~bootstrap/scss/bootstrap.scss";
  body {
    background-color: #f0f0f0;
  }
  /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  /*}*/
</style>
