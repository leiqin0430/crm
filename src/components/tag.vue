<template>
  <transition>
    <span
      class="el-tag"
      :style="{backgroundColor: color}">
      <slot></slot>
      <i class="fas fa-times el-icon-close"
        @click.stop="handleClose"></i>
    </span>
  </transition>
</template>
<script>
  export default {
    props: {
      // text: String,
      // closable: Boolean,
      // type: String,
      // hit: Boolean,
      // disableTransitions: Boolean,
      color: String
    },
    methods: {
      handleClose (event) {
        this.$emit('close', event)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .el-tag {
    background-color: rgba(64,158,255,.1);
    display: inline-block;
    padding: 0 8px;
    /*height: 32px;*/
    line-height: 24px;
    font-size: 12px;
    color: #409eff;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid rgba(64,158,255,.2);
    white-space: nowrap;
    .el-icon-close {
      border-radius: 50%;
      text-align: center;
      position: relative;
      cursor: pointer;
      font-size: 12px;
      height: 16px;
      width: 16px;
      line-height: 16px;
      vertical-align: middle;
      top: -1px;
      right: -5px;
      color: #409eff;
    }
  }
  .el-tag+.el-tag {
    margin-left: 6px;
  }
</style>
