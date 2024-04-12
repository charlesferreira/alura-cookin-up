<script setup lang="ts">
import SelecionarIngredientes from "./SelecionarIngredientes.vue";
import SuaLista from "@/components/SuaLista.vue";
import {ref} from "vue";
import MostrarReceitas from "@/components/MostrarReceitas.vue";

enum Pagina {
  INGREDIENTES = "ingredientes",
  RECEITAS = "receitas",
}

const ingredientes = ref<string[]>([]);
const pagina = ref<Pagina>(Pagina.INGREDIENTES);

const adicionarIngrediente = (ingrediente: string) => {
  if (!ingredientes.value.includes(ingrediente)) {
    ingredientes.value.push(ingrediente);
  }
};

const removerIngrediente = (ingrediente: string) => {
  ingredientes.value = ingredientes.value.filter((i) => i !== ingrediente);
};

const navegar = (novaPagina: Pagina) => {
  pagina.value = novaPagina;
};
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes"/>

    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes
          v-if="pagina === Pagina.INGREDIENTES"
          @adicionar-ingrediente="adicionarIngrediente"
          @remover-ingrediente="removerIngrediente"
          @buscar-receitas="navegar(Pagina.RECEITAS)"
      />

      <MostrarReceitas
        v-else-if="pagina === Pagina.RECEITAS"
        :ingredientes="ingredientes"
        @editar-lista="navegar(Pagina.INGREDIENTES)"
      />
    </KeepAlive>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0 0;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}

</style>
