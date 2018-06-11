<template>
  <div>
    <nav class="navbar header">
      <!--<div class="container-fluid">-->
        <a class="navbar-brand left" href="javascript:void(0)">
          <img class="img" src="../assets/logo.png" alt="">
          <div class="text">
            <p class="ch">蜜游网管理系统</p>
            <p class="en">CUSTOMER FOLLOW-UP SYSTEM</p>
          </div>
        </a>
        <div class="right">
          <span>小明</span>
          <span>，欢迎登录</span>
          <i class="fas fa-power-off" @click="logout"></i>
        </div>
      <!--</div>-->
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    methods: {
      logout () {
        // this.$root.showAlert()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    /*background-color: slateblue;*/
    background-color: #7952B3;
    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      .img {
        width: 4.5rem;
        height: 4.5rem;
      }
      .text {
        color: #ffffff;
        margin-left: 1rem;
        .ch {
          font-size: 1.68rem;
          font-weight: bold;
          margin-bottom: 0;
        }
        .en {
          font-size: .8rem;
          margin-bottom: 0;
        }
      }
    }
    .right {
      color: #ffffff;
      i {
        margin-left: .2rem;
        font-size: 1.4rem;
      }
    }
  }
</style>
