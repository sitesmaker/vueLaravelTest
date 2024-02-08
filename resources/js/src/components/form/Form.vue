<template>
  <form class="form" @submit.prevent="submit">
    <Input
        name="name"
        placeholder="Введите ваше имя"
        @inputData="getInputData"
    />
    <Textarea
        name="text"
        @textareaData="getTextareaData"
    />
    <button
        type="submit"
        class="btn"
        :disabled="disabledBtn"
    >
        Отправить
    </button>
  </form>
</template>

<script>
import Input from '@/components/form/Input.vue';
import Textarea                     from '@/components/form/Textarea.vue';
import { mapActions, mapMutations } from 'vuex';

export default {
    data() {
        return {
            inputData: '',
            textareaData: '',
        }
    },
    components: {
        Input,
        Textarea,
    },
    methods: {
        ...mapMutations('Messages', ['PUSH_MESSAGES_DATA']),
        ...mapActions('Messages', ['sendMessage']),
        getInputData(event){
            this.inputData = event;
        },
        getTextareaData(event) {
            this.textareaData = event;
        },
        submit() {
          const data = {
            name: this.inputData,
            text: this.textareaData
          };

          this.PUSH_MESSAGES_DATA(data);
          this.sendMessage(data);
        }
    },
    computed: {
        disabledBtn() {
            return this.inputData.length && this.textareaData.length ? false : true;
        }
    }
}
</script>
