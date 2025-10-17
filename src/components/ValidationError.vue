<template>
  <div v-if="shouldShowError" class="text-danger" :id="id" role="alert">
    <div v-if="hasError('required')">This field is required.</div>
    <div v-if="hasError('email')">Please enter a valid email address.</div>
    <div v-if="hasError('zipPattern')">Please enter a valid ZIP code.</div>
  </div>
</template>

<script>
export default {
  name: 'ValidationError',
  props: {
    validation: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      default: ''
    },
    formTouched: {
      type: Object, // it's a ref
      required: true
    }
  },
  computed: {
    shouldShowError() {
      return (this.validation?.$dirty || this.formTouched.value) && this.validation?.$error;
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
