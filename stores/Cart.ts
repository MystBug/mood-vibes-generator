import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const list = ref([]);

  const summary = computed(() => {
    return `Hi you, you have ${list.value.length} items in your cart. It costs something.`;
  });

  return { summary };
});
