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
              <input type="text" v-model="searchText" class="form-control" placeholder="请输入手机号码/姓名/微信昵称">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="searchList"><i class="fas fa-search"></i><span>搜索</span></button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isInit" class="card card-border-color card-border-color-dark">
          <h5 class="card-header">初步接洽</h5>
          <div class="card-body">
            <b-table responsive small hover
                     class="text-nowrap"
                     :fields="fields1"
                     :items="tableData1.result"
                     @row-clicked="rowClicked">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
              <template slot="wx" slot-scope="data">
                {{data.item.wxNickname + '(' + data.item.wxId + ')'}}
              </template>
            </b-table>
            <!--<div class="row">-->
              <!--<div class="col-sm-2">-->
                <!--<b-form-select :options="pageOptions" v-model="perPage" />-->
              <!--</div>-->
              <!--:current-page="currentPage"-->
              <!--:per-page="perPage"-->
              <!--<div class="col-sm-6">-->
                <!--<b-pagination :total-rows="tableData1.total" :per-page="perPage" v-model="currentPage" class="my-0" />-->
              <!--</div>-->
            <!--</div>-->
            <div>
              <!--<a href="#" @click="getMore">加载更多</a>-->
              <b-link @click="getMore">加载更多</b-link>
            </div>
          </div>
        </div>
        <div v-if="isInit" class="card card-border-color card-border-color-warning">
          <h5 class="card-header">待明确需求</h5>
          <div class="card-body">
            <b-table responsive small hover
                     class="text-nowrap"
                     :fields="fields1"
                     :items="tableData2.result"
                     @row-clicked="rowClicked">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
              <template slot="wx" slot-scope="data">
                {{data.item.wxNickname + '(' + data.item.wxId + ')'}}
              </template>
            </b-table>
          </div>
        </div>
        <div v-if="isInit" class="card card-border-color card-border-color-primary">
          <h5 class="card-header">已报价</h5>
          <div class="card-body">
            <b-table responsive small hover
                     class="text-nowrap"
                     :fields="fields3"
                     :items="tableData3.result">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
              <template slot="wx" slot-scope="data">
                {{data.item.wxNickname + '(' + data.item.wxId + ')'}}
              </template>
            </b-table>
          </div>
        </div>
        <div v-if="isInit" class="card card-border-color card-border-color-danger">
          <h5 class="card-header">已成交</h5>
          <div class="card-body">
            <b-table responsive small hover
                     class="text-nowrap"
                     :fields="fields4"
                     :items="tableData4.result">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
              <template slot="wx" slot-scope="data">
                {{data.item.wxNickname + '(' + data.item.wxId + ')'}}
              </template>
            </b-table>
          </div>
        </div>
        <div v-if="isInit" class="card card-border-color card-border-color-success">
          <h5 class="card-header">已出行</h5>
          <div class="card-body">
            <b-table responsive small hover
                     class="text-nowrap"
                     :fields="fields5"
                     :items="tableData5.result">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
              <template slot="wx" slot-scope="data">
                {{data.item.wxNickname + '(' + data.item.wxId + ')'}}
              </template>
            </b-table>
          </div>
        </div>
        <div v-if="!isInit" class="card card-border-color card-border-color-dark">
          <h5 class="card-header">搜索结果
            <!--<b-button variant="link" @click="isInit = true">返回</b-button>-->
            <b-link @click="isInit = true">返回</b-link>
          </h5>
          <div class="card-body">
            <b-table responsive small hover
                     class="text-nowrap"
                     :fields="fields6"
                     :items="tableData6.result"
                     @row-clicked="rowClicked">
              <!-- A virtual column -->
              <template slot="index" slot-scope="data">
                {{data.index + 1}}
              </template>
              <template slot="wx" slot-scope="data">
                {{data.item.wxNickname + '(' + data.item.wxId + ')'}}
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
  import {addCustomer, getCusList, getCusQuery} from '@/api/index'
  import {timestampFormat} from '@/common/utils'
  export default {
    data () {
      let fields1 = [
        {key: 'index', label: '序号'},
        {key: 'comeFrom', label: '来源'},
        {key: 'name', label: '姓名'},
        {
          key: 'sex',
          label: '性别',
          formatter: (value, key, item) => {
            return value === 1 ? '男' : '女'
          }
        },
        {key: 'tel', label: '电话'},
        {key: 'wx', label: '微信'}
      ]
      let fields3 = [
        {key: 'index', label: '序号'},
        {key: 'comeFrom', label: '来源'},
        {key: 'name', label: '姓名'},
        {
          key: 'sex',
          label: '性别',
          formatter: (value, key, item) => {
            return value === 1 ? '男' : '女'
          }
        },
        {key: 'tel', label: '电话'},
        {key: 'wx', label: '微信'},
        {key: 'intentionDestination', label: '意向目的地'},
        {
          key: 'tripTime',
          label: '预计出行时间',
          formatter: (value, key, item) => {
            return timestampFormat(item.tripBeginTime) + '-' + timestampFormat(item.tripEndTime)
          }
        },
        {
          key: 'tripNumber',
          label: '预计出行人数',
          formatter: (value, key, item) => {
            return '成人: ' + item.intentionAdults + ' 儿童: ' + item.intentionChild
          }
        },
        {key: 'intentionBudget', label: '预算'},
        {key: 'lastPrice', label: '最后报价'},
        {key: 'intentionBase', label: '出发地'},
        {key: 'intentionPoint', label: '特别说明'}
      ]
      let fields4 = [
        {key: 'index', label: '序号'},
        {key: 'comeFrom', label: '来源'},
        {key: 'name', label: '姓名'},
        {
          key: 'sex',
          label: '性别',
          formatter: (value, key, item) => {
            return value === 1 ? '男' : '女'
          }
        },
        {key: 'tel', label: '电话'},
        {key: 'wx', label: '微信'},
        {key: 'orderBase', label: '出发地'},
        {key: 'orderDestination', label: '目的地'},
        {
          key: 'tripTime',
          label: '出行时间',
          formatter: (value, key, item) => {
            return timestampFormat(item.beginTime) + '-' + timestampFormat(item.endTime)
          }
        },
        {
          key: 'tripNumber',
          label: '出行人数',
          formatter: (value, key, item) => {
            return '成人: ' + item.orderAdults + ' 儿童: ' + item.orderChild
          }
        },
        {key: 'totalPrice', label: '总价'},
        {key: 'payPrice', label: '已付款'},
        {key: 'intentionPoint', label: '特别说明'}
      ]
      let fields5 = [
        {key: 'index', label: '序号'},
        {key: 'comeFrom', label: '来源'},
        {key: 'name', label: '姓名'},
        {
          key: 'sex',
          label: '性别',
          formatter: (value, key, item) => {
            return value === 1 ? '男' : '女'
          }
        },
        {key: 'tel', label: '电话'},
        {key: 'wx', label: '微信'},
        {key: 'orderBase', label: '出发地'},
        {key: 'orderDestination', label: '目的地'},
        {
          key: 'tripTime',
          label: '出行时间',
          formatter: (value, key, item) => {
            return timestampFormat(item.beginTime) + '-' + timestampFormat(item.endTime)
          }
        },
        {
          key: 'tripNumber',
          label: '出行人数',
          formatter: (value, key, item) => {
            return '成人: ' + item.orderAdults + ' 儿童: ' + item.orderChild
          }
        },
        {key: 'totalPrice', label: '成交价格'},
        {
          key: 'acceptTime',
          label: '成交时间',
          formatter: (value, key, item) => {
            return timestampFormat(value, 'mi')
          }
        },
        {key: 'intentionPoint', label: '特别说明'}
      ]
      let fields6 = [
        {key: 'index', label: '序号'},
        {key: 'comeFrom', label: '来源'},
        {key: 'name', label: '姓名'},
        {
          key: 'sex',
          label: '性别',
          formatter: (value, key, item) => {
            return value === 1 ? '男' : '女'
          }
        },
        {key: 'tel', label: '电话'},
        {key: 'wx', label: '微信'},
        {
          key: 'status',
          label: '状态',
          formatter: (value, key, item) => {
            switch (value) {
              case 1:
                return '初步接洽'
              case 2:
                return '待明确需求'
              case 3:
                return '已报价'
              case 4:
                return '待付款'
              case 5:
                return '付款中'
              case 6:
                return '待出行'
              case 7:
                return '出行中'
              case 8:
                return '待回访'
              case 9:
                return '完成'
              default:
                return ''
            }
          }
        },
        {key: 'followBy', label: '跟进负责人'}
      ]
      return {
        isInit: true,
        searchText: '',
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
        fields3: fields3,
        fields4: fields4,
        fields5: fields5,
        fields6: fields6,
        tableData1: [],
        tableData2: [],
        tableData3: [],
        tableData4: [],
        tableData5: [],
        tableData6: [],
        currentPage: 1,
        perPage: 2,
        pageOptions: [ 2, 5, 10, 15 ]
      }
    },
    mounted () {
      getCusList({pageNum: 1, pageSize: 10, param: '1'}, (data) => {
        console.log(data)
        this.tableData1 = data.page
      })
      getCusList({pageNum: 1, pageSize: 10, param: '2'}, (data) => {
        this.tableData2 = data.page
      })
      getCusList({pageNum: 1, pageSize: 10, param: '3'}, (data) => {
        this.tableData3 = data.page
      })
      getCusList({pageNum: 1, pageSize: 10, param: '4,5,6'}, (data) => {
        this.tableData4 = data.page
      })
      getCusList({pageNum: 1, pageSize: 10, param: '7,8'}, (data) => {
        this.tableData5 = data.page
      })
    },
    methods: {
      // addCustomer () {
      //   this.$router.push({path: '/app/addCustomer'})
      // },
      rowClicked (item, index, event) {
        this.$router.push({path: '/app/customer', query: {cusInfoId: item.id, cusIntentionId: item.cusIntentionId}})
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
          // this.$router.push({path: '/app/customer', query: data.result})
        })
      },
      searchList () {
        getCusQuery({pageNum: 1, pageSize: 10, param: this.searchText}, (data) => {
          this.isInit = false
          this.tableData6 = data.page
        })
      },
      getMore () {
        getCusList({pageNum: 1, pageSize: 10, param: '1'}, (data) => {
          // let result = data.page.result
          this.tableData1.result = [...this.tableData1.result, ...data.page.result]
          // result[0].id = 10
          // this.tableData1.result.concat(result)
          console.log(this.tableData1.result)
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
      padding: .3rem .6rem;
    }
    .card-body {
      padding: 0;
    }
  }
  .card-border-color-warning {
    border-top-color: $card-color-warning;
    .card-header {
      color: $card-color-warning;
      padding: .3rem .6rem;
    }
    .card-body {
      padding: 0;
    }
  }
  .card-border-color-primary {
    border-top-color: $card-color-primary;
    .card-header {
      color: $card-color-primary;
      padding: .3rem .6rem;
    }
    .card-body {
      padding: 0;
    }
  }
  .card-border-color-danger {
    border-top-color: $card-color-danger;
    .card-header {
      color: $card-color-danger;
      padding: .3rem .6rem;
    }
    .card-body {
      padding: 0;
    }
  }
  .card-border-color-success {
    border-top-color: $card-color-success;
    .card-header {
      color: $card-color-success;
      padding: .3rem .6rem;
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
