<template>
  <main role="main" style="background-color: #ffffff;">
    <div class="d-flex align-items-center position-relative min-height-100vh--lg">
      <header class="position-absolute-top-0 z-index-2">
        <nav class="d-flex justify-content-between align-items-center">
          <!-- Logo -->
          <div class="col-lg-5 col-xl-4 text-lg-center px-0">
            <a class="d-inline-block p-3 p-sm-5" href="javascript: void(0)" aria-label="Front">
              <!--<img class="d-none d-lg-inline-block" src="http://ganiev.me/preview/front-v1.2/assets/svg/logos/logo-white.svg" alt="Logo" style="width: 140px;">-->
              <!--<img class="d-inline-block d-lg-none" src="http://ganiev.me/preview/front-v1.2/assets/svg/logos/logo.svg" alt="Logo" style="width: 140px;">-->
              <img class="d-none d-lg-inline-block" src="/static/logo1.png" alt="Logo" style="width: 240px;">
              <img class="d-inline-block d-lg-none" src="/static/logo1.png" alt="Logo" style="width: 180px;">
            </a>
          </div>
          <!-- End Logo -->

          <!-- Button -->
          <!--<div class="p-3 p-sm-5">-->
            <!--<a class="btn btn-sm btn-primary u-btn-primary transition-3d-hover" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" target="_blank">Buy Now</a>-->
          <!--</div>-->
          <!-- End Button -->
        </nav>
      </header>
      <div class="col-lg-5 col-xl-4 d-none d-lg-flex align-items-center u-gradient-half-primary-v1 min-height-100vh--lg px-0">
        <div class="slogan">也许知道前面有人在等待自己的时候，人就会变得格外勇敢~</div>
      </div>
      <div class="container from-login">
        <div class="row no-gutters">
          <div class="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 u-space-3 u-space-0--lg">
            <b-form class="mt-5" @submit="onSubmit" @reset="onReset">
              <div class="mb-7">
                <h2 class="text-primary font-weight-normal mb-0">Welcome <span class="font-weight-bold">back</span></h2>
                <p>Login to manage your account.</p>
              </div>
              <b-form-group label="账号:" class="mb-4">
                <b-form-input type="text"
                              v-model="loginForm.account"
                              required
                              placeholder="请输入账号">
                </b-form-input>
              </b-form-group>
              <b-form-group label="密码:" class="mb-4">
                <b-form-input type="password"
                              v-model="loginForm.password"
                              required
                              placeholder="请输入密码">
                </b-form-input>
              </b-form-group>
              <div class="mb-5 btn-container">
                <b-button type="submit" variant="primary" class="btn-login">登录</b-button>
                <b-button type="reset" variant="default">重置</b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
 import {login} from '@/api/login'
  export default {
    data () {
      return {
        loginForm: {
          account: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        login({username: this.loginForm.account, password: this.loginForm.password}, (data) => {
          // console.log(data.result)
          localStorage.setItem('meyouone_crm_userInfo', JSON.stringify(data.result))
          this.$router.push({path: '/app/index'})
        })
      },
      onReset (evt) {
        evt.preventDefault()
        this.loginForm.account = ''
        this.loginForm.password = ''
      }
    }
  }
</script>
<style lang="scss" scoped>
  @media (min-width: 992px) {
    .min-height-auto--lg {
      min-height: auto;
    }
    .min-height-100vh--lg {
      min-height: 100vh;
    }
  }
  .u-space-3 {
    padding-top: 4.125rem;
    /*padding-bottom: 8.125rem;*/
  }
  @media (min-width: 992px) {
    .u-space-3--lg {
      padding-top: 8.125rem;
      padding-bottom: 8.125rem;
    }
    .u-space-3-top--lg {
      padding-top: 8.125rem;
    }
    .u-space-4--lg {
      padding-top: 12.5rem;
      padding-bottom: 12.5rem;
    }
    .u-space-4-top--lg {
      padding-top: 12.5rem;
    }
    .u-space-5-top--lg {
      padding-top: 15rem;
    }
    .u-space-5-bottom--lg {
      padding-bottom: 15rem;
    }
    .u-space-0--lg {
      padding-top: 0;
      padding-bottom: 0;
    }
    .u-space-bottom-0--lg {
      padding-bottom: 0;
    }
  }
  @media (min-width: 1200px) {
    .u-space-4-top--xl {
      padding-top: 12.5rem;
    }
    .u-space-5-top--xl {
      padding-top: 15rem;
    }
  }

  .slogan {
    width: 60%;
    margin: 0 auto;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }
  .z-index-2 {
    z-index: 2;
  }
  .position-absolute-top-0 {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .u-gradient-half-primary-v1 {
    /*background-image: linear-gradient(150deg, #2d1582 0%, #19a0ff 100%);*/
    background-image: linear-gradient(150deg, #E5E9EF 0%, #7952B3 100%);
    background-repeat: repeat-x;
  }
  .from-login {
    background-color: #ffffff;
    /*.mt-5 {*/
      /*margin-left: 1rem;*/
      /*margin-right: 1rem;*/
    /*}*/
    .mb-7 {
      margin-bottom: 3rem !important;
      h2 {
        font-size: 1.75rem;
      }
      h2.text-primary {
        color: #7952B3 !important;
      }
      p {
        color: #77838f;
        line-height: 1.7;
        font-size: 1rem;
      }
    }
    .btn-container {
      display: flex;
      align-items: center;
      justify-content: center;
      .btn-login {
        margin-right: 1rem;
      }
    }
  }
</style>
