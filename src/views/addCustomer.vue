<template>
  <div class="container customer-form" :style="{width: pcFlag?'40%':'85%'}">
  <!--<div class="container customer-form">-->
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="exampleInputGroup1"
                    label="姓名:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="customer.name"
                      required
                      placeholder="请输入姓名">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="来源:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="customer.from"
                      required
                      placeholder="请输入来源">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="微信:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="customer.wx"
                      required
                      placeholder="请输入微信">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup4"
                    label="电话:"
                    label-for="exampleInput4">
        <b-form-input id="exampleInput4"
                      type="tel"
                      v-model="customer.tel"
                      required
                      placeholder="请输入电话">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleGroup2" label="性别:">
        <!--<b-form-radio-group id="exampleChecks"-->
                            <!--v-model="customer.gender"-->
                            <!--:options="options">-->
        <!--</b-form-radio-group>-->
        <b-form-radio-group id="exampleChecks"
                            v-model="customer.gender">
          <b-form-radio value="1">男</b-form-radio>
          <b-form-radio value="2">女</b-form-radio>
        </b-form-radio-group>
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
  export default {
    data () {
      return {
        pcFlag: true,
        customer: {
          name: '',
          from: '',
          wx: '',
          tel: '',
          gender: '1'
        },
        options: [
          { text: '男', value: '1' },
          { text: '女', value: '2' }
        ]
      }
    },
    mounted () {
      this.pcFlag = isPC()
    },
    methods: {
      onSubmit () {
        console.log('提交')
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
