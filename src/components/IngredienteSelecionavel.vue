<script setup lang="ts">
import Tag from "@/components/Tag.vue";
import {ref} from "vue";

const props = defineProps({
  ingrediente: {
    type: String,
    required: true
  }
});

const emit = defineEmits(["adicionarIngrediente", "removerIngrediente"]);

const selecionado = ref(false);

const aoClicar = () => {
  selecionado.value = !selecionado.value;

  if (selecionado.value) {
    emit("adicionarIngrediente", props.ingrediente);
  } else {
    emit("removerIngrediente", props.ingrediente);
  }
};
</script>

<template>
  <button
      class="ingrediente"
      @click="aoClicar"
      :aria-pressed="selecionado"
  >
    <Tag :texto="ingrediente" :ativa="selecionado"/>
  </button>
</template>

<style scoped>
.ingrediente {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  transition: 0.2s;
}
</style>
