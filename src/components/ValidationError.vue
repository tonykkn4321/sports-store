<template>
  <div v-if="validation?.$dirty && validation?.$error" class="text-danger">
    <div v-if="hasError('required')">This field is required.</div>
    <div v-if="hasError('email')">Please enter a valid email address.</div>
  </div>
</template>

<script>
export default {
  name: 'ValidationError',
  props: {
    validation: {
      type: Object,
      required: true
    }
  },
  methods: {
    hasError(type) {
      return (
        this.validation?.$params &&
        Object.prototype.hasOwnProperty.call(this.validation.$params, type) &&
        !this.validation[type]
      );
    }
  }
};
</script>
