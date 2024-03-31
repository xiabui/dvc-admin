<template>
  <svg aria-hidden="true" :width="size" :height="size">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { COLOR } from '@/utils/const'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon'
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: COLOR.PRIMARY_DARK
    },
    size: {
      type: Number,
      default: 20
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    return { symbolId }
  }
})
</script>
