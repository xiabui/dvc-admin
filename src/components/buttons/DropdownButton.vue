<template>
  <div class="dropdown">
    <div class="dropbtn">
      <svg-icon name="global" :size="24" />
      {{ selectedValue?.label ?? placeholder }}
    </div>
    <div class="dropdown-content">
      <div v-for="item in items" @click="onSelect(item)" class="dropdown-item">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { ISelectOption } from "@/utils/types";
import { onMounted, ref, type PropType } from "vue";

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Object as PropType<ISelectOption[]>,
    required: true,
  },
  selectedItem: {
    type: Object as PropType<String>,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emit = defineEmits<{
  selected: [string];
}>();

const selectedValue = ref<ISelectOption>();

const onSelect = (value: ISelectOption) => {
  if (value && value !== selectedValue.value) {
    selectedValue.value = value;
    emit("selected", value.value);
  }
};

onMounted(() => {
  if (props.selectedItem) {
    selectedValue.value = props.items.find(
      (e) => e.value === props.selectedItem
    );
  }
});
</script>
