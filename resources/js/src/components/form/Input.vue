<template>
    <div class="form-group">
        <input
            :type="type"
            :name="name"
            :id="name"
            :class="isEmpty"
            class="input"
            v-model="inputData"
        >
        <label :for="name">{{ placeholder }}</label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputData: '',
        }
    },
    props: {
        type: {
            type: String,
            default: 'text',
        },
        name: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: null,
        },
    },
    computed: {
        isEmpty() {
            this.$emit('inputData', this.inputData);
            return this.inputData.length ? 'input_filled' : null;
        }
    }
}
</script>
