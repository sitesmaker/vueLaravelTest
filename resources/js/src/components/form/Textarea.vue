<template>
    <div class="form-group">
        <textarea
            :name="name"
            :id="name"
            :class="isEmpty"
            class="textarea"
            v-model="message"
        >
        </textarea>
        <label :for="name">{{ placeholder }}</label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
        }
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: 'Введите текст',
        }
    },
    computed: {
        isEmpty() {
            this.$emit('textareaData', this.message);
            return this.message.length ? 'textarea_filled' : null;
        }
    }
}
</script>
