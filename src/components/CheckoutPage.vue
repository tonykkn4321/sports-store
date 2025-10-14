<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col bg-dark text-white">
          <a class="navbar-brand">SPORTS STORE</a>
        </div>
      </div>
    </div>

    <form @submit.prevent="submitOrder">
      <div class="m-2" v-for="field in fields" :key="field.key">
        <div class="form-group m-2">
          <label :for="field.key">{{ field.label }}</label>
          <input
            :id="field.key"
            v-model="order[field.key]"
            type="text"
            autocomplete="off"
            class="form-control"
            :class="{ 'is-invalid': v$.order[field.key]?.$error }"
          />
          <ValidationError :validation="v$.order[field.key]" />
        </div>
      </div>

      <div class="text-center">
        <router-link to="/cart" class="btn btn-secondary m-1">Back</router-link>
        <button type="submit" class="btn btn-primary m-1">Place Order</button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import ValidationError from './ValidationError.vue';

export default {
  name: 'CheckoutPage',
  components: { ValidationError },

  setup() {
    const store = useStore();
    const router = useRouter();

    const order = reactive({
      name: '',
      email: '',
      address: '',
      city: '',
      zip: ''
    });

    const rules = {
      order: {
        name: { required },
        email: { required, email },
        address: { required },
        city: { required },
        zip: { required }
      }
    };

    const v$ = useVuelidate(rules, { order });

    const fields = [
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'address', label: 'Address' },
      { key: 'city', label: 'City' },
      { key: 'zip', label: 'Zip' }
    ];

    async function submitOrder() {
      v$.$touch();
      if (!v$.$invalid) {
        const orderId = await store.dispatch('storeOrder', order);
        await store.dispatch('cart/clearCartData');
        router.push(`/thanks/${orderId}`);
      }
    }

    return {
      order,
      fields,
      submitOrder,
      v$
    };
  }
};
</script>
