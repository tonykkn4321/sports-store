<template>
  <tr>
    <td>
      <input
        type="number"
        class="form-control-sm"
        style="width:5em"
        :value="qvalue"
        @input="sendChangeEvent"
      />
    </td>
    <td>{{ line.product.name }}</td>
    <td class="text-right">
      {{ $currency(line.product.price) }}
    </td>
    <td class="text-right">
      {{ $currency(line.quantity * line.product.price) }}
    </td>
    <td class="text-center">
      <button class="btn btn-sm btn-danger" @click="sendRemoveEvent">
        Remove
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["line"],
  data() {
    return {
      qvalue: this.line.quantity
    };
  },
  methods: {
    sendChangeEvent($event) {
      const newValue = Number($event.target.value);
      if (newValue > 0) {
        this.$emit("quantity", newValue);
        this.qvalue = newValue;
      } else {
        this.$emit("quantity", 1);
        this.qvalue = 1;
        $event.target.value = 1;
      }
    },
    sendRemoveEvent() {
      this.$emit("remove", this.line);
    }
  }
};
</script>
