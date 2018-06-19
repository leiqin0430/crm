<template>
  <div class="progressDiv">
    <svg :height="radius * 2" :width="radius * 2" >
      <circle :stroke-width="stroke"
              :r="normalizedRadius"
              :cx="radius"
              :cy="radius"
              stroke="#D1D3D7"
              fill="none"></circle>
      <circle
        stroke="#409eff"
        fill="transparent"
        :stroke-dasharray="circumference + ' ' + circumference"
        :style="{ strokeDashoffset: strokeDashoffset }"
        :stroke-width="stroke"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"></circle>
    </svg>
    <div class="progress-text" :style="{width: radius * 2 + 'px', height: radius * 2 + 'px'}">{{progress+'%'}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      radius: Number,
      progress: Number,
      stroke: Number
    },
    data () {
      const normalizedRadius = this.radius - this.stroke
      const circumference = normalizedRadius * 2 * Math.PI
      return {
        normalizedRadius,
        circumference
      }
    },
    computed: {
      strokeDashoffset () {
        return this.circumference - this.progress / 100 * this.circumference
      }
    }
  }
</script>
<style lang="scss" scoped>
  .progressDiv {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .progress-text {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
  }
</style>
