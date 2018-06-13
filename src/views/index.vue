<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <div class="row search-container">
          <div class="col-sm-6">
            <button type="button" class="btn btn-primary" @click="openNewCusModal"><i class="fas fa-plus"></i><span>新客户接入</span></button>
          </div>
          <div class="col-sm-6">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="请输入手机号码/姓名/微信昵称" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i><span>搜索</span></button>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-border-color card-border-color-dark">
          <h5 class="card-header">初步接洽</h5>
          <div class="card-body">
            <b-table responsive striped small hover
                     class="text-nowrap"
                     :items="tableData1.rows"
                     :fields="fields1"
                     :current-page="currentPage"
                     :per-page="perPage"
                     @row-clicked="rowClicked">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
            </b-table>
            <div class="row">
              <div class="col-sm-2">
                <b-form-select :options="pageOptions" v-model="perPage" />
              </div>
              <div class="col-sm-6">
                <b-pagination :total-rows="tableData1.total" :per-page="perPage" v-model="currentPage" class="my-0" />
              </div>
            </div>
          </div>
        </div>
        <div class="card card-border-color card-border-color-warning">
          <h5 class="card-header">长期跟进</h5>
          <div class="card-body">
            <b-table responsive striped small hover class="text-nowrap" :items="tableData1.rows" :fields="fields1">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
            </b-table>
          </div>
        </div>
        <div class="card card-border-color card-border-color-primary">
          <h5 class="card-header">明确需求</h5>
          <div class="card-body">
            <b-table responsive striped small hover class="text-nowrap" :items="tableData2.rows" :fields="fields2">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
            </b-table>
          </div>
        </div>
        <div class="card card-border-color card-border-color-danger">
          <h5 class="card-header">方案报价</h5>
          <div class="card-body">
            <b-table responsive striped small hover class="text-nowrap" :items="tableData2.rows" :fields="fields2">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
            </b-table>
          </div>
        </div>
        <div class="card card-border-color card-border-color-success">
          <h5 class="card-header">已成交</h5>
          <div class="card-body">
            <b-table responsive striped small hover class="text-nowrap" :items="tableData3.rows" :fields="fields3">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
            </b-table>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <ul class="nav nav-pills nav-message">
          <li class="nav-item nav-item-message">
            <a class="nav-link" href="javascript:void(0)">消息提醒</a>
          </li>
        </ul>
        <div class="message-list">
          <div class="message-item">
            <div class="name">雷芹（我的昵称）06-06 11:53</div>
            <div class="info">需求还不明确，请及时跟进</div>
          </div>
          <div class="message-item">
            <div class="name">雷芹（我的昵称）06-06 11:53</div>
            <div class="info">需求还不明确，请及时跟进</div>
          </div>
          <div class="message-item">
            <div class="name">雷芹（我的昵称）06-06 11:53</div>
            <div class="info">需求还不明确，请及时跟进</div>
          </div>
          <div class="message-item">
            <div class="name">雷芹（我的昵称）06-06 11:53</div>
            <div class="info">需求还不明确，请及时跟进</div>
          </div>
        </div>
        <ul class="nav nav-pills nav-recommend">
          <li class="nav-item nav-item-recommend">
            <a class="nav-link" href="javascript:void(0)">推荐产品</a>
          </li>
        </ul>
        <div class="recommend-list">
          <div class="recommend-item"></div>
        </div>
        <!--<div class="panel panel-success">-->
          <!--<div class="panel-heading">-->
            <!--<h3 class="panel-title">Panel title</h3>-->
          <!--</div>-->
          <!--<div class="panel-body">-->
            <!--Panel content-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="panel panel-info">-->
          <!--<div class="panel-heading">-->
            <!--<h3 class="panel-title">Panel title</h3>-->
          <!--</div>-->
          <!--<div class="panel-body">-->
            <!--Panel content-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
    <!--新客户接入modal-->
    <b-modal ref="newCusModal"
             centered
             title="填写客户信息">
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
        <b-form-group label="行程类型:"
                      horizontal>
          <b-form-checkbox-group v-model="customer.tripType">
            <b-form-checkbox value="1">婚礼</b-form-checkbox>
            <b-form-checkbox value="2">婚拍</b-form-checkbox>
            <b-form-checkbox value="3">度蜜月</b-form-checkbox>
            <b-form-checkbox value="4">亲子</b-form-checkbox>
            <b-form-checkbox value="5">旅行</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-form>
      <div slot="modal-footer">
        <b-btn type="button" variant="default" @click="closeNewCusModal">取消</b-btn>
        <b-btn type="button" variant="primary" @click="saveNewCus">确定</b-btn>
      </div>
    </b-modal>
  </div>
</template>
<script>
  import {addCustomer} from '@/api/index'
  export default {
    data () {
      let fields1 = [
        {key: 'index', label: '序号'},
        {key: 'from', label: '来源'},
        {key: 'name', label: '姓名'},
        {key: 'gender', label: '性别'},
        {key: 'tel', label: '电话'},
        {key: 'wx', label: '微信'}
      ]
      let fields2 = [
        {key: 'index', label: '序号'},
        {key: 'from', label: '来源'},
        {key: 'name', label: '姓名'},
        {key: 'gender', label: '性别'},
        {key: 'tel', label: '电话'},
        {key: 'wx', label: '微信'},
        {key: 'idest', label: '意向目的地'},
        {key: 'travelTime', label: '出行时间'},
        {key: 'travelNumber', label: '出行人数'},
        {key: 'budget', label: '预算'},
        {key: 'setOutPlace', label: '出发地'},
        {key: 'quote', label: '报价'},
        {key: 'desc', label: '特别说明'}
      ]
      let fields3 = [
        {key: 'index', label: '序号'},
        {key: 'from', label: '来源'},
        {key: 'name', label: '姓名'},
        {key: 'gender', label: '性别'},
        {key: 'tel', label: '电话'},
        {key: 'wx', label: '微信'},
        {key: 'dest', label: '目的地'},
        {key: 'travelTime', label: '出行时间'},
        {key: 'travelNumber', label: '出行人数'},
        {key: 'setOutPlace', label: '出发地'},
        {key: 'dealPrice', label: '成交价格'},
        {key: 'dealTime', label: '成交时间'},
        {key: 'desc', label: '特别说明'}
      ]
      return {
        customer: {
          name: '',
          sex: 1,
          tel: '',
          wxId: '',
          wxNickname: '',
          comeFrom: '',
          tripType: []
        },
        fields1: fields1,
        fields2: fields2,
        fields3: fields3,
        tableData1: {total: 5,
          rows: [
            {id: 1, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫'},
            {id: 2, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫'},
            {id: 3, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫'},
            {id: 4, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫'},
            {id: 5, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫'}
          ]},
        tableData2: {total: 5,
          rows: [
            {id: 1, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫', idest: '巴厘岛', travelTime: '2018-10-01 09:00', travelNumber: 2, budget: '￥30000', setOutPlace: '北京', desc: '备注', quote: '￥40000'},
            {id: 2, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫', idest: '巴厘岛', travelTime: '2018-10-01 09:00', travelNumber: 2, budget: '￥30000', setOutPlace: '北京', desc: '备注', quote: '￥40000'},
            {id: 3, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫', idest: '巴厘岛', travelTime: '2018-10-01 09:00', travelNumber: 2, budget: '￥30000', setOutPlace: '北京', desc: '备注', quote: '￥40000'},
            {id: 4, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫', idest: '巴厘岛', travelTime: '2018-10-01 09:00', travelNumber: 2, budget: '￥30000', setOutPlace: '北京', desc: '备注', quote: '￥40000'},
            {id: 5, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫', idest: '巴厘岛', travelTime: '2018-10-01 09:00', travelNumber: 2, budget: '￥30000', setOutPlace: '北京', desc: '备注', quote: '￥40000'}
          ]},
        tableData3: {total: 5,
          rows: [
            {id: 1, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫', dest: '巴厘岛', travelTime: '2018-10-01 09:00', travelNumber: 2, budget: '￥30000', setOutPlace: '北京', desc: '备注', dealTime: '2018-08-01 09:00', dealPrice: '￥38000'},
            {id: 2, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫', dest: '巴厘岛', travelTime: '2018-10-01 09:00', travelNumber: 2, budget: '￥30000', setOutPlace: '北京', desc: '备注', dealTime: '2018-08-01 09:00', dealPrice: '￥38000'},
            {id: 3, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫', dest: '巴厘岛', travelTime: '2018-10-01 09:00', travelNumber: 2, budget: '￥30000', setOutPlace: '北京', desc: '备注', dealTime: '2018-08-01 09:00', dealPrice: '￥38000'},
            {id: 4, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫', dest: '巴厘岛', travelTime: '2018-10-01 09:00', travelNumber: 2, budget: '￥30000', setOutPlace: '北京', desc: '备注', dealTime: '2018-08-01 09:00', dealPrice: '￥38000'},
            {id: 5, from: 'app', name: '雷芹', gender: '女', tel: 18700571926, wx: '放开那只猫', dest: '巴厘岛', travelTime: '2018-10-01 09:00', travelNumber: 2, budget: '￥30000', setOutPlace: '北京', desc: '备注', dealTime: '2018-08-01 09:00', dealPrice: '￥38000'}
          ]},
        currentPage: 1,
        perPage: 2,
        pageOptions: [ 2, 5, 10, 15 ]
      }
    },
    methods: {
      // addCustomer () {
      //   this.$router.push({path: '/app/addCustomer'})
      // },
      rowClicked (item, index, event) {
        this.$router.push({path: '/app/customer'})
      },
      openNewCusModal () {
        this.$refs.newCusModal.show()
      },
      closeNewCusModal () {
        this.$refs.newCusModal.hide()
      },
      saveNewCus (evt) {
        evt.preventDefault()
        // 深拷贝对象
        let obj = {...this.customer}
        obj.tripType = obj.tripType.join(',')
        addCustomer(obj, (data) => {
          this.$router.push({path: '/app/customer', query: data.result})
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../scss/custom.scss";
  .search-container {
    margin-top: 1rem;
  }
  .card {
    margin-top: 1rem;
  }
  .card:last-of-type {
    margin-bottom: 1rem;
  }
  .card-border-color {
    border-top: .26rem solid #c9c9c9;
  }
  .card-border-color-dark {
    border-top-color: $card-color-dark;
    .card-header {
      color: $card-color-dark;
      padding: .5rem 1rem;
    }
    .card-body {
      padding: 0;
    }
  }
  .card-border-color-warning {
    border-top-color: $card-color-warning;
    .card-header {
      color: $card-color-warning;
      padding: .5rem 1rem;
    }
    .card-body {
      padding: 0;
    }
  }
  .card-border-color-primary {
    border-top-color: $card-color-primary;
    .card-header {
      color: $card-color-primary;
      padding: .5rem 1rem;
    }
    .card-body {
      padding: 0;
    }
  }
  .card-border-color-danger {
    border-top-color: $card-color-danger;
    .card-header {
      color: $card-color-danger;
      padding: .5rem 1rem;
    }
    .card-body {
      padding: 0;
    }
  }
  .card-border-color-success {
    border-top-color: $card-color-success;
    .card-header {
      color: $card-color-success;
      padding: .5rem 1rem;
    }
    .card-body {
      padding: 0;
    }
  }

  .nav-message, .nav-recommend {
    margin-top: 1rem;
  }
  .nav-item-message {
    background-color: #dff0d8;
    border-radius: .25rem .25rem 0 0;
    border: 1px solid #d6e9c6;
    border-bottom: none;
    a {
      color: #3c763d;
      padding: .3rem .6rem;
    }
  }
  .nav-item-recommend {
    background-color: #d9edf7;
    border-radius: .25rem .25rem 0 0;
    border: 1px solid #bce8f1;
    border-bottom: none;
    a {
      color: #31708f;
      padding: .3rem .6rem;
    }
  }
  .message-list {
    background-color: #ffffff;
    height: 8rem;
    border: 1px solid #d6e9c6;
    border-radius: 0 .25rem .25rem .25rem;
    overflow: auto;
    .message-item {
      font-size: .8rem;
      margin-top: .5rem;
      .name {
        text-indent: .8rem;
        color: green;
      }
      .info {
        text-indent: 1.6rem;
      }
    }
    .message-item:last-of-type {
      margin-bottom: .5rem;
    }
  }
  .recommend-list {
    background-color: #ffffff;
    margin-bottom: 1rem;
    height: 8rem;
    border: 1px solid #bce8f1;
    border-radius: 0 .25rem .25rem .25rem;
    overflow: auto;
  }

  /*.panel {*/
    /*margin-bottom: 20px;*/
    /*background-color: #fff;*/
    /*border: 1px solid transparent;*/
    /*border-radius: 4px;*/
    /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/
    /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/
  /*}*/
  /*.panel-info {*/
    /*border-color: #bce8f1;*/
  /*}*/
  /*.panel-success {*/
    /*border-color: #d6e9c6;*/
  /*}*/
  /*.panel-info>.panel-heading {*/
    /*color: #31708f;*/
    /*background-color: #d9edf7;*/
    /*border-color: #bce8f1;*/
  /*}*/
  /*.panel-success>.panel-heading {*/
    /*color: #3c763d;*/
    /*background-color: #dff0d8;*/
    /*border-color: #d6e9c6;*/
  /*}*/
  /*.panel-heading {*/
    /*padding: 10px 15px;*/
    /*border-bottom: 1px solid transparent;*/
    /*border-top-left-radius: 3px;*/
    /*border-top-right-radius: 3px;*/
  /*}*/
  /*.panel-title {*/
    /*margin-top: 0;*/
    /*margin-bottom: 0;*/
    /*font-size: 16px;*/
    /*color: inherit;*/
  /*}*/
  /*.panel-body {*/
    /*padding: 15px;*/
  /*}*/
</style>
