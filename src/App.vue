<template>
  <ProductStore />  
</template>

<script>
  import ProductStore from "./components/ProductStore";
  import { mapActions } from "vuex";

  export default {
    name: 'App',
    components: { ProductStore },
    methods: {
        ...mapActions(["getData"])
      },
      created() {
        this.getData();
      }
    }
</script>
