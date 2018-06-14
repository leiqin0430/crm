<template>
  <div class="container v-container">
    <div class="page-title">客户详情</div>
    <div class="row">
      <div class="col-sm-7">
        <div class="row customer" @click="openNewCusModal">
          <div class="col-sm-2 progress-col">
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
          <div class="col-sm-10">
            <div class="row">
              <div class="col-sm-6">
                <label>姓名:</label>
                <span>雷芹</span>
                <i class="fas fa-venus" style="font-size: 1rem; color: #ea4335;"></i>
              </div>
              <div class="col-sm-6">
                <label>来源:</label>
                <span>马蜂窝</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <label>微信:</label>
                <span>芹芹（leiq）</span>
              </div>
              <div class="col-sm-6">
                <label>电话:</label>
                <span>18628372806</span>
                <span style="background-color: #34a853; color: #ffffff;">四川成都</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <label>标签:</label>
                <span>程序员</span>
                <span>屌丝</span>
              </div>
            </div>
          </div>
        </div>
        <b-tabs>
          <b-tab title="基本资料">
            <div class="cus-container">
              <b-form>
                <div class="row">
                  <div class="col-sm-7">
                    <b-form-group label="行程类型:" horizontal>
                      <b-form-checkbox-group v-model="customer.type">
                        <b-form-checkbox value="1">婚礼</b-form-checkbox>
                        <b-form-checkbox value="2">婚拍</b-form-checkbox>
                        <b-form-checkbox value="3">度蜜月</b-form-checkbox>
                        <b-form-checkbox value="4">亲子</b-form-checkbox>
                        <b-form-checkbox value="5">旅行</b-form-checkbox>
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
                  <div class="col-sm-7">
                    <b-form-group label="意向目的地:" horizontal>
                      <b-form-input></b-form-input>
                    </b-form-group>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <b-form-group label="出发地:" horizontal>
                      <b-form-input type="text"
                                    v-model="customer.setOutPlace"
                                    required>
                      </b-form-input>
                    </b-form-group>
                  </div>
                  <div class="col-sm-6">
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
                <b-form-group horizontal
                              :label-cols="2"
                              label="出行人数:">
                  <b-form-row>
                    <b-col cols="4">
                      <b-form-input type="number"
                                    v-model="customer.travelNumber.adult"
                                    required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="2"><label class="col-form-label">成人</label></b-col>
                    <b-col cols="4">
                      <b-form-input type="number"
                                    v-model="customer.travelNumber.children"
                                    required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="2"><label class="col-form-label">儿童</label></b-col>
                  </b-form-row>
                </b-form-group>
                <b-form-group horizontal
                              :label-cols="2"
                              label="出行时间:">
                  <b-form-row>
                    <b-col cols="5">
                      <b-form-input type="date"
                                    v-model="customer.travelTime.start"
                                    required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="1" class="text-center"><label class="col-form-label">至</label></b-col>
                    <b-col cols="5">
                      <b-form-input type="date"
                                    v-model="customer.travelTime.end"
                                    required>
                      </b-form-input>
                    </b-col>
                  </b-form-row>
                </b-form-group>
                <b-form-group horizontal
                              :label-cols="2"
                              label="行程天数:">
                  <b-form-row>
                    <b-col cols="5">
                      <b-form-input type="number"
                                    v-model="customer.travelDays.day"
                                    required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="1"><label class="col-form-label">天</label></b-col>
                    <b-col cols="5">
                      <b-form-input type="number"
                                    v-model="customer.travelDays.night"
                                    required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="1"><label class="col-form-label">晚</label></b-col>
                  </b-form-row>
                </b-form-group>
                <b-form-group horizontal
                              :label-cols="2"
                              label="预算:">
                  <b-form-row>
                    <b-col>
                      <b-form-input type="text"
                                    v-model="customer.budget"
                                    required>
                      </b-form-input>
                    </b-col>
                  </b-form-row>
                </b-form-group>
                <b-form-group horizontal
                              :label-cols="2"
                              label="备注:">
                  <b-form-row>
                    <b-col>
                      <b-form-textarea v-model="customer.desc"
                                       placeholder="请输入需要注意的事项（非必填）"
                                       :rows="3"
                                       :max-rows="6">
                      </b-form-textarea>
                    </b-col>
                  </b-form-row>
                </b-form-group>
                <b-form-group horizontal
                              :label-cols="2"
                              label="报价记录:">
                  <b-form-row>
                    <b-col>
                      <div>热辣普吉 蜜月之旅 7天5晚普吉岛动感体验之旅<span>￥21000</span>
                        <b-button type="button" variant="link">成交</b-button></div>
                      <div>浪漫蜜月 最美普吉岛7天5晚双岛双酒店奢华蜜月之旅<span>￥23000</span>
                        <b-button type="button" variant="link">成交</b-button></div>
                      <div>
                        <b-button type="button" variant="primary" @click="openQuoteModal">报价</b-button>
                      </div>
                    </b-col>
                  </b-form-row>
                </b-form-group>
              </b-form>
            </div>
          </b-tab>
          <b-tab title="订单信息">
            <div class="cus-container">
              <b-form>
                <b-form-group horizontal
                              :label-cols="2"
                              label="目的地:">
                  <b-form-input></b-form-input>
                </b-form-group>
                <b-form-group horizontal
                              :label-cols="2"
                              label="出行人数:">
                  <b-form-row>
                    <b-col cols="4">
                      <b-form-input type="number"
                                    v-model="customer.travelNumber.adult"
                                    required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="2"><label class="col-form-label">成人</label></b-col>
                    <b-col cols="4">
                      <b-form-input type="number"
                                    v-model="customer.travelNumber.children"
                                    required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="2"><label class="col-form-label">儿童</label></b-col>
                  </b-form-row>
                </b-form-group>
                <b-form-group horizontal
                              :label-cols="2"
                              label="出行时间:">
                  <b-form-row>
                    <b-col cols="5">
                      <b-form-input type="date"
                                    v-model="customer.travelTime.start"
                                    required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="1" class="text-center"><label class="col-form-label">至</label></b-col>
                    <b-col cols="5">
                      <b-form-input type="date"
                                    v-model="customer.travelTime.end"
                                    required>
                      </b-form-input>
                    </b-col>
                  </b-form-row>
                </b-form-group>
                <b-form-group horizontal
                              :label-cols="2"
                              label="行程天数:">
                  <b-form-row>
                    <b-col cols="5">
                      <b-form-input type="number"
                                    v-model="customer.travelDays.day"
                                    required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="1"><label class="col-form-label">天</label></b-col>
                    <b-col cols="5">
                      <b-form-input type="number"
                                    v-model="customer.travelDays.night"
                                    required>
                      </b-form-input>
                    </b-col>
                    <b-col cols="1"><label class="col-form-label">晚</label></b-col>
                  </b-form-row>
                </b-form-group>
                <b-form-group horizontal
                              :label-cols="2"
                              label="成交价格:">
                  <b-form-row>
                    <b-col cols="6">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">￥</span>
                        </div>
                        <b-form-input type="number"
                                      v-model="customer.travelDays.night"
                                      required>
                        </b-form-input>
                      </div>
                    </b-col>
                    <b-col cols="6">
                      <label class="col-form-label">已支付:￥23000</label>
                    </b-col>
                  </b-form-row>
                </b-form-group>
                <div class="card card-border-color card-border-color-dark">
                  <h5 class="card-header">出行客人信息</h5>
                  <div class="card-body">
                    <b-table responsive small hover class="text-nowrap" :items="tableData1.rows" :fields="fields1">
                    </b-table>
                  </div>
                </div>
                <div class="card card-border-color card-border-color-primary">
                  <h5 class="card-header">机票信息</h5>
                  <div class="card-body">
                    <b-table responsive small hover class="text-nowrap" :items="tableData2.rows" :fields="fields2">
                    </b-table>
                  </div>
                </div>
                <div class="card card-border-color card-border-color-success">
                  <h5 class="card-header">酒店信息</h5>
                  <div class="card-body">
                    <b-table responsive small hover class="text-nowrap" :items="tableData3.rows" :fields="fields3">
                    </b-table>
                  </div>
                </div>
                <div class="card card-border-color card-border-color-danger">
                  <h5 class="card-header">联系方式</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-5">
                        <b-form-group label="邮箱:" horizontal>
                          <b-form-input type="email"
                                        v-model="customer.email"
                                        required>
                          </b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-sm-7">
                        <b-form-group label="合同及资料:" horizontal>
                          <b-form-checkbox-group v-model="customer.type">
                            <b-form-checkbox value="1">已邮寄</b-form-checkbox>
                            <b-form-checkbox value="2">准备中</b-form-checkbox>
                          </b-form-checkbox-group>
                        </b-form-group>
                      </div>
                    </div>
                    <b-form-group horizontal
                                  :label-cols="2"
                                  label="通讯地址:">
                      <b-form-input></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal
                                  :label-cols="2"
                                  label="快递单号:">
                      <b-form-input></b-form-input>
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
          <div class="group-title text-primary">短信记录</div>
          <div class="message-list">
            <div class="message-item">
              <div><i class="far fa-clock timeIcon text-success"></i>2018-05-12 15:22 已发送</div>
              <div class="message-content">【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
            <div class="message-item">
              <div><i class="far fa-clock timeIcon text-warning"></i>2018-05-12 15:22 定时发送</div>
              <div class="message-content">【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
            <div class="message-item">
              <div><i class="far fa-clock timeIcon text-success"></i>2018-05-12 15:22 已发送</div>
              <div class="message-content">【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
          </div>
          <div class="message-btn">
            <b-button type="button" variant="primary" @click="sendMessage">发短信</b-button>
          </div>
        </div>
        <div class="left-record">
          <div class="group-title text-primary">跟进记录</div>
          <div class="message-list">
            <div class="message-item">
              <div><i class="far fa-clock timeIcon text-success"></i>2018-05-12 15:22 初步接洽</div>
              <!--<div class="message-content">【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>-->
            </div>
            <div class="message-item">
              <div><i class="far fa-clock timeIcon text-success"></i>2018-05-12 15:22 已发送</div>
              <div class="message-content">【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
            <div class="message-item">
              <div><i class="far fa-clock timeIcon text-success"></i>2018-05-12 15:22 已发送</div>
              <div class="message-content">【蜜游网】尊敬的雷小姐，已收到你的普吉岛婚礼订单付款200元</div>
            </div>
          </div>
          <div class="message-btn">
            <b-form-textarea placeholder="请输入行程关键节点以便做好记录"
                             :rows="3"
                             :max-rows="6">
            </b-form-textarea>
            <div class="track-btn">
              <b-button type="button" variant="primary" @click="sendMessage">保存</b-button>
              <b-button type="button" variant="secondary" @click="sendMessage">提醒</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--接入客户信息修改modal-->
    <b-modal ref="newCusModal"
             centered
             title="客户基本信息">
      <b-form>
        <b-form-group label="姓名:"
                      horizontal>
          <b-form-input type="text"
                        v-model="customer.name"
                        required
                        placeholder="请输入姓名">
          </b-form-input>
        </b-form-group>
        <b-form-group label="性别:"
                      horizontal>
          <b-form-radio-group v-model="customer.sex"
                              :options="[{text:'男',value:1},{text:'女',value:0}]">
          </b-form-radio-group>
        </b-form-group>
        <b-form-group label="电话:"
                      horizontal>
          <b-form-input type="tel"
                        v-model="customer.tel"
                        required
                        placeholder="请输入电话">
          </b-form-input>
        </b-form-group>
        <b-form-group label="微信号:"
                      horizontal>
          <b-form-input type="text"
                        v-model="customer.wxId"
                        required
                        placeholder="请输入微信号">
          </b-form-input>
        </b-form-group>
        <b-form-group label="微信昵称:"
                      horizontal>
          <b-form-input type="text"
                        v-model="customer.wxNickname"
                        required
                        placeholder="请输入微信昵称">
          </b-form-input>
        </b-form-group>
        <b-form-group label="客户来源:"
                      horizontal>
          <b-form-input type="text"
                        v-model="customer.comeFrom"
                        required
                        placeholder="请输入客户来源">
          </b-form-input>
        </b-form-group>
      </b-form>
      <div slot="modal-footer">
        <b-btn type="button" variant="default" @click="closeNewCusModal">取消</b-btn>
        <b-btn type="button" variant="primary" @click="saveNewCus">确定</b-btn>
      </div>
    </b-modal>
    <!--报价单modal-->
    <b-modal ref="quoteModal"
             centered
             title="报价单">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-group horizontal
                      :label-cols="2"
                      label="产品名:">
          <b-form-input type="text"
                        placeholder="请输入"></b-form-input>
        </b-form-group>
        <b-form-group horizontal
                      :label-cols="2"
                      label="价格:">
          <b-form-input type="number"
                        placeholder="请输入"></b-form-input>
        </b-form-group>
        <b-form-group horizontal
                      :label-cols="2"
                      label="报价人:">
          <b-form-input type="text"
                        placeholder="请输入"></b-form-input>
        </b-form-group>
      </form>
      <div slot="modal-footer">
        <b-btn variant="secondary" @click="closeQuoteModal">
          取消
        </b-btn>
        <b-btn variant="primary" @click="handleOk">
          确定
        </b-btn>
      </div>
    </b-modal>
  </div>
</template>
<script>
  import {getCusDetail} from '@/api/index'
  export default {
    data () {
      let fields1 = [
        {key: 'name', label: '姓名'},
        {key: 'gender', label: '性别'},
        {key: 'tel', label: '联系方式'},
        {key: 'passportNo', label: '护照号码'},
        {key: 'pinyin', label: '拼音'},
        {key: 'birthDate', label: '出生日期'}
      ]
      let fields2 = [
        {key: 'type', label: '去/返程'},
        {key: 'fromAirport', label: '出发机场'},
        {key: 'fromTime', label: '出发时间'},
        {key: 'toAirport', label: '到达机场'},
        {key: 'toTime', label: '到达时间'},
        {key: 'flightNumber', label: '航班号'}
      ]
      let fields3 = [
        {key: 'name', label: '酒店名称'},
        {key: 'roomType', label: '房型'},
        {key: 'roomNo', label: '房间号'},
        {key: 'checkInTime', label: '入住时间'}
      ]
      return {
        resultData: null,
        cusInfo: null,
        cusIntention: null,
        fields1: fields1,
        fields2: fields2,
        fields3: fields3,
        tableData1: {total: 1,
          rows: [
            {id: 1, name: '雷芹', gender: '女', tel: 18700571926, passportNo: 'BH120003', pinyin: 'leiqin', birthDate: '1990-11-05'}
          ]},
        tableData2: {total: 1,
          rows: [
            {id: 1, type: '去程', fromAirport: '成都双流国际机场', fromTime: '2018-10-08 09:20', toAirport: '上海虹桥国际机场', toTime: '2018-10-08 12:00', flightNumber: 'HB20181008001'}
          ]},
        tableData3: {total: 1,
          rows: [
            {id: 1, name: 'XXX酒店', roomType: '豪华总统套房', roomNo: 'R1408', checkInTime: '2018-10-08 09:20'}
          ]},
        customer: {
          name: '',
          from: '',
          wx: '',
          tel: '',
          type: '1',
          weddingDay: '',
          idest: '',
          setOutPlace: '',
          hotelType: null,
          travelTime: {start: '', end: ''},
          travelNumber: {adult: 0, children: 0},
          travelDays: {day: 0, night: 0},
          budget: '',
          desc: '',
          email: ''
        }
      }
    },
    mounted () {
      // {cusInfoId: 6, cusIntentionId: 4}
      // let paramObj = this.$route.query
      let paramObj = {cusInfoId: 6, cusIntentionId: 4}
      getCusDetail(paramObj, (data) => {
        console.log(data)
        if (data.result) {
          this.resultData = data.result
          this.cusInfo = {...this.resultData.cusInfo}
          this.cusIntention = {...this.resultData.cusIntention}
        }
      })
//      let circleProcess = document.getElementById('circleProcess')
      let circle = document.getElementById('circle')
//      let range = document.getElementById('range')
      // 滑动条的值
      let rangeValue = 63
      circle.setAttribute('stroke-dashoffset', (255 - rangeValue) + '%')
    },
    methods: {
      openNewCusModal () {
        this.$refs.newCusModal.show()
      },
      closeNewCusModal () {
        this.$refs.newCusModal.hide()
      },
      saveNewCus (evt) {
        evt.preventDefault()
        // 深拷贝对象
        // let obj = {...this.customer}
        // obj.tripType = obj.tripType.join(',')
        // addCustomer(obj, (data) => {
        //   this.$router.push({path: '/app/customer', query: data.result})
        // })
      },
      openQuoteModal () {
        this.$refs.quoteModal.show()
      },
      closeQuoteModal () {
        this.$refs.quoteModal.hide()
      },
      clearName () {
        // this.name = ''
      },
      handleOk (evt) {
        // Prevent modal from closing
        evt.preventDefault()
        // if (!this.name) {
        //   alert('Please enter your name')
        // } else {
        //   this.handleSubmit()
        // }
      },
      handleSubmit () {
        this.names.push(this.name)
        this.clearName()
        this.$refs.quoteModal.hide()
      },
      sendMessage () {}
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
    .progress-col {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      #circleProcess {
        position: relative;
        top: 0;
        left: 0;
        width: 6rem;
        height: 6rem;
        stroke-dasharray: 255%;
        stroke-dashoffset: 255%;
        stroke: #409eff;
        fill: none;
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        -o-transform: rotate(-90deg);
        transform: rotate(-90deg);
      }
      .el-progress {
        width: 6rem;
        height: 6rem;
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
        font-size: 1.4rem;
        color: #606266;
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
      }
      }
    }
    }
    .cus-container {
      background-color: #ffffff;
      padding: 1rem 1rem 0 1rem;
      border: 1px solid transparent;
      border-color: transparent #dee2e6 #dee2e6;
      border-top: none;
      margin-bottom: 1rem;
  .card {
    margin-top: 1rem;
  }
  .card:last-of-type {
    margin-bottom: 1rem;
  }
  .card-border-color {
    /*border-top: .26rem solid #c9c9c9;*/
  }
  .card-border-color-dark {
    /*border-top-color: $card-color-dark;*/
  .card-header {
    color: $card-color-dark;
    padding: .3rem .6rem;
  }
  .card-body {
    padding: 0;
  }
  }
  .card-border-color-warning {
    /*border-top-color: $card-color-warning;*/
  .card-header {
    color: $card-color-warning;
    padding: .3rem .6rem;
  }
  .card-body {
    padding: 0;
  }
  }
  .card-border-color-primary {
    /*border-top-color: $card-color-primary;*/
  .card-header {
    color: $card-color-primary;
    padding: .3rem .6rem;
  }
  .card-body {
    padding: 0;
  }
  }
  .card-border-color-danger {
    /*border-top-color: $card-color-danger;*/
  .card-header {
    color: $card-color-danger;
    padding: .3rem .6rem;
  }
  .card-body {
    padding: 1rem 1rem 0 1rem;
  }
  }
  .card-border-color-success {
    /*border-top-color: $card-color-success;*/
  .card-header {
    color: $card-color-success;
    padding: .3rem .6rem;
  }
  .card-body {
    padding: 0;
  }
  }
    }
    .left-record {
      position: relative;
      z-index: 0;
      border: 1px solid #dee2e6;
      background-color: #ffffff;
      .group-title {
        position: absolute;
        height: 2rem;
        line-height: 2rem;
        left: 1rem;
        top: -1rem;
        z-index: 1;
        background-color: #fff;
        border: 1px solid #dee2e6;
        color: $card-color-primary;
        font-weight: bold;
        padding: 0 .5rem;
        border-radius: 1rem;
      }
      .message-list {
        height: 20rem;
        padding: 1rem;
        overflow: auto;
        .message-item {
          margin-bottom: .5rem;
          .timeIcon {
            margin-right: .4rem;
            font-size: 1rem;
          }
          .message-content {
            margin-left: 1.4rem;
            border: 1px solid #50bfff;
            color: #5e6d82;
            padding: .5rem 1rem;
            background-color: #ecf8ff;
            border-radius: .25rem;
          }
        }
      }
      .message-btn {
        background-color: #f9fafc;
        border-top: 1px solid #dee2e6;
        text-align: center;
        padding: .4rem;
        .track-btn {
          text-align: center;
          margin-top: .4rem;
        }
      }
    }
    .left-record:last-of-type {
      margin-top: 1.8rem;
    }
  }
</style>
