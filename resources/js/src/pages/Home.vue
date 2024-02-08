<template>
    <div class="home">
        <div class="row">
          <Form/>
        </div>
    </div>
</template>

<script>
import Form from '@/components/form/Form.vue';
export default {
    components: {
        Form,
    }
}
</script>

<style lang="scss" scoped>
    .home {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
