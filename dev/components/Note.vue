<template>
    <div class="note">
        <span class="note-title">{{ note.caption }}</span>
        <span class="note-desc">{{ note.text }}</span>
        <a class="btns btn-no" @click="remove();">Удалить</a>
    </div>
</template>

<script>
    export default {
        props: ['note'],

        methods: {
            remove() {
                this.$emit('remove-note')
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../scss/config.scss';
    .note {
        @include flexColumn;
        margin: 20px 0;
        padding: 15px;
        background-color: #fff;
        word-break: break-all;
        box-shadow: 0 0 1px .5px #c5c5c5;

        &-title {
            font-size: 24px;
        }

        &-desc {
            padding-bottom: 15px;
            font-size: 18px;
        }

        .btn-no {
            width: 100px;
            padding: 10px;
            text-align: center;
            font-size: 14px;
        }
    }

    @media screen and (max-width: 480px) {
        .note {
            .btn-no {
                width: 100%;
                margin-top: 30px;
            }
        }
    }
</style>