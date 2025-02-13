<script setup lang="ts">
const emit = defineEmits(["valueChanged"]);

const props = defineProps<{
  id?: string;
  name?: string;
  label?: string;
  selectClasses?: string;
  modelValue?: string;
  countries: { value: string; label: string }[];
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit("valueChanged", target.value);
};
</script>


<template>
  <div class="flex flex-col">
    <br>
    <label v-if="props.label" :id="props.id" class="body-2 text-color mb-3">
      {{ props.label }}
    </label>

    <div class="relative">
      <div class="absolute left-0 top-0">
        <slot name="startAdornment"></slot>
      </div>

      <select
        :id="props.id"
        :name="props.name"
        :class="props.selectClasses || 'text-input ringed-input'"
        @change="handleChange"
        :value="props.modelValue"
      >
        <option value="">...</option>
        <option v-for="country in props.countries" :key="country.value" :value="country.value">
          {{ country.label }}
        </option>
      </select>
      <div class="absolute top-0 right-0">
        <slot name="endAdornment"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.select-css {
  /* Ваши стили для select */
}
</style>