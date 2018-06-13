<template>
  <div class="container customer-form" :style="{width: pcFlag?'40%':'85%'}">
  <!--<div class="container customer-form">-->
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group label="姓名:">
        <b-form-input type="text"
                      v-model="customer.name"
                      required
                      placeholder="请输入姓名">
        </b-form-input>
      </b-form-group>
      <b-form-group label="性别:">
        <!--<b-form-radio-group id="exampleChecks"-->
        <!--v-model="customer.gender"-->
        <!--:options="options">-->
        <!--</b-form-radio-group>-->
        <b-form-radio-group v-model="customer.sex">
          <b-form-radio value="1">男</b-form-radio>
          <b-form-radio value="0">女</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group label="电话:">
        <b-form-input type="tel"
                      v-model="customer.tel"
                      required
                      placeholder="请输入电话">
        </b-form-input>
      </b-form-group>
      <b-form-group label="微信号:">
        <b-form-input type="text"
                      v-model="customer.wxId"
                      required
                      placeholder="请输入微信号">
        </b-form-input>
      </b-form-group>
      <b-form-group label="微信昵称:">
        <b-form-input type="text"
                      v-model="customer.wxNickname"
                      required
                      placeholder="请输入微信昵称">
        </b-form-input>
      </b-form-group>
      <b-form-group label="客户来源:">
        <b-form-input type="text"
                      v-model="customer.comeFrom"
                      required
                      placeholder="请输入客户来源">
        </b-form-input>
      </b-form-group>
      <b-form-group label="行程类型:">
        <b-form-checkbox-group v-model="customer.tripType">
          <b-form-checkbox value="1">婚礼</b-form-checkbox>
          <b-form-checkbox value="2">婚拍</b-form-checkbox>
          <b-form-checkbox value="3">度蜜月</b-form-checkbox>
          <b-form-checkbox value="4">亲子</b-form-checkbox>
          <b-form-checkbox value="5">旅行</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <div class="btn-container">
        <b-button type="submit" variant="primary" class="btn-save">保存</b-button>
        <b-button type="reset" variant="default">取消</b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
  import {isPC} from '@/common/utils'
  import {addCustomer} from '@/api/index'
  export default {
    data () {
      return {
        pcFlag: true,
        customer: {
          name: '',
          sex: 1,
          tel: '',
          wxId: '',
          wxNickname: '',
          comeFrom: '',
          tripType: []
        }
      }
    },
    mounted () {
      this.pcFlag = isPC()
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        // 深拷贝对象
        let obj = {...this.customer}
        obj.tripType = obj.tripType.join(',')
        addCustomer(obj, (data) => {
          this.$router.push({path: '/app/customer', query: data.result})
        })
      },
      onReset () {
        this.$router.push({path: '/app/index'})
      }
    }
  }
</script>
<style lang="scss" scoped>
  .customer-form {
    background-color: #ffffff;
    padding: 1rem;
    margin: 1rem auto;
    .btn-container {
      text-align: center;
      .btn-save {
        margin-right: .6rem;
      }
    }
  }
</style>
