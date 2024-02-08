<template>
    <div class="row">
        <div class="messages">
        <div class="messages__list">
            <div class="messages__list-item" v-for="messages in getMessages" :key="messages">
                <div class="name">
                   <strong>Имя:</strong>
                   <span>{{ messages.name }}</span>
                </div>
                <div class="text">
                    <strong>Сообщение:</strong>
                    <span>{{ messages.text }}</span>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('Messages', ['getMessages']),
    }
}
</script>

<style lang="scss" scoped>
.messages {

    &__list {
        padding-top: 40px;
        padding-bottom: 40px;

        &-item {
            padding: 40px;
            margin-bottom: 40px;
            background-color: $white;
            overflow: hidden;

            strong {
                display: block;
                margin-bottom: 5px;
                margin-right: 5px;
            }

            span {
                overflow-wrap: break-word;
            }

            & > * {
                &:not(:last-child) {
                    margin-bottom: 10px;
                }
            }

            .name {
                strong {
                    display: inline-block;
                }
            }
        }
    }
}
</style>
