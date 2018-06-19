<template>
  <div>
    <progress-ring :radius="60" :progress="progress" :stroke="4"></progress-ring>
    <tag v-for="tag in tags" :key="tag" @close="handleClose(tag)">{{tag}}</tag>
  </div>
</template>
<script>
  import progress from '@/components/progress.vue'
  import tag from '@/components/tag.vue'
  export default {
    components: {
      'progress-ring': progress,
      'tag': tag
    },
    data () {
      return {
        progress: 56,
        tags: ['标签一', '标签二', '标签三', '标签四']
      }
    },
    mounted () {
      // const interval = setInterval(() => {
      //   this.progress += 10
      //   if (this.progress === 100) {
      //     clearInterval(interval)
      //   }
      // }, 1000)
    },
    methods: {
      handleClose (tag) {
        this.tags.splice(this.tags.indexOf(tag), 1)
      }
    }
  }
</script>
