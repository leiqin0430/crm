<template>
  <div class="container v-container">
    <div class="page-title">客户详情</div>
    <div class="row">
      <div class="col-sm-7">
        <div class="row customer">
          <div class="col-sm-3">
            <!--<div class="el-progress">-->
              <!--<div style="width: 100%; height: 100%;">-->
                <!--<svg viewBox="0 0 100 100">-->
                  <!--<path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" stroke="#e5e9f2" stroke-width="4.8" fill="none" class="el-progress-circle__track"></path>-->
                  <!--<path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" stroke-linecap="round" stroke="#20a0ff" stroke-width="4.8" fill="none" class="el-progress-circle__path" style="stroke-dasharray: 299.08px, 299.08px; stroke-dashoffset: 224.31px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>-->
                <!--</svg>-->
              <!--</div>-->
              <!--<div class="el-progress__text">25%</div>-->
            <!--</div>-->
            <div class="el-progress">
            <div style="width: 100%; height: 100%;">
            <svg id="circleProcess" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50%" cy="50%" r="40%" stroke-width="10%" stroke="#D1D3D7" fill="none" stroke-dashoffset="0%"></circle>
              <circle id="circle" cx="50%" cy="50%" r="40%" stroke-width="10%"></circle>
            </svg>
            </div>
            <div class="el-progress__text">25%</div>
            </div>
          </div>
          <div class="col-sm-9">
            <div class="row">
              <div class="col-sm-6">姓名: 雷芹</div>
              <div class="col-sm-6">来源: app</div>
            </div>
            <div class="row">
              <div class="col-sm-6">微信: 昵称</div>
              <div class="col-sm-6">电话: 18628372806</div>
            </div>
          </div>
        </div>
        <!--<b-nav tabs>-->
          <!--<b-nav-item active>基本资料</b-nav-item>-->
          <!--<b-nav-item>订单信息</b-nav-item>-->
        <!--</b-nav>-->
        <b-tabs>
          <b-tab title="基本资料">
            <div class="cus-container">
              <b-form>
                <div class="row">
                  <div class="col-sm-7">
                    <b-form-group label="客户类别:" horizontal>
                      <b-form-checkbox-group id="checkboxes1" name="type" v-model="customer.type">
                        <b-form-checkbox value="1">婚礼</b-form-checkbox>
                        <b-form-checkbox value="2">婚拍</b-form-checkbox>
                        <b-form-checkbox value="3">蜜月旅行</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                  </div>
                  <div class="col-sm-5">
                    <b-form-group label="婚期:" horizontal>
                      <b-form-input type="date"
                                    v-model="customer.weddingDay"
                                    required>
                      </b-form-input>
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <b-form-group label="意向目的地:" horizontal></b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-7">
                    <b-form-group label="出发地:" horizontal>
                      <b-form-input type="text"
                                    v-model="customer.setOutPlace"
                                    required>
                      </b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-sm-5">
                    <b-form-group label="酒店类型:" horizontal>
                      <b-form-select v-model="customer.hotelType">
                        <option :value="null">-请选择-</option>
                        <option value="a">奢华五星</option>
                        <option value="b">豪华四星</option>
                        <option value="c">舒适三星及以下</option>
                        <option value="d">民宿及特色酒店</option>
                      </b-form-select>
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-8">
                    <b-form-group label="出行人数: 成人:" horizontal>
                      <b-form-input type="number"
                                    v-model="customer.travelNumber.adult"
                                    required>
                      </b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-sm-4">
                    <b-form-group label="儿童:" horizontal>
                      <b-form-input type="number"
                                    v-model="customer.travelNumber.children"
                                    required>
                      </b-form-input>
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-7">
                    <b-form-group label="出行时间:" horizontal>
                      <b-form-input type="date"
                                    v-model="customer.travelTime.start"
                                    required>
                      </b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-sm-5">
                    <b-form-group label="至" horizontal>
                      <b-form-input type="date"
                                    v-model="customer.travelTime.end"
                                    required>
                      </b-form-input>
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-8">
                    <b-form-group label="行程天数: 天:" horizontal>
                      <b-form-input type="number"
                                    v-model="customer.travelDays.day"
                                    required>
                      </b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-sm-4">
                    <b-form-group label="晚:" horizontal>
                      <b-form-input type="number"
                                    v-model="customer.travelDays.night"
                                    required>
                      </b-form-input>
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-7">
                    <b-form-group label="预算:" horizontal>
                      <b-form-input type="text"
                                    v-model="customer.budget"
                                    required>
                      </b-form-input>
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-7">
                    <b-form-group label="备注:" horizontal>
                      <b-form-textarea v-model="customer.desc"
                                       placeholder="请输入需要注意的事项（非必填）"
                                       :rows="3"
                                       :max-rows="6">
                      </b-form-textarea>
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-2">
                    <label>报价记录:</label>
                  </div>
                  <div class="col-sm-10">
                    <!--<b-form-group label="报价记录:" horizontal>-->
                    <div>热辣普吉 蜜月之旅 7天5晚普吉岛动感体验之旅<span>￥21000</span></div>
                    <div>浪漫蜜月·醉美普吉岛7天5晚双岛双酒店奢华蜜月之旅<span>￥23000</span></div>
                    <!--</b-form-group>-->
                    <div>
                      <b-button type="button" variant="primary">报价</b-button>
                    </div>
                  </div>
                </div>
              </b-form>
            </div>
          </b-tab>
          <b-tab title="订单信息">
            <div class="cus-container">
              <b-form>
                <b-container>
                <b-row>
                  <b-col cols="2">
                    <label>目的地:</label>
                  </b-col>
                  <b-col cols="10">
                    <b-form-input id="nestedStreet"></b-form-input>
                  </b-col>
                </b-row>
                </b-container>

                <div class="row">
                  <div class="col-xs-3">
                    <b-form-group horizontal
                                  label="State:"
                                  label-for="nestedState">
                      <b-form-input id="nestedState"></b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-xs-9">
                    <b-form-group horizontal
                                  label="Country:"
                                  label-for="nestedCountry">
                      <b-form-input id="nestedCountry"></b-form-input>
                    </b-form-group>
                  </div>
                </div>
              </b-form>
            </div>
          </b-tab>
        </b-tabs>
      </div>
      <div class="col-sm-5">
        <div class="left-record">
          <div class="group-title">短信记录</div>
          <div>
            <div>
              <div>2018-05-12 15:22 已发送</div>
              <div>【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
            <div>
              <div>2018-05-12 15:22 已发送</div>
              <div>【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
            <div>
              <div>2018-05-12 15:22 已发送</div>
              <div>【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
          </div>
        </div>
        <div class="left-record">
          <div class="group-title">跟进记录</div>
          <div>
            <div>
              <div>2018-05-12 15:22 已发送</div>
              <div>【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
            <div>
              <div>2018-05-12 15:22 已发送</div>
              <div>【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
            <div>
              <div>2018-05-12 15:22 已发送</div>
              <div>【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        customer: {
          type: '1',
          weddingDay: '',
          idest: '',
          setOutPlace: '',
          hotelType: null,
          travelTime: {start: '', end: ''},
          travelNumber: {adult: 0, children: 0},
          travelDays: {day: 0, night: 0},
          budget: '',
          desc: ''
        }
      }
    },
    mounted () {
//      let circleProcess = document.getElementById('circleProcess')
      let circle = document.getElementById('circle')
//      let range = document.getElementById('range')
      // 滑动条的值
      let rangeValue = 63
      circle.setAttribute('stroke-dashoffset', (255 - rangeValue) + '%')
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/custom.scss";
  .v-container {
    .page-title {
      font-size: 1.4rem;
      font-weight: bold;
      margin: .6rem 0;
    }
    .customer {
      background-color: #ffffff;
      padding: 1rem 0;
      margin: 0 0 1rem 0;
      border: 1px solid #dee2e6;
      #circleProcess {
        position: relative;
        top: 0;
        left: 0;
        width: 4rem;
        height: 4rem;
        stroke-dasharray: 255%;
        stroke-dashoffset: 255%;
        stroke: #6FEC6F;
        fill: none;
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        transform: rotate(-90deg);
      }
      .el-progress {
        width: 4rem;
        height: 4rem;
        /*background-color: #34a853;*/
        /*border-radius: 50%;*/
        /*color: #ffffff;*/
        /*text-align: center;*/
        /*line-height: 4rem;*/
        position: relative;
        line-height: 1;
        display: inline-block;
        .el-progress__text {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          text-align: center;
          margin: 0;
          transform: translateY(-50%);
          font-size: 1rem;
          color: #606266;
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
        }
      }
    }
    .cus-container {
      background-color: #ffffff;
      padding: 1rem;
      border: 1px solid transparent;
      border-color: transparent #dee2e6 #dee2e6;
      border-top: none;
      margin-bottom: 1rem;
    }
    .left-record {
      position: relative;
      padding: 1rem;
      z-index: 0;
      border: 1px solid #dee2e6;
      background-color: #ffffff;
      .group-title {
        position: absolute;
        line-height: 2rem;
        top: calc(-1rem - 1px);
        z-index: 1;
        background-color: #fff;
        border: 1px solid #dee2e6;
        color: $card-color-primary;
        font-weight: bold;
        padding: 0 .5rem;
        border-radius: calc(1rem + 1px);
      }
    }
    .left-record:last-of-type {
      margin-top: 1.8rem;
    }
  }
</style>
